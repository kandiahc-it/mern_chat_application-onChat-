import express from 'express';
import {sendMessage,getMessage} from '../controllers/messagecontroller.js';
import protectRoute from '../middleware/protectroute.js';
const router= express.Router();
router.get("/:id",protectRoute,getMessage);
router.post('/send/:id',protectRoute, sendMessage);

export default router;