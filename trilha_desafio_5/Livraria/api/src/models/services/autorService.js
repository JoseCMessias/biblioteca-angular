import connection from "../config/connection.js";

const getAllAuthor = async () => {
  const authors = await connection.connect();
  const sql = "SELECT * FROM autores ORDER BY autor_id ASC";
  const res = await authors.query(sql);
  return res.rows;
};

const getIdAuthor = async (id) => {
  const author = await connection.connect();
  const sql = "SELECT * FROM autores WHERE autor_id=$1";
  const res = await author.query(sql, [id]);
  return res.rows[0];
};

const getAuthorByName = async (nome) => {
  const select_author = await connection.connect();
  const sql = "SELECT * FROM autores WHERE nome = $1";
  const values = [nome];
  const result = await select_author.query(sql, values);
  return result.rows[0];
};

const postAuthor = async (author) => {
  const insert_author = await connection.connect();
  const sql = "INSERT INTO autores(nome) VALUES (TRIM($1))";
  const values = [author.nome];
  await insert_author.query(sql, values);
};

const patchAuthor = async (id, author) => {
  const update_author = await connection.connect();
  const sql = "UPDATE autores SET nome=TRIM($1) WHERE autor_id=$2";
  const values = [author.nome, id];
  await update_author.query(sql, values);
};

const deleteAuthor = async (id) => {
  const delete_author = await connection.connect();
  const sql = "DELETE FROM autores WHERE autor_id=$1";
  await delete_author.query(sql, [id]);
};

export default {
  getAllAuthor,
  getIdAuthor,
  getAuthorByName,
  postAuthor,
  patchAuthor,
  deleteAuthor,
};
