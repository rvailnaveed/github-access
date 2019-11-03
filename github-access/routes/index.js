var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', indexController.index);

router.get('/users/:user', indexController.get_user);
router.get('/repos/:user', indexController.get_repos);



module.exports = router;
