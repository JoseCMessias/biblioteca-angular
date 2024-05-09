import autorService from "../models/services/autorService.js";
import isValidDados from "../models/services/validations/validaDados.js";

const getAllAuthor = async (req, res) => {
  try {
    const autores = await autorService.getAllAuthor();

    if (autores.length === 0) {
      return res.status(204).json({ message: "Nenhum autor encontrado." });
    }

    return res.status(200).json(autores);
  } catch (error) {
    console.error("Erro ao tentar buscar todos os autores:", error);
    return res
      .status(500)
      .json({ message: "Ocorreu um erro ao buscar os autores." });
  }
};

const getIdAuthor = async (req, res) => {
  try {
    const autor = await autorService.getIdAuthor(req.params.id);

    if (!autor) {
      return res.status(204).json({ message: "Autor não encontrado." });
    }

    return res.status(200).json(autor);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Ocorreu um erro ao buscar o autor." });
  }
};

const postAuthor = async (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) {
      return res
        .status(400)
        .json({ message: "Os dados do autor não foram fornecidos." });
    }

    if (!isValidDados.isValidDadosAutor(req.body)) {
      return res
        .status(400)
        .json({ message: "Os dados do autor são inválidos." });
    }

    const existeAuthor = await autorService.getAuthorByName(req.body.nome);
    if (existeAuthor) {
      return res
        .status(409)
        .json({ message: "Este autor já está cadastrado." });
    }

    await autorService.postAuthor(req.body);
    return res.status(201).json({ message: "Autor adicionado com sucesso." });
  } catch (error) {
    console.error("Erro ao tentar adicionar autor:", error);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
};

const patchAuthor = async (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) {
      return res
        .status(400)
        .json({ message: "Os dados do autor não foram fornecidos." });
    }

    if (!isValidDados.isValidDadosAutor(req.body)) {
      return res
        .status(400)
        .json({ message: "Os novos dados do autor são inválidos." });
    }

    const existingAuthor = await autorService.getIdAuthor(req.params.id);
    if (!existingAuthor) {
      return res.status(204).json({ message: "Autor não encontrado." });
    }

    await autorService.patchAuthor(req.params.id, req.body);

    return res.status(200).json({ message: "Autor editado com sucesso." });
  } catch (error) {
    console.error("Erro ao tentar atualizar autor:", error);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
};

const deleteAuthor = async (req, res) => {
  try {
    const existeAuthor = await autorService.getIdAuthor(req.params.id);
    if (!existeAuthor) {
      return res.status(204).json({ message: "Autor não encontrado." });
    }

    await autorService.deleteAuthor(req.params.id);
    return res.status(200).json({ message: "Autor deletado com sucesso." });
  } catch (error) {
    console.error("Erro ao tentar excluir autor:", error);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
};

export default {
  getAllAuthor,
  getIdAuthor,
  postAuthor,
  patchAuthor,
  deleteAuthor,
};
