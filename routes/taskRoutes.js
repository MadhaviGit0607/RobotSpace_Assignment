// backend/routes/taskRoutes.js
const express = require("express");
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

const router = express.Router();

// GET /tasks - Fetch all tasks
router.get("/", getTasks);

// POST /tasks - Add a new task
router.post("/", createTask);

// PATCH /tasks/:id - Update a task
router.patch("/:id", updateTask);

// DELETE /tasks/:id - Delete a task
router.delete("/:id", deleteTask);

module.exports = router;
