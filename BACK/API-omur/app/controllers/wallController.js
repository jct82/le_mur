const datamapper = require('../datamapper');

const wallController = {
    test: async function (_, res){

        try {

        const result = await datamapper.getAllUsers();

        console.log(result.rows);
        res.json(result.rows)
        }
        catch (error) {
            console.error(error);
       
        }
        // res.json(result.rows);
    }
}

module.exports = wallController;