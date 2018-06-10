import * as Koa from "koa";
import * as bodyParser from "koa-bodyparser";
import * as cors from "koa2-cors";
import router from "./router/index";

const app = new Koa();

app.use(bodyParser()); //bodyParser中间件
app.use(cors()); //解决跨域

router(app); //路由

app.listen(3000, () => {
    console.log("Server start OK! to http://127.0.0.1:3000/");
});
