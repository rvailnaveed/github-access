var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

router.get('/:user', userController.get_user);
router.get('/:user/repos', userController.get_repos_graph);


module.exports = router;
