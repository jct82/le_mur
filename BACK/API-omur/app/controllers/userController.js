const datamapper = require('../datamapper');
const User = require('../models/user');


const userController = {
    listUsers: async function (req, res, next){

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

    addUser: async function (req, res, next){

        try {
            console.log(req.body);
            const newUser = new User(req.body);
            newUser.save();
            res.status(200).json(newUser)


        } catch (error) {
            console.error(error)
            if (error instanceof User.NoDataError) {
                return res.status(404).json(error.message)
            }
        }
    },

    connectUser: async function (req, res, next){

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
                     // we put them in session
                    req.session.user_id = user.id;
                    req.session.email = user.email;
                    req.session.name = user.name;
                    req.session.lastname = user.lastname;
                    req.session.password = user.password;
                }
            } ;                       

            res.status(200).json(req.session);
           

        } catch (error) {
            console.error(error);
            if (error instanceof User.NoDataError) {
                return res.status(404).json(error.message);
            }
        }
    },
}

module.exports = userController;