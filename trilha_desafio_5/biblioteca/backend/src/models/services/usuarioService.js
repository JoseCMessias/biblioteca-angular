import connection from "../config/connection.js";

const postLogin = async (email, senha) => {
  const sql = "SELECT nome FROM usuarios WHERE email = $1 AND senha = $2";
  const result = await connection.query(sql, [email, senha]);
  return result.rows[0];
}

const getUsuarioByEmail = async (email) => {
  const sql = "SELECT * FROM usuarios WHERE email = $1";
  const values = [email];
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
  getUsuarioByEmail,
  postUsuario,
  postLogin
};
