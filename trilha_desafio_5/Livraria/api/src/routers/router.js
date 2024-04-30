import Router from "express";
import autorController from "../controllers/autorController.js";
import editoraController from "../controllers/editoraController.js";
import livroController from "../controllers/livroController.js";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    message: "Servidor rodando...",
  });
});

router
  .route("/autores")
  .get(autorController.getAllAuthor)
  .post(autorController.postAuthor);

router
  .route("/autor/:id")
  .get(autorController.getIdAuthor)
  .patch(autorController.patchAuthor)
  .delete(autorController.deleteAuthor);

router
  .route("/editoras")
  .get(editoraController.getAllEditora)
  .post(editoraController.postEditora);

router
  .route("/editora/:id")
  .get(editoraController.getIdEditora)
  .patch(editoraController.patchEditora)
  .delete(editoraController.deleteEditora);

router
  .route("/livros")
  .get(livroController.getAllLivro)
  .post(livroController.postLivro);

router
  .route("/livro/:id")
  .get(livroController.getIdLivro)
  .patch(livroController.patchLivro)
  .delete(livroController.deleteLivro);

export default router;
