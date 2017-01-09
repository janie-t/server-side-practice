exports.up = function (knex, Promise) {
  return knex.schema.createTable('wekaContacts', function (table) {
    table.increments('id').primary()
    table.string('name')
    table.string('phone')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('wekaContacts')
}
