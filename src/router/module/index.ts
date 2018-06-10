import * as Router from "koa-router";
import User from './User';
import Article from './Article';

const routers = new Router();

User(routers); //user
Article(routers); //article

export default routers