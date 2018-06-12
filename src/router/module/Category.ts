import {
    addCategory,
    getCategoryList,
    delCategory,
    modifyCategory
} from "../../controller/category";

export default (Router: any) => {
    Router
        // 获取分类列表
        .get("/category", getCategoryList)
        // 添加分类
        .post("/category", addCategory)
        // 修改分类
        .put("/category", modifyCategory)
        // 删除分类
        .del("/category", delCategory);
};
