import express from "express";
import { getBooks, createBook, deleteBook } from "../controllers/bookController.mjs";
import { protect, restrictTo } from "../controllers/userController.mjs";


const bookRoutes = express.Router();


bookRoutes.route("/view").get(protect, getBooks);

bookRoutes.route("/create").post(protect, restrictTo("admin"), createBook);

bookRoutes.route("/:id").delete(protect, restrictTo("admin"), deleteBook)




export default bookRoutes;
