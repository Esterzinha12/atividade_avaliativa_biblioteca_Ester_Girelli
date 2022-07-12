const crud = require("../../crud");

async function cadastrarEditoras() {
    return await crud.cadastrar("editoras");
};

async function buscarEditoras() {
    return await crud.buscar("editoras");
};

async function buscarEditorasId() {
    return await crud.buscarId("editoras");
};

async function deletarEditoras() {
    return await crud.remover("editoras");
};


module.exports= {
    buscarEditoras,
    buscarEditorasId,
    cadastrarEditoras,
    deletarEditoras
}