const express = require('express');
const router = express.Router();

/* article detail Route */
router.get('/', (req, res, next) => {
    res.render('detail', {
      title: 'test title',
      description: 'test description',
      content: 'test content',
      updated: 'test updated',
      author: 'test author'
    })
});

module.exports = router;