import {
    $AddCategory,
    $GetCategoryList,
    $DelCategory,
    $ModifyCategory
} from "../service/category";

// 添加分类
export const addCategory = async (ctx: any) => {
    const { name = "", brief = "", alias = "" } = ctx.request.body;
    // 验证
    if (!(name && brief && alias)) throw 1;
    // insert to db
    await $AddCategory({ name, brief, alias });
    // echo
    ctx.body = {
        msg: "ok",
        err: 0
    };
};

// 获取分类列表
export const getCategoryList = async (ctx: any) => {
    // get list to db
    const res = await $GetCategoryList();
    // echo
    ctx.body = {
        msg: "ok",
        err: 0,
        data: res.data
    };
};

// delete category
export const delCategory = async (ctx: any) => {
    const { id } = ctx.request.body;
    if (!id) throw 1;
    // delete category to db
    await $DelCategory(id);
    // send
    ctx.body = {
        msg: "ok",
        err: 0
    };
};

// modify category
export const modifyCategory = async (ctx: any) => {
    const { id, name, brief, alias } = ctx.request.body;
    if (!(id && name && brief && alias)) throw 1;
    // modify category to db
    await $ModifyCategory({ id, name, brief, alias });
    // send
    ctx.body = {
        msg: "ok",
        err: 0
    };
};
