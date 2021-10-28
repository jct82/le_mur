const datamapper = require('../datamapper');
const User = require('../models/user');

const wallController = {
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
            

            
        } catch (error) {
            console.error(error)
            if (error instanceof User.NoDataError) {
                return res.status(404).json(error.message)
            }
        }
    }
}

module.exports = wallController;