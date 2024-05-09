import livroService from "../models/services/livroService.js";
import isValidDados from "../models/services/validations/validaDados.js";

const getAllLivro = async (req, res) => {
  try {
    const livros = await livroService.getAllLivro();

    if (livros.length === 0) {
      return res.status(204).json({ message: "Nenhum livro encontrado." });
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
      return res.status(204).json({ message: "Livro não encontrado." });
    }
    return res.status(200).json(livro);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Ocorreu um erro ao buscar o livro." });
  }
};

const postLivro = async (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) {
      return res
        .status(400)
        .json({ message: "Os dados do livro não foram fornecidos." });
    }

    if (!isValidDados.isValidDadosLivros(req.body)) {
      return res
        .status(400)
        .json({ message: "Os dados do livro são inválidos." });
    }

    const existeLivro = await livroService.getLivroByTitulo(
      req.body.titulo.trim()
    );
    if (existeLivro) {
      return res
        .status(409)
        .json({ message: "Este livro já está cadastrada." });
    }

    await livroService.postLivro(req.body);

    return res.status(201).json({ message: "Livro adicionado com sucesso." });
  } catch (error) {
    console.error("Erro ao tentar adicionar livro:", error);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
};

const patchLivro = async (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) {
      return res
        .status(400)
        .json({ message: "Os dados da livro não foram fornecidos." });
    }

    if (!isValidDados.isValidDadosLivros(req.body)) {
      return res
        .status(400)
        .json({ message: "Os novos dados do livro são inválidos." });
    }

    const existeLivro = await livroService.getIdLivro(req.params.id);
    if (!existeLivro) {
      return res.status(204).json({ message: "Livro não encontrado." });
    }

    await livroService.patchLivro(req.params.id, req.body);

    return res.status(200).json({ message: "Livro editado com sucesso." });
  } catch (error) {
    console.error("Erro ao tentar atualizar livro:", error);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
};

const deleteLivro = async (req, res) => {
  try {
    const existeLivro = await livroService.getIdLivro(req.params.id);
    if (!existeLivro) {
      return res.status(204).json({ message: "Livro não encontrado." });
    }

    await livroService.deleteLivro(req.params.id);
    return res.status(200).json({ message: "Livro deletado com sucesso." });
  } catch (error) {
    console.error("Erro ao tentar excluir livro:", error);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
};

export default {
  getAllLivro,
  getIdLivro,
  postLivro,
  patchLivro,
  deleteLivro,
};
