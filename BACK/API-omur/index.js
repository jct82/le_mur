// require .env file
const dotenv = require("dotenv").config({ path: '../.env' });
console.log(dotenv)
//express initialization
const express = require("express");
//express-session initialization
//const session = require('express-session');

const app = express();


// using cors to allow connecting from anywhere
const cors = require('cors');

app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors({
  // origin: "http://localhost:3000/",
  credentials:true,

  allowedHeaders: ["authorization", "Content-Type"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
}));

/*
//express-session options 
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: process.env.APP_SECRET,
  cookie: {
    secure: false,
    maxAge: (24*30*1000*60*60) // one month
  }
}));
*/

// router initialization
const router = require("./app/router");
app.use(router);

// PORT configuration
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Le serveur est lancé sur http://localhost:${PORT}`);
});
