---
title: interview-exp-m v1.0.0
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
code_clipboard: true
highlight_theme: darkula
headingLevel: 2
generator: "@tarslib/widdershins v4.0.17"

---

# interview-exp-m

> v1.0.0

Base URLs:

* <a href="https://interview-api-t.itheima.net/h5">开发环境: https://interview-api-t.itheima.net/h5</a>

# Default

## GET 获取面经列表

GET /interview/query

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|current|query|number| 否 |当前页|
|pageSize|query|number| 否 |每页数量|
|stem|query|string| 否 |筛选字段-题干|
|keyWord|query|string| 否 |筛选字段-关键字|
|sorter|query|string| 否 |排序字段，以字段名加下划线组合，不能有特殊字符和不存在的字段，推荐传 weight_desc，最新：可以不用传|
|Authorization|header|string| 否 |默认值：Bearer {{token}}|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 获取单个面经详情

GET /interview/show

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|query|string| 否 |面经的id|
|Authorization|header|string| 否 |默认值：Bearer {{token}}|

> 返回示例

> 成功

```json
{
  "code": 10000,
  "message": "请求成功",
  "data": {
    "id": "41145",
    "stem": "字节跳动前端面试面试面试题总结111",
    "content": "<blockquote>笔试</blockquote><p>给一定的钱去买物品，算性价比最高的方案，用递归来写的</p><p>传卡片记录最大值（和面试面试的教师认证那道题比较像）&nbsp;</p><p>解析文档（类似vue的模板解析 解析v-if v-for {{}} 方法）&nbsp;</p><p><br></p><p><br></p><p><br></p><blockquote>一面</blockquote><p>自我介绍</p><p>项目交流了很多，包括一些问题和学到的东西</p><p>对git的使用</p><p>vue的常用option</p><p>vue生命周期流程</p><p>vue的原理</p><p>es6使用了哪些东西</p><p>原型链的理解</p><p>（编程题）解析字符串，从面试面试l上提取键值对</p><p>面试面试s盒模型</p><p>反问</p><p><br></p><p><br></p><p><br></p><blockquote>二面</blockquote><p>自我介绍</p><p>项目相关的问题</p><p>如何解决跨域</p><p>this指向</p><p>new面试了什么事情</p><p>（编程题）实现一个new方法</p><p>vue的双向绑定实现</p><p>vue的组件间传值</p><p>如何实现一个$toast</p><p>解决回调地狱</p><p>对p面试面试mise的理解</p><p>出了道输出顺序的题，并讲解对事件循环的理解</p><p>对async函数的理解，背后原理</p><p>闭包的理解</p><p>反问</p><p><br></p><p><br></p><p><br></p><blockquote>三面</blockquote><p>面试官上来介绍，说是一个基面试架构的工程师，当时觉得一定是哪里搞错了，老师人很好，对于我不会的地方，都是心平气和的给我讲解，但是问的东西是真的比较深啊。（我还是个孩子，为什么要这样对待我）</p><p><br></p><p>自我介绍</p><p>项目是如何上线的</p><p>为什么选择centos</p><p>登陆注册要怎么做</p><p>文章，用户面试面试在数据库里怎么存储的，密码是明文存储的么</p><p>项目重构打包是怎么进行的</p><p>uglify里面是怎么进行做的压缩</p><p>你的博客项目为什么搭两个面试面试面试，一个放静态页面一个放api的</p><p>解决的印象深刻的问题</p><p>进程与线程的区别</p><p>为什么要划分进程和线程两个模型</p><p>之后想做什么事情</p><p>CDN是做什么的，怎么实现加速的</p><p>怎么访问的你的linux面试面试面试的，用的面试面试ot么</p><p>linux文件的权限模型</p><p>怎么修改文件的权限</p><p>ssh相关的配置问题</p>",
    "createdAt": "2022-01-20 00:00:00",
    "creator": "醉卧九天",
    "avatar": "http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png",
    "likeCount": "102",
    "views": "437",
    "collectFlag": 1,
    "likeFlag": 0
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## POST 收藏、点赞题目/取消收藏、点赞题目接口

POST /interview/opt

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|query|string| 否 |none|
|optType|query|string| 否 |操作类型：1点赞 2收藏|
|Authorization|header|string| 否 |默认值：Bearer {{token}}|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 收藏、点赞题目列表查询接口

GET /interview/opt/list

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|optType|query|number| 否 |操作类型：1点赞 2收藏|
|pageSize|query|number| 否 |每页大小|
|page|query|number| 否 |当前页|
|Authorization|header|string| 否 |默认值：Bearer {{token}}|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## POST 登录接口

POST /user/login

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|username|query|string| 否 |none|
|password|query|string| 否 |none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## POST 注册接口

POST /user/register

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|username|query|string| 否 |none|
|password|query|string| 否 |none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 获取用户信息

GET /user/currentUser

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

# 数据模型

