const express = require('express');
const router = express.Router();
const articleModel = require('.././models/articles.js');

// Get Article Create Page
router.get('/', (req, res, next) => {
    res.render('create', {
      title: 'Article Creating'
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

module.exports = router;