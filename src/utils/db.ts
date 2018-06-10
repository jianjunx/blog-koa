import { Pool } from "pg";
import config from "../config/db_config";
import { DbConfigIn } from "../public/interface/index";

class Query {
    protected pool: any;
    protected sql: string;
    constructor(config: DbConfigIn) {
        this.pool = new Pool(config);
    }
    in(sql: string) {
        this.sql = sql;
        return this;
    }
    async out(params: object) {
        try {
            const res = this.pool.query(this.sql, params);
            return Promise.resolve({
                data: res.rows,
                len: res.rowCount
            });
        } catch (error) {
            return Promise.reject(5);
        }
    }
}

export default new Query(config);
