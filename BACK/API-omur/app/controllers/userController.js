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
            const mdp = req.body.password;
            // we put them in session
            req.session.email = email;
            req.session.mdp = mdp;
            // we get all the users registred in bdd
            const users = await User.findAll();
            // console.log(users);

            for (const user of users){
                console.log(users[name])
            }
;

            // const names = users.map(user=>user.name);
            // console.log(names);

           

            


            res.json(req.session)

            

        } catch (error) {
            console.error(error);
            if (error instanceof User.NoDataError) {
                return res.status(404).json(error.message);
            }
        }
    },
}

module.exports = userController;