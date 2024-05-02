import autorService from "../services/autorService.js";

const getAllAuthor = async (req, res) => {
  const autore = await autorService.getAllAuthor();
  return res.status(200).json(autore);
};

const getIdAuthor = async (req, res) => {
  const autores = await autorService.getIdAuthor(req.params.id);
  return res.json(autores);
};

const postAuthor = async (req, res) => {
  await autorService.postAuthor(req.body);
  return res.sendStatus(201);
};

const patchAuthor = async (req, res) => {
  await autorService.patchAuthor(req.params.id, req.body);
  return res.sendStatus(200);
};

const deleteAuthor = async (req, res) => {
  await autorService.deleteAuthor(req.params.id);
  return res.sendStatus(204);
};

export default {
  getAllAuthor,
  getIdAuthor,
  postAuthor,
  patchAuthor,
  deleteAuthor,
};
