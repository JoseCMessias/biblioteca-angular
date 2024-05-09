import Router from "express";

const autorRouter = Router();

import autorController from "../controllers/autorController.js";

autorRouter.get("/autores", autorController.getAllAuthor);
autorRouter.get("/autor/:id", autorController.getIdAuthor);
autorRouter.post("/autores", autorController.postAuthor);
autorRouter.patch("/autor/:id", autorController.patchAuthor);
autorRouter.delete("/autor/:id", autorController.deleteAuthor);

export default autorRouter;