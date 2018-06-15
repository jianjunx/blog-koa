import db from "../utils/pg";
import { ADD_COMMENT, DEL_COMMENT,GET_COMMENT } from "../model/sql.comment";
import { AddCommentIn } from "../model/interface";

// add comment
export const $AddComment = (params: AddCommentIn) => {
    const now = new Date();
    return db
        .sql(ADD_COMMENT())
        .param([
            "id",
            params.parent,
            params.content,
            params.author_id,
            params.article_id,
            now
        ]);
};

// delete comment
export const $DelComment = (id: string) => {
    return db.sql(DEL_COMMENT()).param([id]);
};

// get comment
export const $GetComment = (article_id:string)=>{
    return db.sql(GET_COMMENT()).param([article_id])
}