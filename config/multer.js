const multer = require("multer");
var sftpStorage = require('multer-sftp');
const storage = sftpStorage({
    sftp: {
      host: 'transdeal.co.id',
      port: 22,
      username: 'transdea',
      password: '2wI5yu3fE2'

    },
    destination: function(req,file,cb){
        cb(null,"./public_html/multer-image-upload/");
    },
    filename: function(req,file,cb){
        let fileType="";
        if (file.mimetype === "image/png"){
            fileType="png";
        }
        if (file.mimetype === "image/jpeg"){
            fileType="jpg";
        }
        cb(null,file.originalname);
    }
});

const upload=multer({storage:storage})

module.exports = upload;