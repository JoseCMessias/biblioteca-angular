import connection from "../config/connection.js";

const getAllAuthor = async () => {
  const sql = "SELECT * FROM autores ORDER BY autor_id ASC";
  const res = await connection.query(sql);
  return res.rows;
};

const getIdAuthor = async (id) => {
  const sql = "SELECT * FROM autores WHERE autor_id=$1";
  const res = await connection.query(sql, [id]);
  return res.rows[0];
};

const getAuthorByName = async (nome) => {
  const sql = "SELECT * FROM autores WHERE nome = $1";
  const values = [nome];
  const result = await connection.query(sql, values);
  return result.rows[0];
};

const postAuthor = async (author) => {
  const sql = "INSERT INTO autores(nome) VALUES (TRIM($1))";
  const values = [author.nome];
  await connection.query(sql, values);
};

const patchAuthor = async (id, author) => {
  const sql = "UPDATE autores SET nome=TRIM($1) WHERE autor_id=$2";
  const values = [author.nome, id];
  await connection.query(sql, values);
};

const deleteAuthor = async (id) => {
  const sql = "DELETE FROM autores WHERE autor_id=$1";
  await connection.query(sql, [id]);
};

export default {
  getAllAuthor,
  getIdAuthor,
  getAuthorByName,
  postAuthor,
  patchAuthor,
  deleteAuthor,
};
