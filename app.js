var express = require('express')
var expresshbs = require('express-handlebars')
var path = require('path')
var bodyParser = require('body-parser')

var routes = require('./routes')

var app = express()

module.exports = app;

// view engine setup
app.use(bodyParser.urlencoded({extended: true}))
app.engine('handlebars', expresshbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'views'))

//---------------------Ignore above here-------------------//


app.get('/', routes.getHome)
app.get('/index', routes.getIndex)
app.get('/index/:id', routes.getContact)



// app.get('/wekaNumbers/new', function(req, res) {
//  res.render('wekaNumbersNew')
// })
//
// app.get('/wekaNumbers/:id', function(req,res){
//   console.log(req.params); // try going to /cats/1
// })
//
// app.post('/wekaNumbers', function(req,res) {
//   console.log(req.body);
// })
//
// app.get('/app.js', function(req, res) {
//   console.log("Hello this is a response to your request for app.js");
// })
//
// app.get('/app.css', function(req, res){
//   console.log("Hello this is a css file I am sending right now")
// })
