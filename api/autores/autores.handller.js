const crud = require("../../crud");

async function cadastrarAutores() {
    return await crud.cadastrar("autores");
};

async function buscarAutores() {
    return await crud.buscar("autores");
};

async function buscarAutoresId() {
    return await crud.buscarId("autores");
};

async function deletarAutores() {
    return await crud.remover("autores");
};


module.exports= {
    buscarAutores,
    buscarAutoresId,
    cadastrarAutores,
    deletarAutores
}