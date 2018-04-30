var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.locals.pretty = true;
app.set('views','./views_file');
app.set('view engine','pug');
app.get('/topic/new', function(req,res){
  res.render('news');
});
app.get('/topic', function(req,res){
  fs.readdir('data', function(err,files){
    if(err){
      console.log(err);
      res.status(500).send('Internet Server Error');
    }
    res.render('view', {topics:files});
  })
});
app.post('/topic', function(req,res){
  var title = req.body.title;
  var description = req.body.description;
  fs.writeFile('data/'+title, description, function(err){
    if(err){
      res.status(500).send('Internet Server Error');
    }
    res.send('hi PJ, You made it');
  })

});

app.listen(3000, function(){
  console.log('Connected, 3000!');
});
