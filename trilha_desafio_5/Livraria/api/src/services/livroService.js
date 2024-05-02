import connection from "../config/connection.js";

const getAllLivro = async () => {
  const livro = await connection.connect();
  const sql = "SELECT * FROM livros";
  const res = await livro.query(sql);
  return res.rows;
};

const getIdLivro = async (id) => {
  const livro = await connection.connect();
  const sql = "SELECT * FROM livros WHERE livro_id=$1";
  const res = await livro.query(sql, [id]);
  return res.rows;
};

const postLivro = async (livro) => {
  const insert_livro = await connection.connect();
  const sql =
    "INSERT INTO livros(titulo, autor_id_fk, editora_id_fk, ano_publicado) VALUES ($1, $2, $3, $4)";
  const values = [
    livro.titulo,
    livro.autor_id_fk,
    livro.editora_id_fk,
    livro.ano_publicado,
  ];
  await insert_livro.query(sql, values);
};

const patchLivro = async (id, livro) => {
  const update_livro = await connection.connect();
  const sql =
    "UPDATE livros SET titulo=$1, autor_id_fk=$2, editora_id_fk=$3, ano_publicado=$4 WHERE livro_id=$3";
  const values = [
    livro.titulo,
    livro.autor_id_fk,
    livro.editora_id_fk,
    livro.ano_publicado,
  ];
  await update_livro.query(sql, values);
};

const deleteLivro = async (id) => {
  const delete_livro = await connection.connect();
  const sql = "DELETE FROM livros WHERE livro_id=$1";
  await delete_livro.query(sql, [id]);
};

export default {
  getAllLivro,
  getIdLivro,
  postLivro,
  patchLivro,
  deleteLivro,
};
