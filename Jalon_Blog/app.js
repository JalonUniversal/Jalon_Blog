var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const cookieSecret = require('./config/config.js');
const mongoose = require('mongoose');

// 引入路由配置
var index = require('./routes/index');
var users = require('./routes/users');
var detail = require('./routes/detail');
var article = require('./routes/article');
var auth = require('./routes/auth');
// 实例化应用
var app = express();
// 设置模板引擎为ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser(cookieSecret.secret));
app.use(express.static(path.join(__dirname, 'public')));
// 连接数据库
mongoose.connect('mongodb://127.0.0.1/blog', (err) => {
  if (err) { console.log('__数据库连接失败!__', err); }
  console.log('__数据库连接成功!__');
});

app.use('/', index);
app.use('/users', users);
app.use('/detail', detail);
app.use('/article', article);
app.use('/auth', auth);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
