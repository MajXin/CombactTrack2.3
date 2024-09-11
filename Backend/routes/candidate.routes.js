import express from "express";
import { registercandidate, logincandidate , hello} from "../controllers/candidate.controller.js";
import isauthenticated from "../middlewares/isauthenticated_candidate.js"
const candidaterouter = express.Router();

candidaterouter.post("/register", registercandidate);
candidaterouter.post("/login", logincandidate);
candidaterouter.get("/hh",isauthenticated,hello);
export default candidaterouter;