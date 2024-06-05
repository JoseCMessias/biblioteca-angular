import Router from "express";
import autorController from "../controllers/autorController.js";
import editoraController from "../controllers/editoraController.js";
import livroController from "../controllers/livroController.js";
import listarTodosController from "../controllers/listarTodosController.js";
import usuariosController from "../controllers/usuariosController.js";

const router = Router();

router.route("/").get(listarTodosController.getByAll);

router
  .route("/autores")
  .get(autorController.getAllAuthor)
  .post(autorController.postAuthor);
router
  .route("/autores/:id")
  .get(autorController.getIdAuthor)
  .patch(autorController.patchAuthor)
  .delete(autorController.deleteAuthor);

router
  .route("/editoras")
  .get(editoraController.getAllEditora)
  .post(editoraController.postEditora);
router
  .route("/editoras/:id")
  .get(editoraController.getIdEditora)
  .patch(editoraController.patchEditora)
  .delete(editoraController.deleteEditora);

router
  .route("/livros")
  .get(livroController.getAllLivro)
  .post(livroController.postLivro);
router
  .route("/livros/:id")
  .get(livroController.getIdLivro)
  .patch(livroController.patchLivro)
  .delete(livroController.deleteLivro);

router
  .route("/usuarios")
  .post(usuariosController.postUsuario);
router
  .route('/usuarios/login')
  .post(usuariosController.postLogin);


export default router;
