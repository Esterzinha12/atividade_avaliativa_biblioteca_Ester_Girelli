const crud = require("../../crud");

async function cadastrarLivros() {
    return await crud.cadastrar("livros");
};

async function buscarLivros() {
    return await crud.buscar("livros");
};

async function buscarLivrosId() {
    return await crud.buscarId("livros");
};

async function deletarEditoras() {
    return await crud.remover("editoras");
};


module.exports= {
    buscarLivros,
    buscarLivrosId,
    cadastrarLivros,
    deletarEditoras
}