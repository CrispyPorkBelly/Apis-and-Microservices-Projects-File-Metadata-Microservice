const File = require("../models/file.model.js");

// Create and save a new file
exports.upload = (req, res) => {
    //store file
    const file = req.file;
  
    if(!file) {
      throw new Error("No file uploaded");
    }
  
    res.send({
      "name": file.originalname,
      "type": file.mimetype,
      "size": file.size
    })
};