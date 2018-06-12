import {
    userLogin,
    userRegister,
    tokenLogin,
    exitLogin,
    modifyPasswd,
    modifyUserInfo,
    findUserInfo
} from "../../controller/users";

export default (Router: any) => {
    Router
        // 用户注册
        .post("/user/register", userRegister)
        // 用户登录
        .post("/user/login", userLogin)
        // 获取用户信息
        .post("/user", findUserInfo)
        // 修改用户信息
        .put("/user", modifyUserInfo)
        // 修改密码
        .post("/user/passwd", modifyPasswd)
        // 使用token登录
        .get("/user", tokenLogin)
        // 退出登录
        .post("/user/exit", exitLogin);
};
