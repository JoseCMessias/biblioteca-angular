import connection from "../config/connection.js";

const getAllLivro = async () => {
  const sql = "SELECT * FROM livros ORDER BY livro_id ASC";
  const res = await connection.query(sql);
  return res.rows;
};

const getIdLivro = async (id) => {
  const sql = "SELECT * FROM livros WHERE livro_id=$1";
  const res = await connection.query(sql, [id]);
  return res.rows[0];
};

const getLivroByTitulo = async (nome) => {
  const sql = "SELECT * FROM livros WHERE titulo = $1";
  const result = await connection.query(sql, [nome]);
  return result.rows[0];
};

const postLivro = async (livro) => {
  const sql =
    "INSERT INTO livros(titulo, autor_id_fk, editora_id_fk, ano_publicado) VALUES (TRIM($1), $2, $3, $4)";
  const values = [
    livro.titulo,
    livro.autor_id_fk,
    livro.editora_id_fk,
    livro.ano_publicado,
  ];
  await connection.query(sql, values);
};

const patchLivro = async (id, livro) => {
  const sql =
    "UPDATE livros SET titulo=TRIM($1), autor_id_fk=$2, editora_id_fk=$3, ano_publicado=$4 WHERE livro_id=$5";
  const values = [
    livro.titulo,
    livro.autor_id_fk,
    livro.editora_id_fk,
    livro.ano_publicado,
    id,
  ];
  connection.query(sql, values);
};

const deleteLivro = async (id) => {
  const sql = "DELETE FROM livros WHERE livro_id=$1";
  connection.query(sql, [id]);
};

export default {
  getAllLivro,
  getIdLivro,
  getLivroByTitulo,
  postLivro,
  patchLivro,
  deleteLivro,
};
