import db from "../utils/pg";
import {
    ADD_CATEGORY,
    GET_CATEGORY_LIST,
    DEL_CAYEGORY,
    MODIFY_CATEGORY
} from "../model/sql.category";
import { AddCategoryIn, ModifyCategoryIn } from "../model/interface";
// 添加分类
export const $AddCategory = async (params: AddCategoryIn) => {
    return db
        .sql(ADD_CATEGORY())
        .param(["id", params.name, params.brief, params.alias]);
};

// get category list
export const $GetCategoryList = async () => {
    return db.sql(GET_CATEGORY_LIST()).param();
};

// delete category
export const $DelCategory = async (id: string) => {
    // 执行事务，删除category的同事会删除对应article
    return db.transactions(DEL_CAYEGORY(), [[id], [id]]);
};

// modify category
export const $ModifyCategory = async (params: ModifyCategoryIn) => {
    return db
        .sql(MODIFY_CATEGORY())
        .param([params.id, params.name, params.brief, params.alias]);
};
