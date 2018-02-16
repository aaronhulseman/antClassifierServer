var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require("body-parser");
var multer = require("multer");
var formidable = require('formidable');
var fs = require('fs');
var sharp = require('sharp');
var readChunk = require('read-chunk');
var fileType = require('file-type');



app.use(bodyParser.urlencoded({
  extended: true
}));
//var http = require('http');
//var url = require('url');

var classify = require('./routes/classify');

var port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/classify', classify);

app.get('/testimage', classify);


app.post('/store', function(req, res){
    console.log(req.method);
    res.redirect("/uploads");
});

app.get('/', function(req, res){
    console.log(req.method);
    res.sendFile(path.join(__dirname, 'index.html'));
});

/*
app.get('/classify', function(req, res){
    console.log("classify image..." + fileName);
    res.send(response);
    
});
*/

/*app.post("/uploads", multer({dest: "./uploads/"}).array("uploads", 12), function(req, res) {
    var fileInfo = [];
    for(var i = 0; i < req.files.length; i++) {
        fileInfo.push({
            "originalName": files[i].originalName,
            "size": file.size,
            "b64": new Buffer(fs.readFileSync(file.path)).toString("base64")
        });
        fs.unlink(req.files[i].path);
    }
    res.send(fileInfo);
});*/


app.post('/uploads', function(req, res){
    console.log(req.method);

    // create an incoming form object
    var form = new formidable.IncomingForm();
    
    // specify that we want to allow the user to upload multiple files in a single request
    //form.multiples = true;

    // store all uploads in the /uploads directory
    form.uploadDir = path.join(__dirname, '/uploads');

    // every time a file has been uploaded successfully,
    // rename it to it's orignal name
    form.on('file', function(name, file) {
        
        // Log file metadata to console
        console.log(file.name);
        console.log(file.type);
        console.log(file.size);
        
        // Save original image to /uploads
        fs.rename(file.path, path.join(form.uploadDir, file.name));
        
        // Use sharp to convert image and save it /uploads/jpegs
        sharp('uploads/'+file.name).toFile("uploads/jpegs/Charlie_Brown.jpg", function(err, info){
            if(err) console.log(err);
        });
    });

    // log any errors that occur
    form.on('error', function(err) {
    console.log('An error has occured: \n' + err);
    });

    // once all the files have been uploaded, send a response to the client
    form.on('end', function() {
    res.end('success');
    });

    // parse the incoming request containing the form data
    form.parse(req);
    

});

var server = app.listen(port, function(){
  console.log('Server listening on port 8080');
});

