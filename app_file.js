var express = require('express');
var app = express();

app.locals.pretty = true;  // line break. don't forget 's' in locals
app.set('views','./views_file');
app.set('view engine','pug');

app.get('/topic/new', function(req,res){       //path, callback
  res.render('news');
});

app.listen(3000, function(){
  console.log('Connected, 3000!');  //port connection
});
