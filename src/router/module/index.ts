import * as Router from "koa-router";
import User from "./User";
import Article from "./Article";
import Category from "./Category";

const routers = new Router();

User(routers); //user
Article(routers); //article
Category(routers);//Category

export default routers;
