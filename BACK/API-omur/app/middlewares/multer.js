// multer initialization
const multer = require("multer");


const storage = multer.diskStorage({
    // folder storage
    destination:  "public",
    //file name with extension
    filename: function (req, file, cb) {
      let extension;
      if (file.mimetype == 'image/png') extension = 'png';
      if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/jpg') extension = 'jpg'
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + '.' + extension)

        // cb(null, req.body.title)
    }
})
const upload = multer({ storage: storage });

module.exports = upload;