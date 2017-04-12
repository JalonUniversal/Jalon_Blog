const express = require('express');
const router = express.Router();
const articleModel = require('.././models/articles.js');

// Get Article Create Page 文章发布界面
router.get('/', (req, res, next) => {
    res.render('create', {
      title: 'Article Creating'
    });
});
// Get Article Manage Page 文章管理界面
router.get('/manage', (req, res, next) => {
    let result =[];
    // 用articleModel查询 文章列表
    articleModel.find({}, (err, data) => {
      if (err) { console.log(err); }
      if (!!data) { result = data; }
      res.render('manage', { 
        title: 'Jalon\'blog',
        articles: result
      });
    });
});

// APIs
// 添加文章
router.post('/add', (req, res, next) => {
  const { title, author, description, content } = req.body;
  const articleEntity = new articleModel({
    title,
    author,
    description,
    content
  });
  articleEntity.save();
  res.send({
    type: 1,
    msg: '文章发布成功!'
  });
});

// 删除文章
router.delete('/delete', (req, res, next) => {
  const { title } = req.body;
  console.log('article_title', title);
  articleModel.remove({
    title: title
  }, (err, data) => {
    if (err) {console.log(err)}
    if (!!data) {
      console.log(data);
    }
  });
  res.send({
    type: 1,
    msg: '文章删除成功!'
  });
});

module.exports = router;