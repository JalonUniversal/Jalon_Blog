const express = require('express');
const router = express.Router();

/* login Route */
router.get('/login', (req, res, next) => {
    res.render('login', {
      title: 'Login Blog'
    });
});

/* logout Route */
router.get('/logout', (req, res, next) => {
    // 退出登录后 清空客户端的cookie
    res.clearCookie('__email');
    res.clearCookie('__password');
    // 跳转到 登录页
    res.redirect('/auth/login');
});

/* login in website */
router.post('/login', (req, res, next) => {
    //　模拟数据库查询 start
    const queryEmail = '453741411@qq.com';
    const queryPassword = '778450';
    //　模拟数据库查询 end
    const { email, password } = req.body;
    console.log('login param:', req.body);
    if (email === queryEmail) {
      if (password === queryPassword) {
        // 成功登录后向客户端设置cookie,标识身份
        res.cookie('__email', email, {signed: true});
        res.cookie('__password', password, {signed: true});
        res.send({
          type: 1,
          msg: '登录成功'
        });
      } else {
        res.send({
          type: 0,
          msg: '密码错误!'
        });
      }
    } else {
        res.status(500);
        res.send({
          type: 0,
          msg: '帐号不存在!'
        });
    }
})

module.exports = router;