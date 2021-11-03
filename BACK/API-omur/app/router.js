const express = require('express');
const router = express.Router();
const auth = require('./middlewares/auth');



// import controllers
const userController = require('./controllers/userController');
const wallController = require('./controllers/wallController');


// user roads details 
router.get('/user/register',auth.auth, userController.listUsers);
router.get('/user/walls',auth.auth, wallController.listWalls);
router.post('/user/register', auth.auth, userController.addUser);
router.post('/user/login',auth.auth, userController.connectUser);
router.post('/user/walls',auth.auth, wallController.addWall)



module.exports = router;