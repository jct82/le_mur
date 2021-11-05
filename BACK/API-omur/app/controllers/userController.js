const datamapper = require('../datamapper');
const User = require('../models/user');
// jwt token initialization
const jwt = require('jsonwebtoken');



const userController = {
    listUsers: async function (req, res){

        try {
            const users = await User.findAll();
            res.json(users);
        } catch (error) {
            console.error(error);
            if (error instanceof User.NoDataError) {
                return res.status(404).json(error.message);
            }
        }
    },

    addUser: async function (req, res){

        try {
            console.log(req.body);
            const newUser = new User(req.body);
            
            await newUser.save();
            // token generation
            const token = jwt.sign({id:newUser.id, email:newUser.email, name:newUser.name, lastname:newUser.lastname}, process.env.APP_SECRET, {expiresIn : '24h'});
            res.status(200).json({result:{id:newUser.id, name:newUser.name, lastname: newUser.lastname}, token})

        } catch (error) {
            console.error(error)
            if (error instanceof User.NoDataError) {
                return res.status(404).json(error.message)
            }
        }
    },

    connectUser: async function (req, res){

        // console.log ('headers : ' + JSON.stringify(req.headers.authorization));
        console.log('req.userId : ' + req.userId);

        try {
            // we get login and password from login form
            const email = req.body.email;
            const wp = req.body.password;
           
                    
            // we get all the users registred in bdd
            const user = await User.findByEmail(email);
            console.log(user);

            if (!user){
                res.status(401).json({message:"non-existent email"})
            }else{
                if (wp!=user.password){
                 res.status(401).json({message:"password error"})  
                 return; 
                }else{
                     // token generation
                     const token = jwt.sign({id:user.id, email:user.email, name:user.name, lastname:user.lastname}, process.env.APP_SECRET, {expiresIn : '24h'})
                     res.status(200).json({result: {id:user.id, name:user.name, lastname: user.lastname}, token});      
                }
            } ;                       

            
           

        } catch (error) {
            console.error(error);
            if (error instanceof User.NoDataError) {
                return res.status(404).json(error.message);
            }
        }
    },
}

module.exports = userController;