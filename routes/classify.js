var express = require('express');
var router = express.Router();
var readChunk = require('read-chunk');
var fileType = require('file-type');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/classify', function(req, res, next){
    var species, genus, antInfo, imageLink;
    species = "aberrans";
    genus = "amblyopone";
    // Add call to api server to get image for species
    // imageLink = 
    antInfo = "https://www.antweb.org/description.do?genus=" + genus + "&species=" + species;
    res.send(antInfo);
});

function validateImage(){
    // Validate image using file-type
    var buffer = readChunk.sync('uploads/'+file.name, 0, 4100);

    console.log(fileType(buffer));
    var imgType = fileType(buffer).ext;

    // Check file type to convert to jpeg.
    if(imgType.valueOf() == 'jpg'.valueOf | imgType.valueOf() =='png'.valueOf | imgType.valueOf() =='gif'.valueOf | imgType.valueOf() =='jpeg'.valueOf | imgType.valueOf() =='bmp'.valueOf | imgType.valueOf() =='tif'.valueOf | imgType.valueOf() =='tiff'.valueOf | imgType.valueOf() =='raw'.valueOf | imgType.valueOf() =='wmf'.valueOf | imgType.valueOf() =='webp'.valueOf | imgType.valueOf() =='img'.valueOf | imgType.valueOf() =='pct'.valueOf | imgType.valueOf() =='tga'.valueOf | imgType.valueOf() =='jpe'.valueOf | imgType.valueOf() =='ani'.valueOf | imgType.valueOf() =='heif'.valueOf | imgType.valueOf() =='heic'.valueOf){
        return true;
    } 
    else return false;
};

module.exports = router;