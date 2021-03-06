
var development = require('./knexfile')['development']
var knex = require('knex')(development)

function grabResources(){
   return knex('wekaContacts')
   .select('*')
}

function grabIndividualResource(id){
  return knex('wekaContacts')
  .select('*')
  .where({id: id})
}

function addResourceToTable (data) {
  delete data.submit
  console.log(data);
  return knex('resources')
  .insert(data)
}

module.exports = {
  grabResources,
  grabIndividualResource,
  addResourceToTable
}
