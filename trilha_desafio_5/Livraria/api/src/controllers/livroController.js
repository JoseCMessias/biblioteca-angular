import livroService from "../services/livroService.js";

const getAllLivro = async (req, res) => {
  try {
    const livros = await livroService.getAllLivro();

    if (livros.length === 0) {
      return res.status(404).json({ message: "Nenhum livro encontrado." });
    }

    return res.status(200).json(livros);
  } catch (error) {
    console.error("Erro ao tentar buscar todos os livros:", error);
    return res
      .status(500)
      .json({ message: "Ocorreu um erro ao buscar os livros." });
  }
};

const getIdLivro = async (req, res) => {
  try {
    const livro = await livroService.getIdLivro(req.params.id);

    if (!livro) {
      return res.status(404).json({ message: "Livro não encontrado." });
    }
    return res.status(200).json(livro);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Ocorreu um erro ao buscar o livro." });
  }
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
