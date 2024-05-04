import connection from "../config/connection.js";

const getAllEditora = async () => {
  const editora = await connection.connect();
  const sql = "SELECT * FROM editoras ORDER BY editora_id ASC";
  const res = await editora.query(sql);
  return res.rows;
};

const getIdEditora = async (id) => {
  const editora = await connection.connect();
  const sql = "SELECT * FROM editoras WHERE editora_id=$1";
  const res = await editora.query(sql, [id]);
  return res.rows[0];
};

const getEditoraByName = async (nome) => {
  const editora = await connection.connect();
  const sql = "SELECT * FROM editoras WHERE nome = $1";
  const values = [nome];
  const result = await editora.query(sql, values);
  return result.rows[0];
};

const postEditora = async (editora) => {
  const insert_editora = await connection.connect();
  const sql =
    "INSERT INTO editoras(nome, localizacao) VALUES (TRIM($1), TRIM($2))";
  const values = [editora.nome, editora.localizacao];
  await insert_editora.query(sql, values);
};

const patchEditora = async (id, editora) => {
  const update_editora = await connection.connect();
  const sql =
    "UPDATE editoras SET nome=TRIM($1), localizacao=TRIM($2) WHERE editora_id=$3";
  const values = [editora.nome, editora.localizacao, id];
  await update_editora.query(sql, values);
};

const deleteEditora = async (id) => {
  const delete_editora = await connection.connect();
  const sql = "DELETE FROM editoras WHERE editora_id=$1";
  await delete_editora.query(sql, [id]);
};

export default {
  getAllEditora,
  getIdEditora,
  getEditoraByName,
  postEditora,
  patchEditora,
  deleteEditora,
};
