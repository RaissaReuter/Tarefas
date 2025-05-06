import { Router } from "express";
import {
  getAllTasks,
  createTask,
  getById,
  updateOneTask,
  deleteOneTask,
  taskCheck,
} from "../controller/taskController.js";

const router = Router();

router.get("/", getAllTasks);
router.post("/create", createTask);
router.get("/getById/:id/:method", getById);
router.post("/updateTask/:id", updateOneTask);
router.get("/deleteOne/:id", deleteOneTask);
router.get("/check/:id", taskCheck);

export default router;
