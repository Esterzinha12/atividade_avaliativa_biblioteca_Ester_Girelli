const crud = require("../../crud");

async function cadastrarLivros(livro) {
    return await crud.cadastrar("livros", undefined, livro);
};

async function buscarLivros() {
    return await crud.buscar("livros");
};

async function buscarLivrosId(id) {
    return await crud.buscarId("livros", id);
};

async function deletarLivros(id) {
    return await crud.remover("livros", id);
};


module.exports= {
    buscarLivros,
    buscarLivrosId,
    cadastrarLivros,
    deletarLivros
}