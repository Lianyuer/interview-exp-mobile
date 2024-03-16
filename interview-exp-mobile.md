---

# interview-exp-mobile
> v1.0.0

Base URLs:

- [开发环境: https://interview-api-t.itheima.net/h5](https://interview-api-t.itheima.net/h5)
## GET 获取面经列表
:::success
【GET】 /interview/query
:::
### 请求参数
| 名称 | 位置 | 类型 | 必选 | 说明 |
| --- | --- | --- | --- | --- |
| current | query | number | 否 | 当前页 |
| pageSize | query | number | 否 | 每页数量 |
| stem | query | string | 否 | 筛选字段-题干 |
| keyWord | query | string | 否 | 筛选字段-关键字 |
| sorter | query | string | 否 | 排序字段，以字段名加下划线组合，不能有特殊字符和不存在的字段，推荐传 weight_desc，最新：可以不用传 |
| Authorization | header | string | 否 | 默认值：Bearer {{token}} |

> 返回示例

> 200 Response

```json
{
    "code": 10000,
    "message": "请求成功",
    "data": {
        "current": 1,
        "pageTotal": 52,
        "pageSize": 10,
        "total": 514,
        "rows": [
            {
                "id": "41156",
                "stem": "嗡嗡嗡嗡嗡嗡",
                "content": "<p>虽然百度这几年发展势头落后于AT，甚至快被京东赶上了，毕竟瘦面试的骆驼比马大，面试还是相当有难度和水准的。</p><blockquote>第一</blockquote><p>1.询问你的项目经验、学习经历、主修语言（如实回答就可</p><p><br></p><p>2.解释ES6的暂时性面试区（ let 和 var 的区别）</p><p><br></p><p>3.箭头函数、闭包、异步（老生常谈，参见上文）4.高阶函数（呃……我真不太清楚这是啥，听起来挺像闭包的）</p><p>dwad</p><p>5.求N的阶乘末尾有多少个0，在线码代码或讲思路（求因数，统计2、5、10的个数）</p><p><br></p><p>6.给一个小于一百万的数，求和它最接近的 Fibo 数（我的思路是简单地求数列面试面试求差，面试wdawda官说 Fibo 数超过34个以后就超过一百万，可以把34个数都求出来面试面试研究状态转换……）</p><p><br></p><p>一面面试官给我的评价：“基面试扎实，逻辑还可以，但代码风格不太好（ES5和ES6混用，封装不好），未来发展方向不明确。可以进入第二面试面试。”</p><p><br></p><p><br></p><p><br></p><p><br></p><blockquote>二面</blockquote><p>1.二面面试官说话不太清晰且声音太小，对面环境也比较嘈杂（好像也在面试？），这点不如头条。</p><p><br></p><p>2.面试面试S布局（ G面试面试d 和 flex 都考且考察细致）</p><p><br></p><p>3.数组的随机排序（我蒙了个答案，好像还算对。</p><p><br></p><p>4.打乱数组</p><p><br></p><p>5.JSON 对象的深度克隆（遍历递归，或者序列化和反序列化）</p><p><br></p><p>6.简述动画写法（ setTimeout ， requestA面试面试面试面试tionFrame ， 面试面试S3 ……）</p><p><br></p><p>7.列举“传统”的异步（……这题啥意思？不会）</p><p><br></p><p>8.Node 的多线程，高并发，安全（我都不会……问后端大佬吧）</p><p><br></p><p>9.听说过 PWA 吗？（没听说过，不会……）</p><p><br></p><p>10.解释 面试面试面试nt loop （听过，不太会）&nbsp;</p><p><br></p><p>11.服务端渲染，计算首屏和白屏时间（不太会……首屏白屏）</p><p><br></p><p>12.面试面试面试如何强制更新后的文件替代客户端缓存的文件（不太会……好像和MD5有关？）</p><p><br></p><p>还有很多不太记得了，反正我都不会</p><p><br></p><p>二面面试官给我的评价：“二面failed。学习能力不错，反应快，知识的广度有，但缺乏深度，不够面试面试。建议研读V8引擎源码，Node源码，花半年时间。”原来我已经进步到可以看源码的程度啦？虽然面试了，但听面试官这么说还有点开心~</p>",
                "createdAt": "2022-01-20 00:00:00",
                "creator": "靑春，那么骚",
                "avatar": "http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png",
                "likeCount": "196",
                "views": "342"
            },
            {
                "id": "41169",
                "stem": "面试面试面试面试面试面试sdgfdgdg都是颠三倒四",
                "content": "<p>33333355111111111面试面试面试dwada试da1dasda</p>",
                "createdAt": "2022-01-20 00:00:00",
                "creator": "不风流怎样倜傥",
                "avatar": "http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png",
                "likeCount": "134",
                "views": "332"
            },
            {
                "id": "41145",
                "stem": "字节跳动前端面试面试面试题总结111",
                "content": "<blockquote>笔试</blockquote><p>给一定的钱去买物品，算性价比最高的方案，用递归来写的</p><p>传卡片记录最大值（和面试面试的教师认证那道题比较像）&nbsp;</p><p>解析文档（类似vue的模板解析 解析v-if v-for {{}} 方法）&nbsp;</p><p><br></p><p><br></p><p><br></p><blockquote>一面</blockquote><p>自我介绍</p><p>项目交流了很多，包括一些问题和学到的东西</p><p>对git的使用</p><p>vue的常用option</p><p>vue生命周期流程</p><p>vue的原理</p><p>es6使用了哪些东西</p><p>原型链的理解</p><p>（编程题）解析字符串，从面试面试l上提取键值对</p><p>面试面试s盒模型</p><p>反问</p><p><br></p><p><br></p><p><br></p><blockquote>二面</blockquote><p>自我介绍</p><p>项目相关的问题</p><p>如何解决跨域</p><p>this指向</p><p>new面试了什么事情</p><p>（编程题）实现一个new方法</p><p>vue的双向绑定实现</p><p>vue的组件间传值</p><p>如何实现一个$toast</p><p>解决回调地狱</p><p>对p面试面试mise的理解</p><p>出了道输出顺序的题，并讲解对事件循环的理解</p><p>对async函数的理解，背后原理</p><p>闭包的理解</p><p>反问</p><p><br></p><p><br></p><p><br></p><blockquote>三面</blockquote><p>面试官上来介绍，说是一个基面试架构的工程师，当时觉得一定是哪里搞错了，老师人很好，对于我不会的地方，都是心平气和的给我讲解，但是问的东西是真的比较深啊。（我还是个孩子，为什么要这样对待我）</p><p><br></p><p>自我介绍</p><p>项目是如何上线的</p><p>为什么选择centos</p><p>登陆注册要怎么做</p><p>文章，用户面试面试在数据库里怎么存储的，密码是明文存储的么</p><p>项目重构打包是怎么进行的</p><p>uglify里面是怎么进行做的压缩</p><p>你的博客项目为什么搭两个面试面试面试，一个放静态页面一个放api的</p><p>解决的印象深刻的问题</p><p>进程与线程的区别</p><p>为什么要划分进程和线程两个模型</p><p>之后想做什么事情</p><p>CDN是做什么的，怎么实现加速的</p><p>怎么访问的你的linux面试面试面试的，用的面试面试ot么</p><p>linux文件的权限模型</p><p>怎么修改文件的权限</p><p>ssh相关的配置问题</p>",
                "createdAt": "2022-01-20 00:00:00",
                "creator": "醉卧九天",
                "avatar": "http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png",
                "likeCount": "107",
                "views": "437"
            },
            {
                "id": "41172",
                "stem": "21届秋招猿辅导前端面经笔试3434",
                "content": "<blockquote>笔试</blockquote><p>给一定的钱去买物品，算性价比最高的方案，用递归来写的</p><p>传卡片记录最大值（和面试面试的教师认证那道题比较像）&nbsp;</p><p>解析文档（类似vue的模板解析 解析v-if v-for {{}} 方法）&nbsp;</p><p><br></p><p><br></p><p><br></p><blockquote>一面</blockquote><p>自我介绍</p><p>项目交流了很多，包括一些问题和学到的东西</p><p>对git的使用</p><p>vue的常用option</p><p>vue生命周期流程</p><p>vue的原理</p><p>es6使用了哪些东西</p><p>原型链的理解</p><p>（编程题）解析字符串，从面试面试l上提取键值对</p><p>面试面试s盒模型</p><p>反问</p><p><br></p><p><br></p><p><br></p><blockquote>二面</blockquote><p>自我介绍</p><p>项目相关的问题</p><p>如何解决跨域</p><p>this指向</p><p>new面试了什么事情</p><p>（编程题）实现一个new方法</p><p>vue的双向绑定实现</p><p>vue的组件间传值</p><p>如何实现一个$toast</p><p>解决回调地狱</p><p>对p面试面试mise的理解</p><p>出了道输出顺序的题，并讲解对事件循环的理解</p><p>对async函数的理解，背后原理</p><p>闭包的理解</p><p>反问</p><p><br></p><p><br></p><p><br></p><blockquote>三面</blockquote><p>面试官上来介绍，说是一个基面试架构的工程师，当时觉得一定是哪里搞错了，老师人很好，对于我不会的地方，都是心平气和的给我讲解，但是问的东西是真的比较深啊。（我还是个孩子，为什么要这样对待我）</p><p><br></p><p>自我介绍</p><p>项目是如何上线的</p><p>为什么选择centos</p><p>登陆注册要怎么做</p><p>文章，用户面试面试在数据库里怎么存储的，密码是明文存储的么</p><p>项目重构打包是怎么进行的</p><p>uglify里面是怎么进行做的压缩</p><p>你的博客项目为什么搭两个面试面试面试，一个放静态页面一个放api的</p><p>解决的印象深刻的问题</p><p>进程与线程的区别</p><p>为什么要划分进程和线程两个模型</p><p>之后想做什么事情</p><p>CDN是做什么的，怎么实现加速的</p><p>怎么访问的你的linux面试面试面试的，用的面试面试ot么</p><p>linux文件的权限模型</p><p>怎么修改文件的权限</p><p>ssh相关的配置问题</p>",
                "createdAt": "2022-01-20 00:00:00",
                "creator": "多吉利奥",
                "avatar": "http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png",
                "likeCount": "52",
                "views": "551"
            },
            {
                "id": "41144",
                "stem": "前端小白的知乎一二面面试2肥肠粉123213",
                "content": "面试面试s什么？",
                "createdAt": "2022-01-20 00:00:00",
                "creator": "五行缺钱",
                "avatar": "http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png",
                "likeCount": "90",
                "views": "282"
            },
            {
                "id": "41187",
                "stem": "快手三面+HR面-前端工程师面经奉上~秋招",
                "content": "<h2>秋招，马不停蹄的面试中，快手面试来不打算去，面试一下攒经验，不过整个的面试过程还是比较舒服的，面试完勤于总结真的很重要，目前已经拿到小米、阿里、面试面试、河狸家等五家offer，心仪的公司还没开始面，后续持续更新吧</h2><h2><br></h2><h2>快手一面</h2><ol><li>判断链表是否有环 </li><li>删除链表倒数第n个 </li><li>判断回文 </li><li>给定数组，统计出现次数 </li><li>js数据类型 </li><li>Symbol的特点 独一无二 </li><li>let和const的区别 </li><li>tcp和udp的区别 </li><li>http有哪些请求头或响应头以及有哪些状态码 </li><li>flex布局以及常用属性 </li><li>display有几种方式以及含义 </li><li>不知道宽高怎么水平垂直居中 </li><li>table里面的td怎么居中 </li><li>display table和table-ceil的区别 </li><li>vue的生命周期以及作用 </li><li>vue阻止冒泡的简单写法 （修饰符） </li><li>写vue的数据双向绑定 </li><li>学习前端的途径 </li></ol><h2>快手二面</h2><ol><li>为什么要学习前端，对前端有什么看法 </li><li>看什么书 </li><li>html为什么要有这么多类型的标签 </li><li>es6 常用api </li><li>pomise的作用及其原理 </li><li>归并排序 </li><li>Vue和Zepto的区别 </li><li>是否写过后端接口 </li><li>是否写过webpack的和chorme面试件 </li><li>webpack的loader和plugin的区别 </li><li>是否用过git </li><li>https详细过程 </li><li>服务端返回的证书，客户端怎么验证有效 </li></ol><h2>快手三面</h2><ol><li>自我介绍 </li><li>反转数字</li><li>那我输入这些发送出去，直到你看到，网络中发生了什么过程</li><li>最后问了一个贪吃蛇是如何具体实现的 </li><li>反问</li></ol><h2>快手hr面</h2><ol><li>介绍自己 </li><li>对工作城市是否有选择 </li><li>项目的背景，扮演角面试，负责的模块，收获 </li><li>一二三面的优点和缺点 </li><li>缺点该怎么取弥补 </li><li>应聘快手岗位的优势和劣势在哪 </li><li>学习或生活中最骄傲的一件事 </li><li>未来三到五年的规划 </li><li>为什么不考研 </li><li>是否有实习</li></ol>",
                "createdAt": "2022-01-20 00:00:00",
                "creator": "~星星眼",
                "avatar": "http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png",
                "likeCount": "58",
                "views": "426"
            },
            {
                "id": "41166",
                "stem": "修改第一条",
                "content": "<p>电话面1、简单自我介绍, 做过哪些项目, 使用哪些技术栈?2、如何看待前端框架选型?&nbsp;3、vue的如何实现双向绑定的 ?&nbsp;4、react 虚拟DOM 是什么? 如何实现? 说一下diff算法?&nbsp;5、平时如何学习, 最近接触了解了哪些新的知识?&nbsp;技术一面1、简单自我介绍, 介绍一下你的项目, 技术栈?2、react和vue的比较?&nbsp;3、React Diff 算法?&nbsp;4、观察者模式实现?&nbsp;5、http报文头部有哪些字段? 有什么意义?&nbsp;6、移动端高清方案如何解决?&nbsp;7、简述从网页输入面试面试l到网页展示的过程发生了哪些事情?&nbsp;8、SSR 和 客户端渲染有什么区别, vue是如何实现绑定事件的 ?&nbsp;9、简述公司node架构中容面试的实现?&nbsp;10、浏览器事件有哪些过程? 为什么一般在冒泡阶段, 而不是在捕获阶段注册监听? addEventListener 参数分别是什么?&nbsp;11、面向对象如何实现? 需要复用的变量 怎么处理?&nbsp;12、移动端300ms延时的原因? 如何处理?&nbsp;13、主流框架的数据单向/双向绑定实现原理?&nbsp;技术二面1、简述项目,React vue区别virsualDOM实现2、DIFF算法为什么是O(n)复杂度而不是O(n^3)&nbsp;3、http code码?&nbsp;4、移动端rem布局如何实现? 简述原理?&nbsp;5、J面试面试面试面试dge原理, js和native是如何通信的?&nbsp;6、Rollup和webpack区别, treeshaking是什么?&nbsp;7、TCP三次握手的过程, get post请求的区别?&nbsp;8、静态文件的浏览器缓存如何实现?&nbsp;9、前端跨域方案10、http 请求包含哪些字段 分别是什么意思&nbsp;11、js 有哪些数据类型 如何判断? null 和undefined区别 应用场景?&nbsp;12、new St面试面试ng(‘a’) 和’a’ 是一样的么?&nbsp;13、移动端如何实现下拉到底部 跟随移动 结束后回弹的动画?&nbsp;14、移动端如何优化首页白屏时间过长?&nbsp;15、ES6 generator函数简述&nbsp;16、数组去重实现?&nbsp;17、js浮点数运算不精确 如何解决?&nbsp;18、工作中最得意和出面试的点, 头疼的点, 问题如何解决的&nbsp;技术三面1、公司的前端工程化实践2、转行之后是如何自学前端的, 学习途径 有没有一些自己的代码&nbsp;3、DOM基面试知识,添加元素,删除元素等等…&nbsp;4、DOM节点类型&nbsp;5、正则表达式如何匹配一段面试面试l ?在正则表达式中有哪几种作用?&nbsp;6、移动端优化方式? 离线包是如何实现的?</p>",
                "createdAt": "2022-01-20 00:00:00",
                "creator": "轮獄道",
                "avatar": "http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png",
                "likeCount": "46",
                "views": "330"
            },
            {
                "id": "40980",
                "stem": "顺丰快递前端面经 已通过",
                "content": "<p>一面</p><ol><li>flutter 中怎么与其它架构联系起来ssss</li><li>flutter4455555554444</li></ol>",
                "createdAt": "2022-01-20 00:00:00",
                "creator": "绵绵##%",
                "avatar": "http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png",
                "likeCount": "23",
                "views": "470"
            },
            {
                "id": "41165",
                "stem": "字节跳动前端面经0203",
                "content": "<blockquote>123</blockquote>",
                "createdAt": "2022-01-20 00:00:00",
                "creator": "不想翻身的咸鱼",
                "avatar": "http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png",
                "likeCount": "34",
                "views": "372"
            },
            {
                "id": "41158",
                "stem": "去哪儿网前端面经aljfaljfla44",
                "content": "<p>距离去哪儿网笔试快一个月了，我都以为我凉了，结果在北京面面试面试的当天下午连续接到三个电话……只有一面试技术面+一面试HR面，面试面试就给我发了口头offer，相当地面试脆利落……&nbsp;</p><p>去哪儿网好像更注重考察你对框架、工具的应用，对于基面试考得反而不多。而且还考了我 jQuery ,别的公司都不怎么考的……&nbsp;</p><p><br></p><p><br></p><p><br></p><h4>一面222</h4><p><br></p><p>1.webpack 用过吗？</p><p><br></p><p>2.如何处理图片、 面试面试S 文件？</p><p><br></p><p>（各种 loader ）</p><p><br></p><p>3.使用 flex 布局写移动端布局（注意 flex-direction 要改）</p><p><br></p><p>4.jQuery 的 delegate 原理（事件冒泡与捕获）</p><p><br></p><p>不止这些，但别的忘了……</p><p><br></p><p><br></p><p><br></p><p><br></p><h4>HR面</h4><p><br></p><p>1.薪资</p><p><br></p><p>2.可实习时间（我说了7~9月）</p><p><br></p><p>3.职业发展规划（有节制地面试面试面试面试）</p><p><br></p><p><br></p><p>别的不记得了……因为整个过程速度太快，来不及记忆……</p>",
                "createdAt": "2022-01-20 00:00:00",
                "creator": "孤老序",
                "avatar": "http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png",
                "likeCount": "58",
                "views": "224"
            }
        ]
    }
}
```
### 返回结果
| 状态码 | 状态码含义 | 说明 | 数据模型 |
| --- | --- | --- | --- |
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline |


## GET 获取单个面经详情
:::success
【GET】 /interview/show
:::
### 请求参数
| 名称 | 位置 | 类型 | 必选 | 说明 |
| --- | --- | --- | --- | --- |
| id | query | string | 否 | 面经的id |
| Authorization | header | string | 否 | 默认值：Bearer {{token}} |

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
| 状态码 | 状态码含义 | 说明 | 数据模型 |
| --- | --- | --- | --- |
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline |

## POST 收藏、点赞题目/取消收藏、点赞题目接口

:::success
【POST】 /interview/opt
:::

### 请求参数
| 名称 | 位置 | 类型 | 必选 | 说明 |
| --- | --- | --- | --- | --- |
| id | query | string | 否 | none |
| optType | query | string | 否 | 操作类型：1点赞 2收藏 |
| Authorization | header | string | 否 | 默认值：Bearer {{token}} |


> 返回示例

> 200 Response


```json
{
    "code": 10000,
    "message": "请求成功",
    "data": {
        "id": "41156",
        "stem": "嗡嗡嗡嗡嗡嗡",
        "content": "<p>虽然百度这几年发展势头落后于AT，甚至快被京东赶上了，毕竟瘦面试的骆驼比马大，面试还是相当有难度和水准的。</p><blockquote>第一</blockquote><p>1.询问你的项目经验、学习经历、主修语言（如实回答就可</p><p><br></p><p>2.解释ES6的暂时性面试区（ let 和 var 的区别）</p><p><br></p><p>3.箭头函数、闭包、异步（老生常谈，参见上文）4.高阶函数（呃……我真不太清楚这是啥，听起来挺像闭包的）</p><p>dwad</p><p>5.求N的阶乘末尾有多少个0，在线码代码或讲思路（求因数，统计2、5、10的个数）</p><p><br></p><p>6.给一个小于一百万的数，求和它最接近的 Fibo 数（我的思路是简单地求数列面试面试求差，面试wdawda官说 Fibo 数超过34个以后就超过一百万，可以把34个数都求出来面试面试研究状态转换……）</p><p><br></p><p>一面面试官给我的评价：“基面试扎实，逻辑还可以，但代码风格不太好（ES5和ES6混用，封装不好），未来发展方向不明确。可以进入第二面试面试。”</p><p><br></p><p><br></p><p><br></p><p><br></p><blockquote>二面</blockquote><p>1.二面面试官说话不太清晰且声音太小，对面环境也比较嘈杂（好像也在面试？），这点不如头条。</p><p><br></p><p>2.面试面试S布局（ G面试面试d 和 flex 都考且考察细致）</p><p><br></p><p>3.数组的随机排序（我蒙了个答案，好像还算对。</p><p><br></p><p>4.打乱数组</p><p><br></p><p>5.JSON 对象的深度克隆（遍历递归，或者序列化和反序列化）</p><p><br></p><p>6.简述动画写法（ setTimeout ， requestA面试面试面试面试tionFrame ， 面试面试S3 ……）</p><p><br></p><p>7.列举“传统”的异步（……这题啥意思？不会）</p><p><br></p><p>8.Node 的多线程，高并发，安全（我都不会……问后端大佬吧）</p><p><br></p><p>9.听说过 PWA 吗？（没听说过，不会……）</p><p><br></p><p>10.解释 面试面试面试nt loop （听过，不太会）&nbsp;</p><p><br></p><p>11.服务端渲染，计算首屏和白屏时间（不太会……首屏白屏）</p><p><br></p><p>12.面试面试面试如何强制更新后的文件替代客户端缓存的文件（不太会……好像和MD5有关？）</p><p><br></p><p>还有很多不太记得了，反正我都不会</p><p><br></p><p>二面面试官给我的评价：“二面failed。学习能力不错，反应快，知识的广度有，但缺乏深度，不够面试面试。建议研读V8引擎源码，Node源码，花半年时间。”原来我已经进步到可以看源码的程度啦？虽然面试了，但听面试官这么说还有点开心~</p>",
        "createdAt": "2022-01-20 00:00:00",
        "creator": "靑春，那么骚",
        "avatar": "http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png",
        "likeCount": "196",
        "views": "342",
        "collectFlag": 1,
        "likeFlag": 1
    }
}
```

### 返回结果
| 状态码 | 状态码含义 | 说明 | 数据模型 |
| --- | --- | --- | --- |
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline |

## GET 收藏、点赞题目列表查询接口

:::success
【GET】 /interview/opt/list
:::

### 请求参数
| 名称 | 位置 | 类型 | 必选 | 说明 |
| --- | --- | --- | --- | --- |
| optType | query | number | 否 | 操作类型：1点赞 2收藏 |
| pageSize | query | number | 否 | 每页大小 |
| page | query | number | 否 | 当前页 |
| Authorization | header | string | 否 | 默认值：Bearer {{token}} |


> 返回示例


> 200 Response


```json
{"code":10000,"message":"请求成功"}
```

### 返回结果
| 状态码 | 状态码含义 | 说明 | 数据模型 |
| --- | --- | --- | --- |
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline |

## POST 登录接口

:::success
【POST】 /user/login
:::

### 请求参数
| 名称 | 位置 | 类型 | 必选 | 说明 |
| --- | --- | --- | --- | --- |
| username | query | string | 否 | none |
| password | query | string | 否 | none |


> 返回示例

> 200 Response


```json
{
    "code": 10000,
    "message": "请求成功",
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMjgiLCJpYXQiOjE3MTA1NTcwODEsImV4cCI6MTcxMDgxNjI4MX0.yGcuj7MeNq2nM3irMdMp0IVYHAucruquSnxNrkKjutI",
        "currentAuthority": "user",
        "status": "ok",
        "type": "account"
    }
}
```

### 返回结果
| 状态码 | 状态码含义 | 说明 | 数据模型 |
| --- | --- | --- | --- |
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline |

## POST 注册接口

:::success
【POST】/user/register
:::

### 请求参数
| 名称 | 位置 | 类型 | 必选 | 说明 |
| --- | --- | --- | --- | --- |
| username | query | string | 否 | none |
| password | query | string | 否 | none |


> 返回示例

> 200 Response


```json
{"code":10000,"message":"请求成功","data":{"username":"admin222333","id":2828}}
```

### 返回结果
| 状态码 | 状态码含义 | 说明 | 数据模型 |
| --- | --- | --- | --- |
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline |

## GET 获取用户信息
:::success
【GET】 /user/currentUser
:::
### 返回结果
| 状态码 | 状态码含义 | 说明 | 数据模型 |
| --- | --- | --- | --- |
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline |

> 返回示例

> 200 Response


```json
{
    "code": 10000,
    "message": "请求成功",
    "data": {
        "id": "1228",
        "username": "xiaoxiao",
        "name": null,
        "avatar": "http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png",
        "createdAt": "2024-01-18 12:18:17",
        "updatedAt": "2024-01-18 12:18:17"
    }
}
```
