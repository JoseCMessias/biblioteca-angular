import usuarioService from "../models/services/usuarioService.js";
import isValidDados from "../models/services/validations/validaDados.js";

const postLogin = async (req, res) => {
  try {
    const { email, senha } = req.body;

    if (!email || !senha) {
      return res.status(400).json({ message: "Email e senha são obrigatórios." });
    }

    const usuario = await usuarioService.postLogin(email, senha);

    if (!usuario) {
      return res.status(401).json({ message: "Credenciais inválidas." });
    }

    return res.status(200).json({ message: "Login realizado com sucesso", usuario });
  } catch (error) {
    console.error("Erro ao tentar logar usuario:", error);
    return res.status(500).json({ error: "Erro interno do servidor" });
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
  postUsuario,
  postLogin
};
