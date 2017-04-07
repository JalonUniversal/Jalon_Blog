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
    res.redirect('/');
});

/* login in webst */
router.post('/login', (req, res, next) => {
    //　模拟数据库查询 start
    const queryEmail = '453741411@qq.com';
    const queryPassword = '778450';
    //　模拟数据库查询 end
    const { email, password } = req.body;
    console.log('login param:', req.body);
    if (email === queryEmail) {
      if (password === queryPassword) {
        res.redirect('/');
      } else {
        res.send({
          type: 1,
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