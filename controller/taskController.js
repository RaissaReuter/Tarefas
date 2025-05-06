const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const tasksList = await Task.find();
    return res.render("index", {
      tasksList,
      task: null,
      taskDelete: null,
      message: req.flash("message"),
      type: req.flash("type"),
    });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const createTask = async (req, res) => {
  const task = req.body;

  if (!task.task) {
    req.flash("message", "Insira um texto, antes de adicionar a tarefa!");
    req.flash("type", "danger");
    return res.redirect("/");
  }

  try {
    await Task.create(task);
    req.flash("message", "Tarefa criada com sucesso!");
    req.flash("type", "success");
    return res.redirect("/");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const getById = async (req, res) => {
  try {
    const tasksList = await Task.find();
    if (req.params.method == "update") {
      const task = await Task.findOne({ _id: req.params.id });
      res.render("index", { 
        task, 
        taskDelete: null, 
        tasksList, 
        message: req.flash("message"), 
        type: req.flash("type") 
      });
    } else {
      const taskDelete = await Task.findOne({ _id: req.params.id });
      res.render("index", { 
        task: null, 
        taskDelete, 
        tasksList, 
        message: req.flash("message"), 
        type: req.flash("type") 
      });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const updateOneTask = async (req, res) => {
  try {
    const task = req.body;
    await Task.updateOne({ _id: req.params.id }, task);
    req.flash("message", "Tarefa atualizada com sucesso!");
    req.flash("type", "success");
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const deleteOneTask = async (req, res) => {
  try {
    await Task.deleteOne({ _id: req.params.id });
    req.flash("message", "Tarefa apagada com sucesso!");
    req.flash("type", "success");
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const taskCheck = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id });
    await Task.updateOne({ _id: req.params.id }, { check: !task.check });
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getById,
  updateOneTask,
  deleteOneTask,
  taskCheck,
};
