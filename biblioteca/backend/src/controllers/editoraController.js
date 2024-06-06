import editoraService from "../models/services/editoraService.js";
import isValidDados from "../models/services/validations/validaDados.js";

const getAllEditora = async (req, res) => {
  try {
    const editoras = await editoraService.getAllEditora();

    if (editoras.length === 0) {
      return res.status(204).json({ message: "Nenhuma editora encontrada." });
    }

    return res.status(200).json(editoras);
  } catch (error) {
    console.error("Erro ao tentar buscar todas as editoras:", error);
    return res
      .status(500)
      .json({ message: "Ocorreu um erro ao buscar as editoras." });
  }
};

const getIdEditora = async (req, res) => {
  try {
    const editora = await editoraService.getIdEditora(req.params.id);

    if (!editora) {
      return res.status(204).json({ message: "Editora não encontrada." });
    }
    
    return res.status(200).json(editora);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Ocorreu um erro ao buscar a editora." });
  }
};

const postEditora = async (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) {
      return res
        .status(400)
        .json({ message: "Os dados da editora não foram fornecidos." });
    }

    if (!isValidDados.isValidDadosEditora(req.body)) {
      return res
        .status(400)
        .json({ message: "Os dados da editora são inválidos." });
    }

    const nome = req.body.nome.trim();

    const existeEditora = await editoraService.getEditoraByName(nome);
    if (existeEditora) {
      return res
        .status(409)
        .json({ message: "Esta editora já está cadastrada." });
    }

    await editoraService.postEditora(req.body);

    return res.status(201).json({ message: "Editara adicionada com sucesso." });
  } catch (error) {
    console.error("Erro ao tentar adicionar editora:", error);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
};

const patchEditora = async (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) {
      return res
        .status(400)
        .json({ message: "Os dados da editora não foram fornecidos." });
    }

    if (!isValidDados.isValidDadosEditora(req.body)) {
      return res
        .status(400)
        .json({ message: "Os novos dados da editora são inválidos." });
    }

    const existeEditora = await editoraService.getIdEditora(req.params.id);
    if (!existeEditora) {
      return res.status(204).json({ message: "Editora não encontrada." });
    }

    await editoraService.patchEditora(req.params.id, req.body);
    return res.status(200).json({ message: "Editora editada com sucesso." });

  } catch (error) {
    console.error("Erro ao tentar atualizar editora:", error);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
};

const deleteEditora = async (req, res) => {
  try {
    const existeEditora = await editoraService.getIdEditora(req.params.id);
    if (!existeEditora) {
      return res.status(204).json({ message: "Editora não encontrada." });
    }

    await editoraService.deleteEditora(req.params.id);
    return res.status(200).json({ message: "Editora deletada com sucesso." });
  } catch (error) {
    console.error("Erro ao tentar excluir editora:", error);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
};

export default {
  getAllEditora,
  getIdEditora,
  postEditora,
  patchEditora,
  deleteEditora,
};
