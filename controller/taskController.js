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

  // Verificar se o campo 'task' é fornecido
  if (!task) {
    return res.status(400).send("O campo 'task' é obrigatório.");
  }

  // Garantir que 'check' seja um valor booleano (caso não seja enviado, será 'false' por padrão)
  const newTask = {
    task,
    check: typeof check === "boolean" ? check : false, // Definir check como false se não for um booleano
  };

  try {
    // Criar a nova tarefa
    await Task.create(newTask);
    return res.redirect("/"); // Redirecionar para a página inicial
  } catch (err) {
    console.error("Error creating task:", err);
    res.status(500).send("Internal Server Error");
  }
};

export default {
  getAllTasks,
  createTask
};
