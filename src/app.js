const express = require("express");

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "healthy" });
});

app.post("/tasks", (req, res) => {
  const { title } = req.body;

  if (!title || !title.trim()) {
    return res.status(400).json({
      error: "Title is required",
    });
  }

  return res.status(201).json({
    title: title.trim(),
    completed: true,
  });
});

if (require.main === module) {
  app.listen(3000, () => {
    console.log("Task Tracker running on port 3000");
  });
}

module.exports = app;