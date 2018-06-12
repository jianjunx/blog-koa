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
    async param(params: ParamsIn) {
        try {
            if (params[0] == "id") {
                params[0] = uuid();
            }
            const res = await this._pool.query(this._sql, params);
            return Promise.resolve({
                data: res.rows,
                len: res.rowCount
            });
        } catch (error) {
            return Promise.reject(0);
        }
    }
}

export default new Query(pg_config);
