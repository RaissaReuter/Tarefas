import { Router } from "express";
import taskController from "../controller/taskController.js";

const router = Router();

router.get("/home", (req, res, next) => {
  try {
    taskController.getAll(req, res);
  } catch (error) {
    next(error);
  }
});

export default router;