const User = require('../models/user');
const Wall = require('../models/wall');
const Element = require('../models/element');

const elementController = {
    // Get walls with user informations
    listElements: async function (req, res){

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
    // Add new element in a wall
    addElement: async function (req, res){

        const wallId = req.params.id;
        const userId = req.userId;
        console.log('WallId : '+ wallId);
        console.log ('userId : ' + userId);

        try {
            console.log('req.body : '+ JSON.stringify(req.body));
            console.log('req.file: '+ JSON.stringify(req.file));
            // we get the path of the photo (and we remove "public/" in the path) and insert it in req.body
            if(req.file){
                req.body.photo = req.file.filename;
            }else{
                req.body.photo = ""
            };
            // We create a new instance of element and save it in database
            const newElement = new Element(req.body);
            const recordedElement = await newElement.save(wallId,userId);
            console.log('recordedElement.id : ' + recordedElement.id);
                     
            res.status(200).json({recordedElement})


        } catch (error) {
            console.error(error)
            if (error instanceof Wall.NoDataError) {
                return res.status(404).json(error.message)
            }
        }
    },

    // deleteWall: async function (req, res){

    //     wallId = req.params.id;
    //     console.log('id du mur supprimé : '+ wallId);
                
    //     try {
    //         await Wall.deleteWallById(wallId);                        
    //         res.status(200)


    //     } catch (error) {
    //         console.error(error)
    //         if (error instanceof Wall.NoDataError) {
    //             return res.status(404).json(error.message)
    //         }
    //     }
    // },

}

module.exports = elementController;