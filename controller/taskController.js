import Task from "../models/task.js";

// Funções separadas (mais fácil de debugar)
export const getAllTasks = async (req, res) => {
  try {
    const tasksList = await Task.find().sort({ date: -1 });
    res.render("index", { tasksList, task: null, taskDelete: null });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

export const createTask = async (req, res) => {
  try {
    const { task } = req.body;
    if (!task) return res.status(400).send("O campo 'task' é obrigatório.");
    
    await Task.create({ task });
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

// ... manter as outras funções com export individual