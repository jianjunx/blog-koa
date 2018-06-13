import * as Router from "koa-router";
import User from "./User";
import Article from "./Article";
import Category from "./Category";
import Comment from "./Comment";
const routers = new Router();

User(routers); //user
Article(routers); //article
Category(routers); //Category
Comment(routers); //comment

export default routers;
