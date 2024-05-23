import Router from "express";

const editoraRouter = Router();

import editoraController from "../controllers/editoraController.js";

editoraRouter.get("/editoras", editoraController.getAllEditora);
editoraRouter.get("/editora/:id", editoraController.getIdEditora);
editoraRouter.post("/editoras", editoraController.postEditora);
editoraRouter.patch("/editora/:id", editoraController.patchEditora);
editoraRouter.delete("/editora/:id", editoraController.deleteEditora);

export default editoraRouter;