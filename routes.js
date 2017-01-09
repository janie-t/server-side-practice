console.log("It is working")

var db = require('./db')


function resources(req, res){
  db.grabResources()
  .then(function(resources){
    res.json({data: resources})
  })
}

function renderIndividualId(req, res) {
  var id = req.params.id
  db.grabIndividualResource(id)
    .then(individualResource => {
      console.log(individualResource)
    res.json(individualResource[0])
  })
}



// function addResourceToTable (req, res) {
//   db.addResourceToTable(req.body)
//   res.redirect('/resource')
// }


module.exports = {
  resources,
  renderIndividualId
}
