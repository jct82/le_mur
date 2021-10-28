// require .env file
const dotenv = require("dotenv").config({ path: '../.env' });
console.log(dotenv)
//express initialization
const express = require("express");
const app = express();


app.use(express.urlencoded({extended: true}));
app.use(express.json());

// router initialization
const router = require("./app/router");
app.use(router);

// PORT configuration
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Le serveur est lancé sur http://localhost:${PORT}`);
});
