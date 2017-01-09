
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('wekaContacts').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('wekaContacts').insert({id: 1, name: 'Janie', phone: '0276439901'}),
        knex('wekaContacts').insert({id: 2, name: 'Meghan', phone: '0223948820'})
      ]);
    });
};
