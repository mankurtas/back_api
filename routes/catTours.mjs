import express from "express";

import { protect } from "../controllers/userController.mjs";


const catRouts = express.Router();


catRouts.route("/view").get(protect, getCats)

export default catRouts