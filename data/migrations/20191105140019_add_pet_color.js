
exports.up = function(knex) {
  return knex.schema.table('pets', tbl => {
      tbl.string('color', 64);
  })
};

exports.down = function(knex) {
    return knex.schema.table('pets', tbl => {
        tbl.dropColumn('color');
    })
};
