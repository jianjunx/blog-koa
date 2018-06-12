import { verify } from "../../utils/Jwt";
import redis from "../../utils/redis";

export default async (ctx: any, next: any) => {
    const _method = ctx.request.method; //请求类型
    const _url = ctx.request.url; //origin
    const flag =
        _method === "GET" ||
        _url.includes("login") ||
        _url.includes("register");
        // GET请求和登录注册不验证token
    if (!flag) {
        // 获取ip 和token
        const { clientip, token } = ctx.header;
        if (!token) throw 7;
        // 解析token
        const res = await verify(token);
        if (res === 0) throw 2;
        // 验证登录ip和请求ip是否一致
        if (res.clientip !== clientip) throw 2;
        // 查询Redis记录 验证是否登出
        redis.get(res.id, (err: Error, result: string) => {
            if (err) throw 0;
            console.log(1,result)
            if (result !== token) throw 2;
        });
    }
    await next();
};
