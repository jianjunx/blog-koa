import monk from "monk";
import {mg_config} from '../config/db_config'

const db = monk(mg_config);

export const err_log = db.get("err_log");
export const res_log = db.get("res_log");
