const Wall = require('../models/wall');

const wallController = {
    listWalls: async function (req, res, next){

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

        console.log('req.body : '+ JSON.stringify(req.body));
        console.log('req.file: '+ JSON.stringify(req.file));
        console.log(req.body.users)
        const userId = req.userId;
        

        // try {
            
        //     console.log('req.body : '+ req.body);
        //     const newWall = new Wall(req.body);
        //     await newWall.saveInWall(userId);

        //     res.status(200).json(newWall)


        // } catch (error) {
        //     console.error(error)
        //     if (error instanceof User.NoDataError) {
        //         return res.status(404).json(error.message)
        //     }
        // }
    },

}

module.exports = wallController;