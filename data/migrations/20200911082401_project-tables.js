exports.up = function (knex) {
  return knex.schema
    .createTable("project", (tbl) => {
      tbl.increments();

      tbl.string("project-name", 20).notNullable();

      tbl.string("description", 128);

      tbl.boolean("completed").notNullable().defaultTo(false);
    })
    .createTable("resource", (tbl) => {
      tbl.increments();

      tbl.string("resource-name").notNullable();

      tbl.string("description", 128);
    })
    .createTable("task", (tbl) => {
      tbl.increments();

      tbl.string("description", 128).notNullable();

      tbl.string("notes", 250);

      tbl.boolean("completed").notNullable().defaultTo(false);
    })
    .createTable("project-resource", (tbl) => {
      tbl.increments();

      tbl
        .integer("resource-id")
        .unsigned()
        .notNullable()
        .references("resource.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");

      tbl
        .integer("project-id")
        .unsigned()
        .notNullable()
        .references("project.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("project-resource")
    .dropTableIfExists("task")
    .dropTableIfExists("resource")
    .dropTableIfExists("project");
};
