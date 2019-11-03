var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/something', function(req, res, next) {
  res.send("Yep we doing something");
});

module.exports = router;
