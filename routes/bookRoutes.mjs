import express from "express";
import { getBooks, createBook } from "../controllers/bookController.mjs";
import { protect } from "../controllers/userController.mjs";


const bookRoutes = express.Router();


bookRoutes.route("/view").get(protect, getBooks);

bookRoutes.route("/").post(protect, restrictTo("admin"), createBook);




export default bookRoutes;
