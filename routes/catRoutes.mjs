import express from "express";

import { protect, restrictTo } from "../controllers/userController.mjs";
import { getCats, createCat } from "../controllers/catController.mjs";


const catRouts = express.Router();


catRouts.route("/view").get(protect, getCats)
catRouts.route("/create").post(protect, restrictTo("admin"), createCat)


export default catRouts