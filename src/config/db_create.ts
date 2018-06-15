// article 建表语句
const article = `CREATE TABLE "public"."x_article" (
    "id" varchar(36) COLLATE "pg_catalog"."default" NOT NULL,
    "title" varchar(255) COLLATE "pg_catalog"."default",
    "content" varchar(20000) COLLATE "pg_catalog"."default",
    "brief" varchar(500) COLLATE "pg_catalog"."default",
    "category_id" varchar(36) COLLATE "pg_catalog"."default",
    "author_id" varchar(36) COLLATE "pg_catalog"."default",
    "create_time" date,
    "pv" int4,
    PRIMARY KEY ("id")
  )
  ;
  
  ALTER TABLE "public"."x_article" 
    OWNER TO "postgres";
  
  COMMENT ON COLUMN "public"."x_article"."id" IS 'article id';
  
  COMMENT ON COLUMN "public"."x_article"."title" IS '标题';
  
  COMMENT ON COLUMN "public"."x_article"."content" IS '内容';
  
  COMMENT ON COLUMN "public"."x_article"."brief" IS '摘要';
  
  COMMENT ON COLUMN "public"."x_article"."category_id" IS '分类ID';
  
  COMMENT ON COLUMN "public"."x_article"."author_id" IS '创建人ID';
  
  COMMENT ON COLUMN "public"."x_article"."create_time" IS '创建时间';
  
  COMMENT ON COLUMN "public"."x_article"."pv" IS '阅读量';`

  // users 建表语句
  const users = `CREATE TABLE "public"."x_users" (
    "id" varchar(36) COLLATE "pg_catalog"."default" NOT NULL,
    "name" varchar(255) COLLATE "pg_catalog"."default",
    "email" varchar(255) COLLATE "pg_catalog"."default",
    "passwd" varchar(255) COLLATE "pg_catalog"."default",
    "create_time" date,
    "avatar" varchar(255) COLLATE "pg_catalog"."default",
    "address" varchar(255) COLLATE "pg_catalog"."default",
    "sex" varchar(255) COLLATE "pg_catalog"."default",
    "profile" varchar(255) COLLATE "pg_catalog"."default",
    "state" varchar(255) COLLATE "pg_catalog"."default",
    PRIMARY KEY ("id")
  )
  ;
  
  ALTER TABLE "public"."x_users" 
    OWNER TO "postgres";
  
  COMMENT ON COLUMN "public"."x_users"."id" IS 'user id';
  
  COMMENT ON COLUMN "public"."x_users"."name" IS '登录名';
  
  COMMENT ON COLUMN "public"."x_users"."email" IS '登录邮箱';
  
  COMMENT ON COLUMN "public"."x_users"."passwd" IS '密码';
  
  COMMENT ON COLUMN "public"."x_users"."create_time" IS '注册时间';
  
  COMMENT ON COLUMN "public"."x_users"."avatar" IS '头像';
  
  COMMENT ON COLUMN "public"."x_users"."address" IS '地址';
  
  COMMENT ON COLUMN "public"."x_users"."sex" IS '性别';
  
  COMMENT ON COLUMN "public"."x_users"."profile" IS '个人介绍';
  
  COMMENT ON COLUMN "public"."x_users"."state" IS '用户状态';`

  const comment = `CREATE TABLE "public"."x_comment" (
    "id" varchar(36) COLLATE "pg_catalog"."default" NOT NULL,
    "parent" varchar(36) COLLATE "pg_catalog"."default",
    "content" varchar(255) COLLATE "pg_catalog"."default",
    "create_time" date,
    "author_id" varchar(36) COLLATE "pg_catalog"."default",
    "article_id" varchar(36) COLLATE "pg_catalog"."default",
    PRIMARY KEY ("id")
  )
  ;
  
  ALTER TABLE "public"."x_comment" 
    OWNER TO "postgres";
  
  COMMENT ON COLUMN "public"."x_comment"."id" IS '评论id';
  
  COMMENT ON COLUMN "public"."x_comment"."parent" IS '上级评论id';`

  const category = `CREATE TABLE "public"."x_category" (
    "id" varchar(36) COLLATE "pg_catalog"."default" NOT NULL,
    "name" varchar(255) COLLATE "pg_catalog"."default",
    "brief" varchar(255) COLLATE "pg_catalog"."default",
    "alias" varchar(225) COLLATE "pg_catalog"."default",
    PRIMARY KEY ("id")
  )
  ;
  
  ALTER TABLE "public"."x_category" 
    OWNER TO "postgres";
  
  COMMENT ON COLUMN "public"."x_category"."id" IS 'category id';
  
  COMMENT ON COLUMN "public"."x_category"."name" IS '名称';
  
  COMMENT ON COLUMN "public"."x_category"."brief" IS '简介';
  
  COMMENT ON COLUMN "public"."x_category"."alias" IS '别名';`

 const likes = `CREATE TABLE "public"."x_likes" (
   "id" varchar(36) COLLATE "pg_catalog"."default" NOT NULL,
    "article_id" varchar(36) COLLATE "pg_catalog"."default",
    "user_id" varchar(36) COLLATE "pg_catalog"."default",
    "category_id" varchar(36) COLLATE "pg_catalog"."default",
    PRIMARY KEY ("id")
  )
  ;
  
  ALTER TABLE "public"."x_likes" 
    OWNER TO "postgres";
  
  COMMENT ON COLUMN "public"."x_likes"."id" IS '自增id';
  
  COMMENT ON COLUMN "public"."x_likes"."article_id" IS '文章id';
  
  COMMENT ON COLUMN "public"."x_likes"."user_id" IS '用户id';
  
  COMMENT ON COLUMN "public"."x_likes"."category_id" IS '分类id';` 