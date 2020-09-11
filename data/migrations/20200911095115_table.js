completed: false,
  (exports.up = function (knex) {
    return knex.schema
      .createTable("project", (tbl) => {
        tbl.increments();

        tbl.text("project_name", 20).unique().notNullable();

        tbl.string("description", 128);

        tbl.boolean("completed").notNullable().defaultTo(false);
      })
      .createTable("resource", (tbl) => {
        tbl.increments();

        tbl.string("resource_name").notNullable();

        tbl.string("description", 128);
      })
      .createTable("task", (tbl) => {
        tbl.increments();

        tbl.string("description", 128).notNullable();

        tbl.string("notes", 250);

        tbl.boolean("completed").notNullable().defaultTo(false);
        
        tbl.integer('project_id').unsigned()
        .notNullable()
        .references("project.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      })
      .createTable("project_resource", (tbl) => {
        tbl.increments();

        tbl
          .integer("resource_id")
          .unsigned()
          .notNullable()
          .references("resource.id")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");

        tbl
          .integer("project_id")
          .unsigned()
          .notNullable()
          .references("project.id")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
      });
  });

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("project_resource")
    .dropTableIfExists("task")
    .dropTableIfExists("resource")
    .dropTableIfExists("project");
};
