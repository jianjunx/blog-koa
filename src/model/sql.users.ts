import { ModifyUserInfoIn } from "../model/interface";

// 用户登录
export const USER_LOGIN = (): string =>
    `SELECT id,name,passwd,email,state FROM x_users WHERE "name" = $1 OR email = $2`;
// 用户注册
export const USER_RES = (): string =>
    `INSERT INTO x_users (id,name,passwd,email,"createTime") VALUES ($1,$2,$3,$4,$5)`;

// ID获取用户信息
export const USER_ID_INFO = (): string =>
    `SELECT id,name,passwd,email,avatar,address,sex,profile,state FROM x_users
    WHERE id = $1`;

// 修改用户密码
export const UPDATE_PASSWD = (): string =>
    `UPDATE x_users SET passwd = $1 WHERE id = $2`;

// 修改用户信息

export const MODIFY_USERINFO = (params: ModifyUserInfoIn): string | any => {
    const { id, avatar, address, sex, profile } = params;
    if (!(avatar || address || sex || profile)) return "";
    const _sql: any = [],
        _param: any = [id];
    ["avatar", "address", "sex", "profile"].forEach((v, i) => {
        if (params[v]) {
            _param.push(params[v]);
            _sql.push(`${v} = ${_param.length}`);
        }
    });
    return [`UPDATE x_users SET ${_sql.join(",")} WHERE id = $1`, _param];
};
