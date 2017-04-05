var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Jalon\'blog',
    articles: [{
      title: 'Vue从入门到放弃',
      href:'',
      description: '介绍Vue的入门基本知识'
    },{
      title: 'Http 基本知识',
      href:'',
      description: '搞web开发,从http知识入手'
    }],
    topics: [{
      title: 'Vue Vs React',
      description: '本文对比了vue与react的异同,从性能,学习曲线,组件化,性能,生态等方面进行了对比,作为MVVM框架的佼佼者,无论是选择学习哪一个,都能极大提升开发效率'
    }, {
      title: 'Http知识详解',
      description: '学习Web开发必须掌握Http && Tcp 的知识,作为前端的入门必须课之一'
    }] 
  });
});

module.exports = router;
