import Router from "express";

const router = Router();

import autorController from "../controllers/autorController.js";
import editoraController from "../controllers/editoraController.js";
import livroController from "../controllers/livroController.js";

router.get("/", (req, res) => {
  res.json({
    message: "Servidor rodando...",
  });
});

router.get("/autores", autorController.getAllAuthor);
router.get("/autore/:id", autorController.getIdAuthor);
router.post("/autores", autorController.postAuthor);
router.patch("/autore/:id", autorController.patchAuthor);
router.delete("/autore/:id", autorController.deleteAuthor);

router.get("/editoras", editoraController.getAllEditora);
router.get("/editora/:id", editoraController.getIdEditora);
router.post("/editoras", editoraController.postEditora);
router.patch("/editora/:id", editoraController.patchEditora);
router.delete("/editora/:id", editoraController.deleteEditora);

router.get("/livros", livroController.getAllLivro);
router.get("/livro/:id", livroController.getIdLivro);
router.post("/livros", livroController.postLivro);
router.patch("/livro/:id", livroController.patchLivro);
router.delete("/livro/:id", livroController.deleteLivro);

export default router;
