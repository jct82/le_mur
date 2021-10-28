const express = require('express');
const router = express.Router();

// import controllers
const wallController = require('./controllers/wallController');


// user roads details 
router.get('/user/register', wallController.listUsers);
router.post('/user/register', wallController.addUser);



module.exports = router;