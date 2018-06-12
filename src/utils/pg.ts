import { Pool } from "pg";
import { pg_config } from "../config/db_config";
import { DbConfigIn, ParamsIn } from "../model/interface";
import * as uuid from "uuid/v4";

class Query {
    protected _pool: any;
    protected _sql: string;
    constructor(config: DbConfigIn) {
        this._pool = new Pool(config);
    }
    sql(_sql: string) {
        this._sql = _sql;
        return this;
    }
    async param(params?: ParamsIn) {
        try {
            let res = null;
            if (params) {
                if (params[0] == "id") {
                    params[0] = uuid();
                }
                res = await this._pool.query(this._sql, params);
            } else {
                res = await this._pool.query(this._sql);
            }
            return Promise.resolve({
                data: res.rows,
                len: res.rowCount
            });
        } catch (error) {
            return Promise.reject(0);
        }
    }
    transactions(text: any, param: any) {
        return new Promise((resolve, reject) => {
            (async () => {
                const client = await this._pool.connect();
                try {
                    await client.query("BEGIN");
                    for (let index = 0; index < text.length; index++) {
                        await client.query(text[index], param[index]);
                    }
                    await client.query("COMMIT");
                    resolve(1);
                } catch (e) {
                    await client.query("ROLLBACK");
                    throw e;
                    reject(0);
                } finally {
                    client.release();
                }
            })().catch(e => console.error(e.stack));
        });
    }
}

export default new Query(pg_config);
