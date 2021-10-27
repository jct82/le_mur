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
const PORT = process.env.PGPORT || 5432;
app.listen(PORT,()=>{
    console.log(`Le serveur est lancé sur http://${PGHOST}:${PORT}`);
});
