const User = require('../models/user');
const Wall = require('../models/wall');


const wallController = {
    // Get walls with user informations
    listWalls: async function (req, res){
      const userId = req.userId;
        try {
            const walls = await Wall.findWallsWithUserInfo(userId);
           
            console.log('walls : ' + JSON.stringify(walls));
            // Initialization of an Array to push all the walls ids in
            const ArrayOfWallIds = [];
            // We put the id of each wall in ArrayOfWallIds
            for (const wall of walls){
                const wallId = wall.id;
                ArrayOfWallIds.push(wallId)
            }console.log(ArrayOfWallIds)
                        
            // We get in database all informations about collaborators of one wall
            const collabsData = await Wall.findCollabsInfoByWallId(ArrayOfWallIds)
           
            res.status(200).json({result : walls,collabsData});

         
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
            // We add the owner_id of the wall in collabIds to save collaboratos and owner in "participate" table
            collabIds.push(userId);
            console.log('collabsIDs: ' + collabIds);
            // Inisialization of an array to stock all ids
            collabIdsArray = [];
            // We save wallId and collabId in "participate" table 
            for (const collab of collabIds){
                collabId = parseInt(collab);
                // we push every id in collabIdsArray
                collabIdsArray.push(collabId);
                await newWall.saveWallInParticipate(wallId,collabId);
            };
            console.log(collabIdsArray);

            const collabsData = await User.findByIds(collabIdsArray);
            console.log('collabsData: ' + JSON.stringify(collabsData));

            
            res.status(200).json({result: {wall_id:wallId},collabsData,newWall})


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
           
        }
    },

    // Modify existing wall
    updateWall: async function (req, res){

        const wallId = req.params.id;
        console.log('wallId : '+ wallId)

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
            const updatedWall = await newWall.update(wallId);

            // We delete all colaborators of a wall to resave them in case there were modified
            await Wall.deleteCollabs(wallId);                        
            return res.status(200).json({message:'collaborateurs bien supprimé'});

            // We transform req.body.users into an array of integers         
            const collabIdsInit = (req.body.users).split(',');
            const collabIds = collabIdsInit.map(id => parseInt(id));
            // We add the owner_id of the wall in collabIds to save collaboratos and owner in "participate" table
            collabIds.push(userId);
            console.log('collabsIDs: ' + collabIds);
            // Inisialization of an array to stock all ids
            collabIdsArray = [];
            // We save wallId and collabId in "participate" table 
            for (const collab of collabIds){
                collabId = parseInt(collab);
                // we push every id in collabIdsArray
                collabIdsArray.push(collabId);
                await newWall.saveWallInParticipate(wallId,collabId);
            };
            console.log(collabIdsArray);

            const collabsData = await User.findByIds(collabIdsArray);
            console.log('collabsData: ' + JSON.stringify(collabsData));

            
            res.status(200).json({result : updatedWall, collabsData});


        } catch (error) {
            console.error(error)
            if (error instanceof Wall.NoDataError) {
                return res.status(404).json(error.message)
          
             }
        }
    
    }    

}

module.exports = wallController;