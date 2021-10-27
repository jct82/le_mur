const datamapper = require('../datamapper');

const wallController = {
    test: async function (_, res){

        res.send('coucou')
        // const result = await datamapper.getAllUsers();

        // console.log(result);
        // res.json(result.rows)
        }
        // res.json(result.rows);
    
};

module.exports = wallController;