const Wall = require('../models/wall');

const wallController = {
    listwalls: async function (req, res, next){

        try {
            const walls = await Wall.findAll();
            res.json(walls);
        } catch (error) {
            console.error(error);
            if (error instanceof User.NoDataError) {
                return res.status(404).json(error.message);
            }
        }
    },

    addWall: async function (req, res, next){

        try {
            console.log(req.body);
            const newWall = new Wall(req.body);
            newWall.save();
            res.status(200).json(newWall)


        } catch (error) {
            console.error(error)
            if (error instanceof User.NoDataError) {
                return res.status(404).json(error.message)
            }
        }
    },

    // connectUser: async function (req, res, next){

    //     try {
    //         // we get login and password from login form
    //         const email = req.body.email;
    //         const mdp = req.body.password;
    //         // we put them in session
    //         req.session.email = email;
    //         req.session.mdp = mdp;
    //         // we get all the users registred in bdd
    //         const users = await User.findAll();
    //         // console.log(users);

    //         console.log(users)

    //         // const names = users.map(user=>user.name);
    //         // console.log(names);

           

            


    //         res.json(req.session)

            

    //     } catch (error) {
    //         console.error(error);
    //         if (error instanceof User.NoDataError) {
    //             return res.status(404).json(error.message);
    //         }
    //     }
    // },
}

module.exports = wallController;