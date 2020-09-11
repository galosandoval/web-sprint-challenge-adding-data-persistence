exports.seed = function (knex) {
  const project = [
    {
      project_name: "make a table",
      description: "Learn how to make a table",
      completed: false,
    },
    {
      project_name: "clean the kitchen",
      description: "deep clean the kitchen",
      completed: false,
    },
  ];
  return knex("project").insert(project);
};
