import express from "express";
import { getBooks } from "../controllers/bookController.mjs";


const bookRoutes = express.Router();


bookRoutes.route("/view").get(getBooks);



export default bookRoutes;
