const express = require('express');
const router = express.Router();
const auth = require('./middlewares/auth');
const multerModule = require('./middlewares/multer');



// import controllers
const userController = require('./controllers/userController');
const wallController = require('./controllers/wallController');
const elementController = require('./controllers/elementController');


// user roads details 
router.get('/user/list', auth.auth, userController.listUsers);
router.post('/user/register', userController.addUser);
router.post('/user/login', userController.connectUser);
// wall roads details
router.get('/user/walls',auth.auth, wallController.listWalls);
router.post('/user/walls',auth.auth,multerModule.single("photo"), wallController.addWall)
router.delete('/user/walls/:id', auth.auth, wallController.deleteWall)
// elements roads details
router.post('/user/walls/:id/elements', auth.auth, elementController.addElement)



module.exports = router;