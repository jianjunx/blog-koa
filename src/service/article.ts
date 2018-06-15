import db from "../utils/pg";
import {
    ADD_ARTICLE,
    DEL_ARTICLE,
    GET_DETAILS,
    PAGE_VIEW,
    DEL_LIKES,
    UPDATE_ARTICLE,
    GET_LIST,
    ADD_LIKES
} from "../model/sql.article";
import { AddArticleIn, ModifyArticleIn } from "../model/interface";
// add article
export const $AddArticle = (params: AddArticleIn) => {
    const now = new Date();
    return db
        .sql(ADD_ARTICLE())
        .param([
            "id",
            params.title,
            params.content,
            params.brief,
            params.category_id,
            params.author_id,
            now,
            0
        ]);
};

// delete article
export const $DelArticle = (id: string) => {
    return db.sql(DEL_ARTICLE()).param([id]);
};

// get article details
export const $GetDetails = (id: string, user_id: string) => {
    return db.sql(GET_DETAILS()).param([id, user_id]);
};

// update page view
export const $PageView = (id: string, pv: number) => {
    return db.sql(PAGE_VIEW()).param([id, ++pv]);
};

// cancel likes
export const $DelLikes = (user_id: string, article_id: string) => {
    return db.sql(DEL_LIKES()).param([user_id, article_id]);
};

// modify article
export const $ModifyArticle = (params: ModifyArticleIn) => {
    return db
        .sql(UPDATE_ARTICLE())
        .param([
            params.id,
            params.title,
            params.content,
            params.brief,
            params.category_id
        ]);
};

// get article list
export const $ArticleList = (
    article_id: string,
    page: number,
    total: number
) => {
    const [l, t] = GET_LIST(article_id);
    return Promise.all([
        db.sql(l).param([total, total * (page - 1)]),
        db.sql(t).param()
    ]);
};

// add likes
export const $AddLikes = (
    article_id: string,
    user_id: string,
    category_id: string
) => {
    return db.sql(ADD_LIKES()).param([article_id, user_id, category_id]);
};
