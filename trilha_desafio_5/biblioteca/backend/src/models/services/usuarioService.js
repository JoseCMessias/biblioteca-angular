import pool from "../config/connection.js";

const postLogin = async (email, senha) => {
  try {
    const sql = "SELECT * FROM usuarios WHERE email = $1 AND senha = $2";
    const result = await pool.query(sql, [email, senha]);
    return result.rows[0];
  } catch (error) {
    console.error("Erro ao tentar logar usuário:", error);
    throw error;
  }
};

const getUsuarioByEmail = async (email) => {
  try {
    const sql = "SELECT * FROM usuarios WHERE email = $1";
    const result = await pool.query(sql, [email]);
    return result.rows[0];
  } catch (error) {
    console.error("Erro ao tentar obter usuário por email:", error);
    throw error;
  }
};

const postUsuario = async (usuario) => {
  try {
    const sql = "INSERT INTO usuarios(nome, email, senha) VALUES ($1, $2, $3)";
    const values = [usuario.nome, usuario.email, usuario.senha];
    await pool.query(sql, values);
  } catch (error) {
    console.error("Erro ao tentar adicionar usuário:", error);
    throw error;
  }
};

export default {
  getUsuarioByEmail,
  postUsuario,
  postLogin,
};
