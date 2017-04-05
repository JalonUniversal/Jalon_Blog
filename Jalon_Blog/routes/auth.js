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

module.exports = router;