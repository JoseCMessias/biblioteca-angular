const connection = require('../config/connection');

const getAllEditora = async () => {
    const editora = await connection.connect();
    const sql = "SELECT * FROM editoras";
    const res = await editora.query(sql);
    return res.rows;
}

const getIdEditora = async (id) => {
    const editora = await connection.connect();
    const sql = "SELECT * FROM editoras WHERE editora_id=$1";
    const res = await editora.query(sql, [id]);
    return res.rows;
}

const postEditora = async (editora) => {
    const insert_editora = await connection.connect();
    const sql = "INSERT INTO editoras(nome, localizacao) VALUES ($1, $2)";
    const values = [editora.nome, editora.localizacao];
    await insert_editora.query(sql, values);
}

const patchEditora = async (id, editora) => {
    const update_editora = await connection.connect();
    const sql = "UPDATE editoras SET nome=$1, localizacao=$2 WHERE editora_id=$3";
    const values = [editora.nome, editora.localizacao, id];
    await update_editora.query(sql, values);
}

const deleteEditora = async (id) => {
    const delete_editora = await connection.connect();
    const sql = "DELETE FROM editoras WHERE editora_id=$1";
    await delete_editora.query(sql, [id]);
}

module.exports = {
    getAllEditora,
    getIdEditora,
    postEditora,
    patchEditora,
    deleteEditora
}
