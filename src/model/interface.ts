// jwt sing 参数
export interface SignIn {
    clientip: string;
    id: string;
    passwd: string;
}
// db_config
export interface DbConfigIn {
    user: string;
    host: string;
    database: string;
    password: string;
    port: number;
}
// pg query params
export interface ParamsIn {
    [index: number]: any;
}

// 用户登录
export interface UserLogInIn {
    name: string; //用户名
    email: string; //邮箱
}

// 用户注册
export interface UserRegisterIn {
    id: string;
    name: string;
    passwd: string;
    email: string;
}

// modifyUserInfo
export interface ModifyUserInfoIn {
    id: string;
    avatar: string;
    address: string;
    sex: string;
    profile: string;
    [index: string]: any;
}

// add category params
export interface AddCategoryIn {
    name: string;
    brief: string;
    alias: string;
}

// modify category params
export interface ModifyCategoryIn {
    id: string;
    name: string;
    brief: string;
    alias: string;
}
// add Article params
export interface AddArticleIn {
    title: string;
    content: string;
    brief: string;
    category_id: string;
    author_id: string;
}
// modify article params
export interface ModifyArticleIn {
    id: string;
    title: string;
    content: string;
    brief: string;
    category_id: string;
}

// add comment
export interface AddCommentIn {
    parent: string;
    content: string;
    author_id: string;
    article_id: string;
}
