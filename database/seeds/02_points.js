exports.seed = function(knex, Promise) {
  return knex("points")
    .del()
    .then(function() {
      return knex("points").insert([
        {
          pid: 1,
          points: 0
        }
      ]);
    });
};