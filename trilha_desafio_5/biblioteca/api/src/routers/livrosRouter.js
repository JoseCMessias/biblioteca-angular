import Router from "express";

const livrosRouter = Router();

import livroController from "../controllers/livroController.js";

livrosRouter.get("/livros", livroController.getAllLivro);
livrosRouter.get("/livro/:id", livroController.getIdLivro);
livrosRouter.post("/livros", livroController.postLivro);
livrosRouter.patch("/livro/:id", livroController.patchLivro);
livrosRouter.delete("/livro/:id", livroController.deleteLivro);

export default livrosRouter;
