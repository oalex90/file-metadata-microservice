'use strict';

var express = require('express');
var cors = require('cors');
var multer = require('multer'); //used to upload file and get file info
var upload = multer({dest: 'uploads/'}) //used to upload file and get file info

// require and use "multer"...

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.post('/api/fileanalyse', upload.single('upfile'), (req, res, next)=>{ //'upfile' matches file input name
  res.send({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  });
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
