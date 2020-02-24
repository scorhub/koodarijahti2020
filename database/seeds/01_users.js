exports.seed = function(knex, Promise) {
  return knex("users")
    .del()
    .then(function() {
      return knex("users").insert([
        {
          uid: 1,
          usern: "test",
          psw: "test",
          points: 0
        }
      ]);
    });
};