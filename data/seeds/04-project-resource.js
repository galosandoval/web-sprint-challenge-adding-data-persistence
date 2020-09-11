exports.seed = function (knex) {
  const project_resource = [
    {
      project_id: 1,
      resource_id: 1,
    },
    {
      project_id: 1,
      resource_id: 2,
    },
    {
      project_id: 2,
      resource_id: 1,
    },
    {
      project_id: 2,
      resource_id: 2,
    },
  ];

  return knex("project_resource").insert(project_resource);

};
