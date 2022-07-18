const crud = require("../../crud");

async function cadastrarAutores(autor) {
    return await crud.cadastrar("autores", undefined, autor);
};

async function buscarAutores() {
    return await crud.buscar("autores");
};

async function buscarAutoresId(id) {
    return await crud.buscarId("autores", id);
};

async function deletarAutores(id) {
    return await crud.remover("autores", id);
};


module.exports= {
    buscarAutores,
    buscarAutoresId,
    cadastrarAutores,
    deletarAutores
}