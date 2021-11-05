const User = require('../models/user');
const Wall = require('../models/wall');


const wallController = {
    // Get walls with user informations
    listWalls: async function (req, res){

        try {
            const walls = await Wall.findWallsWithUserInfo();
            res.json(walls);
         
        } catch (error) {
            console.error(error);
            if (error instanceof User.NoDataError) {
                return res.status(404).json(error.message);
            }
        }
    },
    // Add new wal
    addWall: async function (req, res){

        const userId = req.userId;
        console.log('userId : '+ userId)

        try {
            
            console.log('req.body : '+ JSON.stringify(req.body));
            console.log('req.file: '+ JSON.stringify(req.file));
            // we get the path of the photo (and we remove "public/" in the path) and insert it in req.body
            if(req.file){
                req.body.photo = req.file.filename;
            }else{
                req.body.photo = ""
            };
            // We create a new instance of Wall and save it in database
            const newWall = new Wall(req.body);
            console.log(newWall);
            await newWall.saveInWall(userId);
            // We get the new wall id in database
            const wall = await Wall.findByTitle(req.body.title);
            const wallId = wall.id;
            // We transform req.body.users into an array of integers         
            const collabIdsInit = (req.body.users).split(',');
            const collabIds = collabIdsInit.map(id => parseInt(id));
            
            // We save wallId and collabId in "participate" table 
            for (const collab of collabIds){
                collabId = parseInt(collab);
                await newWall.saveWallInParticipate(wallId,collabId);
            };

            // const collabsData = await User.findByIds(req.body.users);
            // console.log('collabsData: ' + collabsData);

            
            res.status(200).json({result: {wall_id:wallId, collabs_is:collabIds},newWall})


        } catch (error) {
            console.error(error)
            if (error instanceof Wall.NoDataError) {
                return res.status(404).json(error.message)
            }
        }
    },

    deleteWall: async function (req, res){

        wallId = req.params.id;
        console.log('id du mur supprimé : '+ wallId);
                
        try {
            await Wall.deleteWallById(wallId);                        
            return res.status(200).json({message:'mur bien supprimé'});


        } catch (error) {
            console.error(error)
            if (error instanceof Wall.NoDataError) {
                return res.status(404).json(error.message)
            }
        }
    },

}

module.exports = wallController;