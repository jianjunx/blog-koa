export default (Router: any) => {
    Router
        // 用户注册
        .post("/user/register")
        // 用户登录
        .post("/user/login")
        // 获取用户信息
        .post("/user")
        // 修改用户信息
        .put("/user")
        // 修改密码
        .post("/user/passwd");
};
