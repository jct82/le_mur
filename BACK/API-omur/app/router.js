const express = require('express');
const router = express.Router();
const auth = require('./middlewares/auth');
const multerModule = require('./middlewares/multer');



// import controllers
const userController = require('./controllers/userController');
const wallController = require('./controllers/wallController');
const elementController = require('./controllers/elementController');
const { listWallById } = require('./controllers/wallController');


// user roads details 
router.get('/user/list', auth.auth, userController.listUsers);
router.post('/user/register', userController.addUser);
router.post('/user/login', userController.connectUser);
router.patch('/user/login', auth.auth, userController.updateUser);
// wall roads details
router.get('/user/walls',auth.auth, wallController.listWalls);
router.get('/user/walls/:id', auth.auth, wallController.listWallById);
router.post('/user/walls',auth.auth,multerModule.single("photo"), wallController.addWall);
router.delete('/user/walls/:id', auth.auth, wallController.deleteWall);
router.patch('/user/walls/:id', auth.auth,multerModule.single("photo"), wallController.updateWall);
// elements roads details
router.get('/user/walls/:id/elements', auth.auth, elementController.listElements);
router.post('/user/walls/:id/elements', auth.auth, multerModule.single("photo"), elementController.addElement);
router.delete('/user/walls/:id/elements/:id_element', auth.auth, elementController.deleteElement);
router.patch('/user/walls/:id/elements/:id_element', auth.auth, multerModule.single("photo"), elementController.updateElement);



module.exports = router;