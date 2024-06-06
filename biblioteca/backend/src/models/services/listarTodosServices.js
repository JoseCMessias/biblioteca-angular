import connection from "../config/connection.js";

const getByAll = async () => {
  const sql = `
    SELECT livros.titulo AS "Livro",
           autores.nome AS "Autor",
           editoras.nome AS "Editora"
    FROM livros
    JOIN autores ON livros.autor_id_fk = autores.autor_id
    JOIN editoras ON livros.editora_id_fk = editoras.editora_id
    ORDER BY livros.titulo ASC;
  `;
  const res = await connection.query(sql);
  return res.rows;
};

export default {
  getByAll,
};
