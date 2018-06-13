import { $AddComment, $DelComment } from "../service/comment";
// AddComment
export const addComment = async (ctx: any) => {
    const { parent = "", content, author_id, article_id } = ctx.request.body;
    if (!(author_id && article_id)) throw 1;
    // insert comment
    await $AddComment({ parent, content, author_id, article_id });
    // send
    ctx.body = {
        msg: "ok",
        err: 0
    };
};

// delete comment
export const delComment = async (ctx: any) => {
    const { id } = ctx.request.body;
    if (!id) throw 1;
    // delete comment to db
    await $DelComment(id);
    // send
    ctx.body = {
        msg: "ok",
        err: 0
    };
};
