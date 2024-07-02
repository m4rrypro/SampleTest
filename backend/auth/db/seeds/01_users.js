exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, username: 'user1', password: 'password1', email: 'user1@example.com' },
        { id: 2, username: 'user2', password: 'password2', email: 'user2@example.com' },
        { id: 3, username: 'user3', password: 'password3', email: 'user3@example.com' }
      ]);
    });
};