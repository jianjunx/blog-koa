import { verify } from "../../utils/Jwt";

export default async (ctx: any, next: any) => {
    const _method = ctx.request.method; //请求类型
    const _url = ctx.request.url; //origin
    const flag =
        _method === "GET" ||
        _url.includes("login") ||
        _url.includes("register");
    if (!flag) {
        const { clientip, token } = ctx.header;
        const res = await verify(token);
        if (res === 0) throw 2;
        // if (res.clientip !== clientip) throw 2;
    }
    await next();
};
