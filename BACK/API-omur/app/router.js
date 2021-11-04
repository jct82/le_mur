const express = require('express');
const router = express.Router();
const auth = require('./middlewares/auth');

//test multer
const multer = require("multer");

const storage = multer.diskStorage({
    destination:  "public",
    
    filename: function (req, file, cb) {
      let extension;
      if (file.mimetype == 'image/png') extension = 'png';
      if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/jpg') extension = 'jpg'
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + '.' + extension)

        // cb(null, req.body.title)
    }
})

const upload = multer({ storage: storage })

// import controllers
const userController = require('./controllers/userController');
const wallController = require('./controllers/wallController');


// user roads details 
router.get('/user/list', auth.auth, userController.listUsers);
router.get('/user/walls',auth.auth, wallController.listWalls);
router.post('/user/register', userController.addUser);
router.post('/user/login', userController.connectUser);
router.post('/user/walls',auth.auth, upload.single("photo"), wallController.addWall)



module.exports = router;