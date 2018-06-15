// postgres数据库连接配置
export const pg_config = {
    user: "postgres",
    host: "127.0.0.1",
    database: "yourdb",
    password: "jef.site",
    port: 5432
};

// mongodb 连接配置
export const mg_config = "localhost:27017/BLOG_LOG";

// redis 连接配置
export const rd_config = {
    port: 6379,          // Redis port
    host: '127.0.0.1',   // Redis host
    family: 4,           // 4 (IPv4) or 6 (IPv6)
    password: 'jef.site',
    db: 0
  }