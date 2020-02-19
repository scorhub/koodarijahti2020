exports.up = function(knex, Promise) {
    return knex.schema
      .createTable("users", t => {
        t.increments("uid").primary();
        t.string("usern", 10).notNullable().unique();
        t.string("psw", 255).notNullable();
        t.integer("points", 50).notNullable().default(0);
      })
      .createTable("calculator", t => {
        t.increments("pid").primary();
        t.integer("clicks", 50).notNullable().default(0);
      })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists("calculator")
    .dropTableIfExists("users");
  }; 