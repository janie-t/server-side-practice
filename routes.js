var development = require('./knexfile').development
var knex = require('knex')(development)

module.exports = {
  getHome: getHome
  // getIndex: getIndex
}

function getHome (req, res) {
  res.render('wekaNumbersIndex')
}

function getIndex (req, res) {
  knex('wekaContacts')
    .select('wekaContacts.name').from('wekaContacts')
    .then(function (dataArray){
      var dataObject = {wekaNames: dataArray}
      res.render('wekaNumbersIndex', dataObject)
    })
    .catch(error => console.log("error!!!"))
}

function newContact (req, res) {
  res.render('wekaNumbersNew')
}

function createContact (req, res) {
  var newContact = req.body
  knex('wekaContacts')
    .insert(newContact)
    .then(id => {
      res.redirect('/index')
    })
}
