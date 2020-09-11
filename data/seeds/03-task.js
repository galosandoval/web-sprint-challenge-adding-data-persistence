exports.seed = function (knex) {
  const task = [
    {
      description: "pick out wood",
      notes: "get some dope cedar",
      completed: false,
      project_id: 1,
    },
    {
      description: "cut wood",
      notes: "use a saw baby",
      completed: false,
      project_id: 1,
    },
    {
      description: "buy cleaning products",
      notes: "use that all natural stuff",
      completed: false,
      project_id: 2,
    },
  ];
  return knex("task").insert(task);
};
