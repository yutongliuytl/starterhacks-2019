var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var io = require('socket.io')();
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var http = require("http")
var app = express();
var server = http.createServer(app);
var io = require('socket.io')(http).listen(server);
mongoose.connect('mongodb://yutongliuytl:penis123@ds155864.mlab.com:55864/dressroom', {useNewUrlParser: true});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
var Product = require(__dirname+'/models/dressroom.js');
// app.use('/', indexRouter);
// app.use('/users', usersRouter);

app.get('/', function(req, res, next) {
  Product.find({}, function(err, docs) {
    res.render('index', { products: docs })
  });
});

app.get('/:id', function(req, res, next){
  var productId = req.params.id;
  Product.findById(productId, function(err, product){
    if(err){
      console.log("Error: No Product Found.");
      return res.redirect('/');
    }else{
      
    //Redirect
    io.on('connection', function (socket) {
      socket.emit('news', { hello: product });
      socket.on('my other event', function (data) {
        console.log(data);
      });
    });
        Product.find({},function(err,docs){
          if(!err){
           
            res.render('index', {products: docs , selected: product});
          }
        });
      
    }});
  });
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

server.listen(3000, function(){
  console.log("serverhasstarted");
})
module.exports = app;

