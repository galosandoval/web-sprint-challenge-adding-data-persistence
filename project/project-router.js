const express = require("express");

const router = express.Router();

const db = require("../data/db-config");

// list of projects
router.get("/", (req, res) => {
  db("project").then((projects) => {
    res.status(200).json(projects);
  });
});

// list of resources
router.get("/resource", (req, res) => {
  db("resource")
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// list of tasks
router.get("/task", (req, res) => {
  db("task")
    .join("project", "task.project_id", "=", "project.id")
    .select(
      "project.project_name",
      "project.description",
      "task.description as task"
    )
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

module.exports = router;
