import { Router } from "express";
import taskController from "../controller/taskController.js";

const router = Router();

router.get("/", taskController.getAllTasks);
router.post("/create", taskController.createTask);
router.get("/getById/:id", taskController.getById);
export default router;
