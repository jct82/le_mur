const jwt = require ('jsonwebtoken');

const auth = {

auth: async function (req, res, next) {

    try {
        console.log(req.headers.authorization)
        if(!req.headers.authorization){
            res.status(401).json({message:"unauthorized"});
            return 
        }
        // we remove "bearer" from the token in order to have just the key
        const token = req.headers.authorization.split(" ")[1];

        // We verify and decode the token
        const decodedData = await jwt.verify(token, process.env.APP_SECRET);
        // We save the id in request
        req.userId = decodedData.id;
        
          next()

         }catch (error) {
         console.error(error);
            }
     }
}



module.exports = auth;