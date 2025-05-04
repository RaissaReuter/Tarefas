import Task from "../models/task.js";

const getAllTasks = async (req, res) => {
  try {
    const tasksList = await Task.find(); // Obter todas as tarefas
    return res.render("index", { tasksList }); // Renderizar a página com as tarefas
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const createTask = async (req, res) => {
  const { task, check } = req.body;

  if (!task) {
    return res.status(400).send("O campo 'task' é obrigatório.");
  }

  const newTask = {
    task,
    check: typeof check === "boolean" ? check : false,
  };

  try {
    await Task.create(newTask);
    return res.redirect("/");
  } catch (err) {
    console.error("Error creating task:", err);
    res.status(500).send("Internal Server Error");
  }
};


const getById = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id });
    const tasksList = await Task.find();
    res.render("index", { tasksList, task });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

export default {
  getAllTasks,
  createTask,
  getById, 
};
