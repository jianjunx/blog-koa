// 添加评论
export const ADD_COMMENT = ():string=>{
    return `INSERT INTO x_comment (id,parent,content,author_id,article_id,create_time) VALUES($1,$2,$3,$4,$5,$6)`
}
// 删除评论
export const DEL_COMMENT = ():string=>{
    return `DELETE FROM x_comment WHERE id = $1`
}
// get comment list
export const GET_COMMENT = ():string=>{
    return `SELECT c.id,c.parent,c.content,c.create_time,u.name
    FROM x_comment c
    LEFT JOIN x_users u
    ON c.author_id = u.id
    WHERE c.article_id = $1`
}