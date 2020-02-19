exports.seed = function(knex, Promise) {
  return knex("users")
    .del()
    .then(function() {
      return knex("users").insert([
        {
          uid: 1,
          usern: "kimmo",
          psw: "kimmo",
          points: 0
        }
      ]);
    });
};