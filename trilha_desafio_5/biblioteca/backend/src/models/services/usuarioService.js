import connection from "../config/connection.js";

const getAllUsuario = async () => {
  const sql = "SELECT * FROM usuarios ORDER BY usuario_id ASC";
  const res = await connection.query(sql);
  return res.rows;
};

const getIdUsuario = async (id) => {
  const sql = "SELECT * FROM usuarios WHERE usuario_id=$1";
  const res = await connection.query(sql, [id]);
  return res.rows[0];
};

const getUsuarioByName = async (nome) => {
  const sql = "SELECT * FROM usuarios WHERE nome = $1";
  const values = [nome];
  const result = await connection.query(sql, values);
  return result.rows[0];
};

const getUsuarioByEmail = async (email) => {
  const sql = "SELECT * FROM usuarios WHERE email = $1";
  const values = [email];
  const result = await connection.query(sql, values);
  return result.rows[0];
};

const getUsuarioBySenha = async (senha) => {
  const sql = "SELECT * FROM usuarios WHERE senha = $1";
  const values = [senha];
  const result = await connection.query(sql, values);
  return result.rows[0];
};

const postUsuario = async (usuario) => {
  const sql =
    "INSERT INTO usuarios(nome, email, senha) VALUES (TRIM($1), TRIM($2), TRIM($3))";
  const values = [usuario.nome, usuario.email, usuario.senha];
  await connection.query(sql, values);
};

export default {
  getAllUsuario,
  getIdUsuario,
  getUsuarioByName,
  getUsuarioByEmail,
  getUsuarioBySenha,
  postUsuario,
};
