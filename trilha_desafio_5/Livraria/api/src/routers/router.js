const express = require("express");

const router = express.Router();

const autorController = require("../controllers/autorController");
const editoraController = require("../controllers/editoraController");
const livroController = require("../controllers/livroController");

router.get("/", (req, res) => {
  res.json({
    message: "Aaah muleque...",
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

module.exports = router;
