const crud = require("../../crud");

async function cadastrarEditoras(editora) {
    return await crud.cadastrar("editoras",undefined, editora);
};

async function buscarEditoras() {
    return await crud.buscar("editoras");
};

async function buscarEditorasId(id) {
    return await crud.buscarId("editoras", id);
};

async function deletarEditoras(id) {
    return await crud.remover("editoras", id);
};


module.exports= {
    buscarEditoras,
    buscarEditorasId,
    cadastrarEditoras,
    deletarEditoras
}