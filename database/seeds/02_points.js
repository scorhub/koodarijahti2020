exports.seed = function(knex, Promise) {
  return knex("calculator")
    .del()
    .then(function() {
      return knex("calculator").insert([
        {
          pid: 1,
          clicks: 0
        }
      ]);
    });
};