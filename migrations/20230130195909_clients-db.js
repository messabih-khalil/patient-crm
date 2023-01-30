/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return (
    knex.schema
      //   clients table
      .createTable("clients", tbl => {
        tbl.increments("id").primary();
        tbl.text("name");
        tbl.string("phone");
      })
      // Appointmeents table
      .createTable("appointments", tbl => {
        tbl.increments("id").primary();
        tbl.text("description");
        tbl.bigInteger("price");
        tbl.bigInteger("paid");
        tbl.timestamps(true, true);
        //   Foreign key with client table
        tbl
          .integer("client_id")
          .unsigned()
          .references("id")
          .inTable("clients")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
      })
  );
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("clients")
    .dropTableIfExists("appointments");
};
