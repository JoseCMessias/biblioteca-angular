import usuarioService from "../models/services/usuarioService.js";
import isValidDados from "../models/services/validations/validaDados.js";

const getAllUsuario = async (req, res) => {
  try {
    const usuarios = await usuarioService.getAllUsuario();

    if (usuarios.length === 0) {
      return res.status(204).json({ message: "Nenhum usuario encontrado." });
    }

    return res.status(200).json(usuarios);
  } catch (error) {
    console.error("Erro ao tentar buscar todos os usuarios:", error);
    return res
      .status(500)
      .json({ message: "Ocorreu um erro ao buscar os usuarios." });
  }
};

const getIdUsuario = async (req, res) => {
  try {
    const usuario = await usuarioService.getIdUsuario(req.params.id);

    if (!usuario) {
      return res.status(404).json({ message: "Usuário não encontrado." });
    }

    return res.status(200).json(usuario);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Ocorreu um erro ao buscar o usuário." });
  }
};

const getUsuarioByEmail = async (req, res) => {
  try {
    const usuario = await usuarioService.getUsuarioByEmail(req.params.email);

    if (!usuario) {
      return res.status(404).json({ message: "Usuário não encontrado." });
    }

    return res.status(200).json(usuario);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Ocorreu um erro ao buscar o usuário." });
  }
};

const postUsuario = async (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) {
      return res
        .status(400)
        .json({ message: "Os dados do usuário não foram fornecidos." });
    }

    if (!isValidDados.isValidDadosUsuario(req.body)) {
      return res
        .status(400)
        .json({ message: "Os dados do usuário são inválidos." });
    }

    const email = req.body.email.trim();

    const existeUsuario = await usuarioService.getUsuarioByEmail(email);
    if (existeUsuario) {
      return res
        .status(409)
        .json({ message: "Este email já está cadastrado." });
    }

    await usuarioService.postUsuario(req.body);
    return res.status(201).json({ message: "usuario adicionado com sucesso." });
  } catch (error) {
    console.error("Erro ao tentar adicionar usuario:", error);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
};

export default {
  getAllUsuario,
  getIdUsuario,
  getUsuarioByEmail,
  postUsuario,
};
