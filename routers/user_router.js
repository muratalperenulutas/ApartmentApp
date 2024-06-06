//we create api's at the this folder
const router = require('express').Router();
const UserController = require('../controller/user_controller');

router.post('/registration', (req, res, next) => {
    UserController.register(req, res, next)
});

router.post('/login', (req, res, next) => {
    UserController.login(req, res, next)
});


module.exports = router;


/*const router = require('express').Router();
const UserController = require('../controller/user_controller');

router.post('/registration',UserController.register());*/