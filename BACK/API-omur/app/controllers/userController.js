const datamapper = require('../datamapper');
const User = require('../models/user');
// jwt token initialization
const jwt = require('jsonwebtoken');
// bcrypt initialization to hash password
const bcrypt = require('bcrypt');



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
            // First we hash the password with bcrypt
            const hashedPassword = await bcrypt.hash(req.body.password, 12);
            // Then we set the hashedPassword in req.body
            req.body.password = hashedPassword;
            console.log(req.body);
            const newUser = new User(req.body);
            // We save the new user in database
            const recordedUser = await newUser.save();
            console.log('recorderUserId:' + recordedUser.id);
            // token generation
            const token = jwt.sign({id:recordedUser.id, email:newUser.email, name:newUser.name, lastname:newUser.lastname}, process.env.APP_SECRET, {expiresIn : '24h'});
            res.status(200).json({result:{id:newUser.id, name:newUser.name, lastname: newUser.lastname}, token})

        } catch (error) {
            console.error(error)
            if (error instanceof User.NoDataError) {
                return res.status(404).json(error.message)
            }
        }
    },

    connectUser: async function (req, res){

        
        console.log('req.userId : ' + req.userId);

        try {
            // we get login and password from login form
            const email = req.body.email;
            const wp = req.body.password;
           
                    
            // we check if the email is registred in bdd
            const user = await User.findByEmail(email);
            console.log(user);
            // If not there is an error
            if (!user){
                res.status(401).json({message:"non-existent email"})
                // If email exist we compare hashed passwords
            }else{
                const validPassword = await bcrypt.compare(wp,user.password);
                // if password is not valid there is an error
                if (!validPassword) {
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