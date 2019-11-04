var express = require('express');
var router = express.Router();

router.get('/users/:user', userController.get_user);
router.get('/users/:user/repos', userController.get_repos);


module.exports = router;
