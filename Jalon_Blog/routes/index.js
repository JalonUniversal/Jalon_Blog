var express = require('express');
var router = express.Router();
var articleModel = require('.././models/articles.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  let result =[];
  // 用articleModel查询 文章列表
  articleModel.find({}, (err, data) => {
    if (err) { console.log(err); }
    if (!!data) { result = data; }
    res.render('index', { 
      title: 'Jalon\'blog',
      articles: result,
      topics: result
    });
  });
});
module.exports = router;
