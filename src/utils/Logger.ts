import * as log4js from "log4js";
import config from "../config/log_config";
import ErrMessage from "./ErrMessage";

log4js.configure(config);

const errLogger = log4js.getLogger("error");
const resLogger = log4js.getLogger("response");

export const errLog = (err: number, ctx: object): void => {
    errLogger.error({
        info: {
            msg: ErrMessage(err),
            err: 1
        },
        ctx
    });
};

export const resLog = (ctx: object): void => {
    resLogger.info(ctx);
};
