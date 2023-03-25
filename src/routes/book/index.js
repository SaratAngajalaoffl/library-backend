import { Router } from "express";
import { verifyAdmin, verifyJWT } from "../../utils/jwt.utils";
import {
    addBook,
    deleteBookById,
    getBookById,
    getBooks,
    updateBookById,
} from "./book.handlers";

const bookRouter = Router();

bookRouter.get("/", verifyJWT, getBooks);
bookRouter.post("/", verifyJWT, verifyAdmin, addBook);
bookRouter.get("/:bookId", verifyJWT, getBookById);
bookRouter.post("/:bookId", verifyJWT, verifyAdmin, updateBookById);
bookRouter.delete("/:bookId", verifyJWT, verifyAdmin, deleteBookById);

export default bookRouter;
