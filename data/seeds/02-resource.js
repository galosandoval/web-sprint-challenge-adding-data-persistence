
exports.seed = function(knex) {
  const resource = [
    {
      resource_name: 'Wiki-How',
      description: 'useful articles with step by step instructions'
    },
    {
      resource_name: 'Google',
      description: 'a whole world of how-to'
    }
  ]

  return knex("resource").insert(resource);
};
