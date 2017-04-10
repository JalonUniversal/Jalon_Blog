const mongoose = require('mongoose');
// 定义userSchema
const usersSchema = new mongoose.Schema({
    username: String,
    password: String,
    type: String,
    nickname: String
});
//　发布userModel
const userModel = mongoose.model('users', usersSchema);
module.exports = userModel;
