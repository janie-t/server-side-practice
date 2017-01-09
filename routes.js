console.log("It is working")

var db = require('./db')


function resources(req, res){
  db.grabResources()
  .then(function(resources){
    res.json({data: resources})
  })

}




// function addResourceToTable (req, res) {
//   db.addResourceToTable(req.body)
//   res.redirect('/resource')
// }


module.exports = {
  resources
}
