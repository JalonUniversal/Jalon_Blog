# Jalon_Blog
- 一个[简单]的个人博客全栈项目
- 技术栈: express/bootstrap/Ajax(jQuery)/mongoose(mongodb)
  为了突出后端知识的学习与运用,暂时没用React/Vue,jQuery是神器,但是上一个时代的神器了
- 后端知识涉及
  * 后端分层 model(数据)/view(视图模板)/controller(控制器)
  * model中涉及到使用mongoose的方式去定义 schema/model/entity
  * view视图模板选用的是ejs,主要考虑到与mvvm的语法接近,学习成本低,性能好
  * controller这一块暂时没有从router中分出来,等逻辑复杂些了,再抽出来
- 使用的git可视化工具是smartgit
- restful api接口设计
 * 会使用 GET/POST/PUG/DELETE 的接口设计
- mongodb数据库接入,感觉对前端很友好,和Node.js结合得很好,使用了官方推荐的mongoose库
- 加入了cookie-parser中间件,加入了cookie密钥
- 加入了body-parser中间件
- 404状态 && 500状态 && redirect的使用
