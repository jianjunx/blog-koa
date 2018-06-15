# KOA2-TS-PG-BLOG

使用koa2 ➕ typescript ➕ postgresql,redies,mongodb 开发的博客服务器后台
旧版👉 [koa2-pg-blog](https://github.com/Jeffyx/blog-server)

[API 文档⤴️](https://github.com/Jeffyx/blog-server_v2/blob/master/src/router/README.md)

# 运行环境

```javascript
/*
NodeJS v8.0+
npm & cnpm & yarn
typescript
Postgresql 9.5+
mongodb
redis
Pm2 //生产环境守护进程
Nginx & Apache //生产环境代理请求
*/
```

# 启动脚本
```javascript

npm i //安装依赖
//*修改config 下的dbConfig.js 文件连接数据库
npm start //编译
npm run dev //启动项目 热更新
// 'http://localhost:3000'
```

# Nginx 配置
```javascript

// $ vim /etc/nginx/nginx.conf
/*
  http {
    server {
      listen 80;
      server_name yourdomin.com;
      location / {
        proxy_pass http:127.0.0.1:3000;
      }
    }
    //https
    server {
      listen 443;
      server_name yourdomin.com;
      ssl on;
      ssl_certificate fullchain.cer; //ssl证书fullchain.cer的路径
      ssl_certificate_key yourdomin.key; //key的路径
      location / {
        proxy_pass http://127.0.0.1:3000;
      }
    }
  }
*/

```
# 目录结构

```javascript
  /*
  config
  --dbConfig.ts  //数据连接配置
  --logConfig  //log记录配置
  contoroller //代码逻辑在这里
  --article.ts //.....
  logs //log目录
  --error
  --response
  router //路由目录
  --index.ts
  --v1 //api版本
  sentence //分离sql语句目录
  --article.ts //....
  utils  //功能函数方法目录
  app.ts  //入口文件
*/
```

有时间再完善！