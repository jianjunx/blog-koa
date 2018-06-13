import db from "../utils/pg";
import {
    UserLogInIn,
    UserRegisterIn,
    ModifyUserInfoIn
} from "../model/interface";
import {
    USER_LOGIN,
    USER_RES,
    USER_ID_INFO,
    UPDATE_PASSWD,
    MODIFY_USERINFO
} from "../model/sql.users";

// 用户登录
export const $UserLogin = async (data: UserLogInIn) => {
    return await db
        .sql(USER_LOGIN())
        .param([data.name || "null", data.email || "null"]);
};

// 用户注册
export const $UserRegister = async (data: UserRegisterIn) => {
    const now = new Date();
    return await db
        .sql(USER_RES())
        .param([data.id, data.name, data.passwd, data.email, now]);
};

// 用id获取用户信息
export const $UserIdInfo = async (id: string) => {
    return await db.sql(USER_ID_INFO()).param([id]);
};

// 修改密码
export const $ModifyPasswd = async (id: string, newpwd: string) => {
    return await db.sql(UPDATE_PASSWD()).param([id, newpwd]);
};

// 修改用户信息
export const $modifyUserInfo = async (params: ModifyUserInfoIn) => {
    const info = MODIFY_USERINFO(params);
    // 返回为空则不用执行数据库
    if (!info) return Promise.resolve();
    const [sql, prm] = info; //结构
    console.log(sql)
    return await db.sql(sql).param(prm);
};
