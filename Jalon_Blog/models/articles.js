const mongoose = require('mongoose');
// 定义 articleSchema
const articleSchema = new mongoose.Schema({
  title: String,
  author: String,
  content: String,
  description: String,
  category: String,
  create_time: Date,
  update_time: Date,
});
// 发布 articleModel
const articleModel = mongoose.model('articles', articleSchema);
module.exports = articleModel;



