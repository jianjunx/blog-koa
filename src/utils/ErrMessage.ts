// errMsg
enum errMsg {
    "参数错误",
    "登录信息失效",
    "密码错误",
    "用户名不存在",
    "用户名已存在",
    "服务器出错"
}

export default (code: number):string => {
    return errMsg[code-1] || errMsg[6];
};
