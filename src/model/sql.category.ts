// insert Category 记录
export const ADD_CATEGORY = (): string => {
    return `INSERT INTO x_category (id,name,brief,alias) VALUES($1,$2,$3,$4)`;
};

// get Category List
export const GET_CATEGORY_LIST = (): string => {
    return `SELECT id,name,brief,alias FROM x_category`;
};

// delete Category
export const DEL_CAYEGORY = (): any => {
    return [`DELETE FROM x_category WHERE id = $1`,`DELETE FROM x_article WHERE categoryId = $1`];
};

// /modify Category
export const MODIFY_CATEGORY = (): string => {
    return `UPDATE x_category SET (name,brief,alias) VALUES($2,$3,$4) WHERE id = $1`;
};
