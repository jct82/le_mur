const express = require('express');
const router = express.Router();



// import controllers
const userController = require('./controllers/userController');


// user roads details 
router.get('/user/register', userController.listUsers);
router.post('/user/register', userController.addUser);
router.post('/user/login', userController.connectUser);



module.exports = router;