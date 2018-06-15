## API 文档

### 返回格式说明

| 字段  | 可能的值                  | 说明                                                         |
| ----- | ------------------------- | ------------------------------------------------------------ |
| msg   | 'ok'\|'参数错误'… :string | 请求结束后返回的状态说明                                     |
| err   | 0\|1:number               | 0:请求成功,1:请求返回错误                                    |
| data  | {...}\|[...]              | 请求返回的主数据                                             |
| token | :string                   | 用户鉴权，登录成功后会返回token，后面每次请求中需要在header中带上 |

```javascript
//示例
{
    msg:"ok",
    err:0,
    data:{}
}
```

### 请求格式说明

````javascript
/*
* 按照restfull API
* GET,POST,PUT,DELETE
* 文档中 [page] 中括号标记的为可选参数，其他都为必选参数
* token: yes/no  表示是否需要在请求头中带上token进行验证
*/
````

```javascript
// REQ: 代表请求参数  RES: 代表响应结果
```



### 用户 Users API

| 接口                       | 类型 | 地址           |
| -------------------------- | ---- | -------------- |
| [注册账号](##### 注册账号) | POST | /user/register |
| [登录](##### 登录)                       | POST | /user/login    |
| [退出登录](##### 退出登录) | POST | /user/exit     |
| [token登录](##### Token登录)                  | GET  | / user         |
| [修改个人资料](##### 修改个人资料)               | PUT  | /user          |
| [请求个人资料](##### 请求个人资料)               | POST | /user          |
| [邮箱发送验证码](##### 邮箱发送验证码)             | GET  | /user/mail     |
| [修改密码](##### 修改密码)                   | POST | /user/passwd   |

##### 注册账号

````javascript
REQ:
token:no
{
    name:"jeff", //用户名
    email:"admin@jef.site", //邮箱
    passwd:"123456" //密码
}
RES:
{
    msg:'ok',
    err:0,
    token:"(token)",//登录token
    data:{
        id:"(uuid)", //user id 用户id
        name:"jeff",
        email:"admin@jef.site"
    }
}
````

​

##### 登录

  ````javascript
  REQ:
  token:no
  {
      [name]:"jeff", //用户名
      [email]:"admin@jef.site", //邮箱
      passwd:"123456" //密码
  }
  // 用户名或者邮箱登录
  RES:
  {
      msg:'ok',
      err:0,
      token:"(token)",//登录token
      data:{
          id:"(uuid)", //user id 用户id
          name:"jeff",
          email:"admin@jef.site"
      }
  }
  ````

##### 退出登录

  ````javascript
  REQ
  token:yes
  {
      id:'user id' //用户id
  }
  RES:
  {
      msg:'ok',
      err:0,
  }
  ````

##### Token登录

  ```javascript
  REQ:
  token:yes
  {
      无
  }
  RES:
  {
      msg:'ok',
      err:0,
      token:"(token)",//新的登录token
      data:{
          id:"(uuid)", //user id 用户id
          name:"jeff",//用户名
          email:"admin@jef.site"//邮箱
      }
  }
  ```

##### 修改个人资料

  ```javascript
  REQ:
  token:yes
  {
      id:'user id',//用户id
      avatar:'http:xxxxx.jpg',//用户头像
      address:'深圳',//所在地
      sex:'男',//性别
      profile:'程序员'//个人介绍
  }
  RES:
  {
      msg:'ok',
      err:0
  }
  ```

##### 请求个人资料

  ```javascript
  REQ:
  token:yes
  {
      id:'user id'//用户id
  }
  RES:
  {
      msg:'ok',
      err:0,
      data:{
          id:"(uuid)", //user id 用户id
          name:"jeff",//用户名
          email:"admin@jef.site",//邮箱
          avatar:'http:xxx.jpg',//头像
          address:'深圳',//所在地
          sex:'男',//性别
          profile:'程序员',//介绍
          state:null//状态
      }
  }
  ```

##### 邮箱发送验证码

  ```javascript
  REQ:
  token:yes
  {
      to:'admin@jef.site'//接收验证码的邮箱
  }
  RES:
  {
      msg:'ok',
      err:0,
      data:201808 //发到用户邮箱的验证码
  }
  ```

##### 修改密码

  ```javascript
  REQ:
  token:no
  {
      id:'user id',//用户名
      oldpwd:'',//旧密码
      newpwd:''//新密码
  }
  RES:
  {
      msg:'ok',
      err:0,
  }
  ```

  ​

### 分类 Category API

| 接口         | 类型   | 地址      |
| ------------ | ------ | --------- |
| [获取分类列表](##### 获取分类列表) | GET    | /category |
| [添加分类](##### 添加分类)     | POST   | /category |
| [修改分类](##### 修改分类)     | PUT    | /category |
| [删除分类](##### 删除分类)     | DELETE | /category |

##### 获取分类列表

  ```javascript
  REQ:
  token:no
  {
      无
  }
  RES:
  {
      msg:'ok',
      err:0,
      data:{
          id:'category id',// 分类id
          name:'',// 分类名
          brief:'',// 分类说明
          alias:''// 分类别名
      }
  }
  ```

##### 添加分类

  ```javascript
  REQ:
  token:yes
  {
      name:'',// 分类名
      brief:'',// 分类说明
      alias:''// 分类别名
  }
  RES:
  {
      msg:'ok',
      err:0
  }
  ```

##### 修改分类

  ```javascript
  REQ:
  token:yes
  {
      id:'category id',// 分类id
      name:'',// 分类名
      brief:'',// 分类说明
      alias:''// 分类别名
  }
  RES:
  {
      msg:'ok',
      err:0,
  }
  ```

##### 删除分类

  ```javascript
  REQ:
  token:yes
  {
      id:'category id',// 分类id
  }
  RES:
  {
      msg:'ok',
      err:0,
  }
  ```

  ​

### 文章 Article API

| 接口         | 类型   | 地址          |
| ------------ | ------ | ------------- |
| [获取文章列表](##### 获取文章列表) | GET    | /article/list |
| [获取文章详情](##### 获取文章详情) | GET    | /article      |
| [添加文章](##### 添加文章)     | POST   | /article      |
| [修改文章](##### 修改文章)     | PUT    | /article      |
| [删除文章](##### 删除文章)     | DELETE | /article      |
| [点赞一个文章](##### 点赞一个文章) | POST   | /likes        |
| [取消文章的赞](##### 取消文章的赞) | DELETE | /likes        |

##### 添加文章

  ```javascript
  REQ:
  token:yes
  {
      title:'', //文章标题
      content:'', //文章主题内容
      brief:'', //摘要
      category_id:'',//分类id 
      author_id:'' //作者的 user id
  }
  RES:
  {
      msg: "ok",
      err: 0
  }
  ```

#####  修改文章

   ```javascript
   REQ:
   token:yes
   {
       id:'article id' //文章的id
       title:'', //文章标题
       content:'', //文章主题内容
       brief:'', //摘要
       category_id:'',//分类id 
   }
   RES:
   {
       msg: "ok",
       err: 0
   }
   ```

   ​

#####  获取文章详情

   ```javascript
   REQ:
   token:no
   {
       id:'category id', //文章的id
       [user_id]:'userid' //用户id 用于判断是否点赞过该文章 如果用户已登录则需要传 未登录则忽略该参数
   }
   RES:
   {
       msg: "ok",
       err: 0,
       data:{
           detail:{ //文章的内容
               title:'article title',//标题
               content:'article content',//正文内容
               brief:'',//文章摘要
               create_time:'',//创建时间
               author:'jeff',//作者
               author_id:'userid',//作者userid
               likes:100,//点赞数量
               islikes:'0|1'// 是否已点赞 0未点赞 1+该文章已经被我点赞了
           },
           comment:[ //该文章下的所有评论
               {
                   id:'xxx',//评论id
                   parent:'xxx',//评论的上级id 如果没有就是一级评论
                   content:'xxx',//评论内容
                   create_time:'2018-1-1',//评论时间
                   name:'jeff'//评论者名称
               }
           ]
       }
   }
   }
   ```

#####  获取文章列表

   ```javascript
   REQ:
   token:no
   {
       [categoty_id]:'分类id',//分类id 不传 默认为全部分类
       [page]:'pages',//页码 不传 默认为第1页
       [total]:'total'//一次请求的文章总数 默认为10 最大 100
   }
   RES:
   {
       msg: "ok",
       err: 0,
       total:100,//该类别列表总数
       data:[
           {
               id:'article id',//文章id
               title:'article title',//标题
               brief:'',//文章摘要
               create_time:'',//创建时间
               author:'jeff',//作者
               likes:100,//点赞数量
               category:'nodejs',//分类名
               c_count:'1',//评论数量
               pv:'100'//阅读量
           }
       ]
   }
   ```

#####  删除文章

   ```javascript
   REQ:
   token:yes
   {
       id:'article id' //文章的id
   }
   RES:
   {
       msg: "ok",
       err: 0
   }

   ```

#####  点赞一个文章

   ```javascript
   REQ:
   token:yes
   {
       article_id:'article id', //文章的id
       category_id:'',//分类id
       user_id:'',//用户 user id
   }
   RES:
   {
       msg: "ok",
       err: 0
   }
   ```

#####  取消文章的赞

   ```javascript
   REQ:
   token:yes
   {
       article_id:'article id', //文章的id
       user_id:'',//用户 user id
   }
   RES:
   {
       msg: "ok",
       err: 0
   }
   ```

   ​

### 评论 Comment API

| 接口     | 类型   | 地址      |
| -------- | ------ | --------- |
| [添加评论](##### 添加评论) | POST   | / comment |
| [删除评论](##### 删除评论) | DELETE | / comment |

##### 添加评论

  ```javascript
  REQ:
  token:yes
  {
      article_id:'article id', //文章的id
      author_id:'',//用户 user id
      content:'ctx',//评论内容
      [parent]:'prt'//上级评论，为空则为一级评论，若为回复则该值为回复的评论id
  }
  RES:
  {
      msg: "ok",
      err: 0
  }
  ```

##### 删除评论

  ```javascript
  REQ:
  token:yes
  {
      id:'comment id', //该条评论的id
  }
  RES:
  {
      msg: "ok",
      err: 0
  }
  ```

  ​

功能后期继续完善…...