module.exports = (app) => {
  
  const files = require("../controllers/file.controller.js");
  const multer  = require('multer');
  const upload = multer();
  
  // Default homepage provided by FCC
  app.get('/', (req, res) => {
    res.sendFile(process.cwd() + '/views/index.html');
  });
  
  //Upload file
  app.post("/api/fileanalyse", upload.single("upfile"), files.upload);
 
};