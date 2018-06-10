import { errLog, resLog } from "../../utils/Logger";
import ErrMessage from "../../utils/ErrMessage";

export default async (ctx: any, next: any) => {
    try {
        await next();
        resLog(ctx);
    } catch (error) {
        ctx.body = ErrMessage(error);
        errLog(error, ctx);
    }
};
