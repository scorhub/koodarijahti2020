exports.up = function(knex, Promise) {
    return knex.schema
      .createTable("users", t => {
        t.increments("uid").primary();
        t.string("usern", 10).notNullable().unique();
        t.string("psw", 255).notNullable();
      })
      .createTable("points", t => {
        t.increments("pid").primary();
        t.integer("points", 50).notNullable().default(0);
      })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists("points")
    .dropTableIfExists("users");
  }; 