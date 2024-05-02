import livroService from "../services/livroService.js";

const getAllLivro = async (req, res) => {
  const livro = await livroService.getAllLivro();
  return res.status(200).json(livro);
};

const getIdLivro = async (req, res) => {
  const livro = await livroService.getIdLivro(req.params.id);
  return res.json(livro);
};

const postLivro = async (req, res) => {
  await livroService.postLivro(req.body);
  return res.sendStatus(201);
};

const patchLivro = async (req, res) => {
  await livroService.patchLivro(req.params.id, req.body);
  return res.sendStatus(200);
};

const deleteLivro = async (req, res) => {
  await livroService.deleteLivro(req.params.id);
  return res.sendStatus(204);
};

export default {
  getAllLivro,
  getIdLivro,
  postLivro,
  patchLivro,
  deleteLivro,
};
