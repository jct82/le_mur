const express = require('express');
const router = express.Router();
const auth = require('./middlewares/auth');
const multerModule = require('./middlewares/multer');



// import controllers
const userController = require('./controllers/userController');
const wallController = require('./controllers/wallController');


// user roads details 
router.get('/user/list', auth.auth, userController.listUsers);
router.post('/user/register', userController.addUser);
router.post('/user/login', userController.connectUser);
// wall roads details
router.get('/user/walls',auth.auth, wallController.listWalls);
router.post('/user/walls',auth.auth,multerModule.single("photo"), wallController.addWall)



module.exports = router;