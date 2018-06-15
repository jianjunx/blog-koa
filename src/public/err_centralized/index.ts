import { errLog, resLog } from "../../utils/Logger";
import ErrMessage from "../../utils/ErrMessage";
import { err_log, res_log } from "../../utils/mongdb";
import format from "../../utils/format";

// 集中处理错误和保存LOG记录
export default async (ctx: any, next: any) => {
    try {
        await next();
        // 保存响应日志
        resLog(ctx);
        // 保存响应日志到mongodb
        // res_log.insert({
        //     time: format("yyyy-MM-dd hh:mm:ss"),
        //     Context: logInfo(ctx)
        // });
    } catch (error) {
        if (typeof error != "number") {
            error = 0;
        }
        // 返回错误信息
        ctx.body = {
            msg: ErrMessage(error),
            err: 1
        };
        // 保存错误日志
        errLog(error, ctx);
        // 保存错误日志到mongodb
        // err_log.insert({
        //     Time: format("yyyy-MM-dd hh:mm:ss"),
        //     Err: ErrMessage(error),
        //     Context: logInfo(ctx)
        // });
    }
};
// 选择要存储的内容
function logInfo(ctx: any) {
    return {
        method: ctx.method,
        headers: ctx.headers,
        url: ctx.url,
        status: ctx.status,
        message: ctx.message,
        body: ctx.body,
        query: ctx.query,
        requestBody: ctx.request.body
    };
}
