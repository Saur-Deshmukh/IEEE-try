import express from "express";
import registerParticipant from "../controllers/registerController.js";
const registerRouter = express.Router();
registerRouter.post('/',registerParticipant);
export default registerRouter;