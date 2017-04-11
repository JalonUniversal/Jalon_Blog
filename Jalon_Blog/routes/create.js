const express = require('express');
const router = express.Router();

// Get Article Create Page
router.get('/', (req, res, next) => {
    res.render('create', {
      title: 'Article Creating'
    });
});

module.exports = router;