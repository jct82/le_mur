const Wall = require('../models/wall');

const wallController = {
    listWalls: async function (req, res){

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

    addWall: async function (req, res){

        const userId = req.userId;
        console.log('userId : '+ userId)

        try {
            
            console.log('req.body : '+ JSON.stringify(req.body));
            console.log('req.file: '+ JSON.stringify(req.file));
            // we get the path of the photo and insert it in req.body
            req.body.photo = req.file.path;
            // We create a new instance of Wall and save it in database
            const newWall = new Wall(req.body);
            console.log(newWall);
            await newWall.saveInWall(userId);
            // We get the new wall id in database
            const wall = await Wall.findByTitle(req.body.title);
            const wallId = wall.id;
            // We save wallId and collabId in "participate" table            
            const collabIdsInit = (req.body.users).split(',');
            const collabIds = collabIdsInit.map(id => parseInt(id));
            console.log(collabIds)

            for (const collab of collabIds){
                collabId = parseInt(collab);
                await newWall.saveWallInParticipate(wallId,collabId);
            }

            
            res.status(200).json(newWall)


        } catch (error) {
            console.error(error)
            if (error instanceof Wall.NoDataError) {
                return res.status(404).json(error.message)
            }
        }
    },

}

module.exports = wallController;