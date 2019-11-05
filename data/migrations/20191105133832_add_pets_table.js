// the changes to make
exports.up = function(knex) {
  return knex.schema.createTable('pets', function(table) {
    // adds a primary key, called 'id' as an autoincrement integer, not nullable, and unique
    table.increments();
    // columns: name, spacies, breed (optional), food, weight (floating number), weightUnit (lb, kg)
    table.string('name', 128).notNullable();
    table.string('species', 64).notNullable();
    table.string('breed', 64); // removing .notNullable() makes it optional
    table.string('food', 255);
    table.float('weight') // float is floating number, default to precision 8 and scale 2
    table.string('weightUnit', 64);
    table.timestamps();
  });
};

// how to undo those changes
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('pets');
};