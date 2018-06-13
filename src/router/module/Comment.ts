import { addComment, delComment } from "../../controller/comment";

export default (Router: any) => {
    Router
        // 添加评论
        .post("/comment", addComment)
        // 删除评论
        .del("/comment", delComment);
};
