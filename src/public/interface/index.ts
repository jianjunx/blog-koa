// jwt sing 参数
export interface SignIn {
    clientip: string;
    userName: string;
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