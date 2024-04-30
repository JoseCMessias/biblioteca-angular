
import editoraService from '../services/editoraService.js';

const getAllEditora = async (req, res) => {
    const editoras = await editoraService.getAllEditora();
    return res.status(200).json(editoras);
}

const getIdEditora = async (req, res) => {
    const editorass = await editoraService.getIdEditora(req.params.id);
    return res.json(editorass);
}

const postEditora = async (req, res) => {
    await editoraService.postEditora(req.body);
    return res.sendStatus(201);
}

const patchEditora = async (req, res) => {
    await editoraService.patchEditora(req.params.id, req.body);
    return res.sendStatus(200);
}

const deleteEditora = async (req, res) => {
    await editoraService.deleteEditora(req.params.id);
    return res.sendStatus(204);
}

export default {
    getAllEditora,
    getIdEditora,
    postEditora,
    patchEditora,
    deleteEditora
}