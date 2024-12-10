import express from "express";
import protectRoute from "../middleware/protectroute.js";
import { getUserSidebar } from "../controllers/userscontroller.js";

const router=express.Router();

router.get('/',protectRoute,getUserSidebar);

export default router