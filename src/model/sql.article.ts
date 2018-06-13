// add article sql
export const ADD_ARTICLE = (): string => {
    return `INSERT INTO x_article (id,title,content,brief,category_id,author_id,create_time,pv)
    VALUES($1,$2,$3,$4,$5,$6,$7,$8)`;
};

// delete article sql
export const DEL_ARTICLE = (): string => {
    return `DELETE FROM x_article WHERE id = $1`;
};

// get article details
export const GET_DETAILS = (): string => {
    return `SELECT a.title,a."content",a.brief,a."create_time",u."name" AS author,a."author_id",(SELECT COUNT(*) FROM x_likes l WHERE l."article_id" = a.id) AS likes,a.pv,(SELECT COUNT(*) FROM x_likes l2 WHERE l2."user_id" = $2) AS islikes
    FROM x_article a 
    LEFT JOIN x_users u
    ON a."author_id" = u."id"
    WHERE a.id = $1`;
};

// update page view
export const PAGE_VIEW = (): string => {
    return `UPDATE x_article SET pv = $2 WHERE id = $1`;
};

// likes
export const ADD_LIKES = (): string => {
    return `INSERT INTO x_likes (article_id,user_id,category_id) VALUES($1,$2,$3)`;
};

// cancel likes
export const DEL_LIKES = ():string=>{
    return `DELETE FROM x_likes WHERE user_id = $1 AND article_id = $2`
}

// modify article
export const UPDATE_ARTICLE = ():string=>{
    return `UPDATE x_article SET title = $2,content = $3,brief = $4,category_id = $5 WHERE id = $1`
}

// get article list
export const GET_LIST = (article_id:string):string =>{
    const w = article_id?`WHERE a.category_id = '${article_id}'`:'';
    return `SELECT a.id,a.title,a.brief,a.create_time,a.pv,(SELECT count(*) FROM x_likes l WHERE l.article_id = a.id) AS likes,
    FROM x_article a
    LEFT JOIN x_users u
    ON a.author_id = u.id
    LEFT JOIN x_category c
    ON a.category_id = c.id
    LEFT JOIN x_users u ${w}
    LIMIT $1 OFFSET $2`
}

