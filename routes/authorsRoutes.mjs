import express from "express";

import { protect } from "../controllers/userController.mjs";

import { getAuthors } from "../controllers/authorsController.mjs";

const authorsRoutes = express.Router();


authorsRoutes.route("/view").get(protect,getAuthors)

export default authorsRoutes