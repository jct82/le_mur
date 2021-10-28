const express = require('express');
const router = express.Router();

// import des controllers
const wallController = require('./controllers/wallController');


// détail des incidents
router.get('/user/register', wallController.listUsers);



module.exports = router;