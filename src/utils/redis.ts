import * as Redis from "ioredis";
import { rd_config } from "../config/db_config";

const redis = new Redis(rd_config);

export default redis;
