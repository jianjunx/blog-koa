import {
    $UserLogin,
    $UserRegister,
    $UserIdInfo,
    $ModifyPasswd,
    $modifyUserInfo
} from "../service/users";
import { sign, verify } from "../utils/Jwt";
import * as uuid from "uuid/v4";
import redis from "../utils/redis";
import mailer from "../utils/mailer";

// 用户登录
export const userLogin = async (ctx: any) => {
    const { name = "", passwd = "", email = "" } = ctx.request.body;
    if (!(passwd && (name || email))) throw 1;
    // 查询数据库
    const res = await $UserLogin({ name, email });
    if (res.len == 0) throw 4;
    const _res = res.data[0];
    // 验证密码
    if (passwd !== _res.passwd) throw 3;
    const { clientip } = ctx.header;
    // 生成token
    const token = await sign({ clientip, id: _res.id, passwd }); //生成token
    // 将token存进Redis
    redis.set(_res.id, token);

    ctx.body = {
        token,
        msg: "ok",
        err: 0,
        data: { id: _res.id, name, email }
    };
};

// 用户注册
export const userRegister = async (ctx: any) => {
    const { name = "", passwd = "", email = "" } = ctx.request.body;
    const { clientip } = ctx.header;
    if (!(name && passwd && email)) throw 1;
    // 查询用户名或邮箱是否存在数据库
    const findRes = await $UserLogin({ name, email });
    // 验证是否已经注册过
    if (findRes.len > 0) {
        const _data = findRes.data[0];
        if (_data.name == name) throw 5;
        if (_data.email == email) throw 6;
        return;
    }
    // 生成uuid
    const id = uuid();
    // 写入用户到数据库
    await $UserRegister({ id, name, passwd, email });
    const token = await sign({ clientip, id, passwd }); //生成token
    // 将token存入Redis
    redis.set(id, token);

    ctx.body = {
        token,
        msg: "ok",
        err: 0,
        data: { id, name, email }
    };
};
// 退出登录
export const exitLogin = async (ctx: any) => {
    const { id } = ctx.request.body;
    if (!id) throw 1;
    // 删除Redis的token
    await redis.del(id);
    ctx.body = { msg: "退出成功", err: 0 };
};
// token登录
export const tokenLogin = async (ctx: any) => {
    const { token, clientip } = ctx.header;
    if (!token) throw 2;
    // 解析token
    const res = await verify(token);
    if (res === 0) throw 2;
    // 验证ip
    if (res.data.clientip !== clientip) throw 2;
    // 根据id查用户信息
    const data = await $UserIdInfo(res.data.id);
    // 验证用户信息
    if (data.len === 0) throw 4;
    const _data = data.data[0];
    if (_data.passwd !== res.data.passwd) throw 2;
    // 生成新的token
    const newToken = await sign({
        clientip,
        id: res.data.id,
        passwd: res.data.passwd
    });
    // 将新的token存入Redis
    redis.set(_data.id, newToken);
    // 响应
    ctx.body = {
        token: newToken,
        msg: "ok",
        err: 0,
        data: {
            id: _data.id,
            name: _data.name,
            email: _data.email
        }
    };
};

// 用户修改密码
export const modifyPasswd = async (ctx: any) => {
    const { id, oldpwd, newpwd } = ctx.request.body;
    // 验证
    if (!id || !oldpwd || !newpwd) throw 1;
    // 根据id查询该用户信息
    const res = await $UserIdInfo(id);
    // 验证
    if (res.len === 0) throw 4;
    if (res.data[0].passwd !== oldpwd) throw 3;
    // 更新密码
    await $ModifyPasswd(id, newpwd);
    // 删除Redis中的登录信息
    await redis.del(id);
    // 响应
    ctx.body = {
        msg: "修改成功",
        err: 0
    };
};

// 修改用户信息
export const modifyUserInfo = async (ctx: any) => {
    const {
        id = undefined,
        avatar = undefined,
        address = undefined,
        sex = undefined,
        profile = undefined
    } = ctx.request.body;
    // 验证id
    if (!id) throw 1;
    // update数据
    await $modifyUserInfo({ id, avatar, address, sex, profile });
    // 响应
    ctx.body = {
        msg: "ok",
        err: 0
    };
};

// 查询用户信息
export const findUserInfo = async (ctx: any) => {
    const { id = undefined } = ctx.request.body;
    if (!id) throw 1;
    // 通过id查询用户
    const res = await $UserIdInfo(id);
    const _res = res.data[0];
    delete _res.passwd; //删除掉密码
    delete _res.id; //删除id
    // 响应
    ctx.body = {
        msg: "ok",
        err: 0,
        data: _res
    };
};
// 
// send email
export const sendMail = async (ctx: any) => {
    const { to } = ctx.query;
    if (!to) throw 1;
    const code = Math.floor(Math.random() * 1000000);
    // send email
    await mailer({
        to,
        text: `您的验证码是 ${code}`,
        html: `<p>您的验证码是 ${code}</p>`,
        subject: `【JEF.SITE】验证码`
    });
    ctx.body = {
        msg: "ok",
        err: 0,
        code
    };
};
