var express = require('express');
var router = express.Router();

/* GET product listing. */
router.get('/', function(req, res, next) {
    res.render('product', {
      title : 'Test Page'
  });
 
});

module.exports = router;
