import { Router } from "express";
import { userController } from "./user.controller";
import auth from "../../middleware/auth";
import { Roles } from "../auth/auth.constant";

const router = Router();

router.post("/", userController.createUser);
router.get("/", auth(Roles.admin), userController.getAllUser);
router.get("/singleuser", auth(Roles.admin, Roles.customer), userController.getSingleUser);
router.delete("/:id", auth(Roles.admin), userController.deleteUser);
router.put("/:id", auth(Roles.admin), userController.updateUser);


export const userRoute = router;
