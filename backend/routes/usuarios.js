import express from "express";
import { addUser, deleteUser, getUsers , updateUser} from "../controllers/usuarios.js";

const router = express.Router(); //indicando a rota 

router.get("/", getUsers); // puxar dados do db

router.post("/", addUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

export default router;