import getListarTodos from "../models/services/listarTodosServices.js";

const getByAll = async (req, res) => {
  try {
    const listarTodos = await getListarTodos.getByAll();

    if (listarTodos.length === 0) {
      return res.status(204).json({ message: "Nenhum autor encontrado." });
    }

    return res.status(200).json(listarTodos);
  } catch (error) {
    console.error("Erro ao tentar buscar todos os relatórios:", error);
    return res
      .status(500)
      .json({ message: "Ocorreu um erro ao buscar relatórios." });
  }
};

export default {
  getByAll,
};
