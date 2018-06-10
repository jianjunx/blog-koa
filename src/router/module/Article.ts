export default (Router: any) => {
    Router
        // 获取文章列表
        .get("/article/list")
        // 获取文章详情
        .get("/article",(ctx:any)=>{
            ctx.body = 'article'
        })
        // 添加文章
        .post("/article")
        // 修改文章
        .put("/article")
        // 删除文章
        .del("/article");
};
