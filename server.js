const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const { getTasks, createTask, updateTask, deleteTask } = require("./controllers/taskControllers"); // Import task controller functions

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/api/tasks", getTasks); // GET route to retrieve tasks
app.post("/api/tasks", createTask); // POST route to create a task
app.put("/api/tasks/:id", updateTask); // PUT route to update a task
app.delete("/api/tasks/:id", deleteTask); // DELETE route to delete a task

// Error Handling Middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
