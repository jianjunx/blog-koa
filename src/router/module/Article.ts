import {
    getArticleList,
    delArticle,
    articleDetails,
    modifyArticle,
    addAtricle,
    delLikes,
    addLikes
} from "../../controller/article";

export default (Router: any) => {
    Router
        // 获取文章列表
        .get("/article/list", getArticleList)
        // 获取文章详情
        .get("/article", articleDetails)
        // 添加文章
        .post("/article", addAtricle)
        // 修改文章
        .put("/article", modifyArticle)
        // 删除文章
        .del("/article", delArticle)
        // 取消文章的赞
        .del("/likes", delLikes)
        // 点赞一个文章
        .post("/likes", addLikes);
};
