import * as Router from "koa-router";
import ErrCentralized from '../public/err_centralized';
import Authentication from '../public/authentication';
import API_V1 from './module/index';

const routes = new Router();

routes.use("/v2", API_V1.routes(), API_V1.allowedMethods());


export default (app: any) => {
    app.use(ErrCentralized); //集中处理错误
    app.use(Authentication); //集中验证token
    app.use(routes.routes());
    app.use(routes.allowedMethods());
};
