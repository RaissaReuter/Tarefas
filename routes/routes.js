import { Router } from "express";
import {
  getAllTasks,
  createTask,
  getById,
  updateTask,
  deleteOneTask
} from "../controller/taskController.js";

const router = Router();

// Rotas com funções diretamente vinculadas
router.get("/", getAllTasks);
router.post("/create", createTask);
router.get("/getById/:id/:method", getById);
router.post("/updateTask/:id", updateTask);
router.get("/deleteOne/:id", deleteOneTask);

export default router;