const express = require('express');
const router = express.Router();



// import controllers
const userController = require('./controllers/userController');
const wallController = require('./controllers/wallController');


// user roads details 
router.get('/user/register', userController.listUsers);
router.get('/user/walls', wallController.listWalls);
router.post('/user/register', userController.addUser);
router.post('/user/login', userController.connectUser);
router.post('/user/walls', wallController.addWall)



module.exports = router;