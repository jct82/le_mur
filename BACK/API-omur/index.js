// require .env file
require("dotenv").config({ path: __dirname + '/.env' });

//express initialization
const express = require("express");
const app = express();


app.use(express.urlencoded({extended: true}));
app.use(express.json());

// router initialization
const router = require("./app/router");
app.use(router);

// PORT configuration
const PORT = process.env.PORT || 3002;
app.listen(PORT,()=>{
    console.log(`Les Aopoh écoutent vos incidents sur http://localhost:${PORT}`);
});
