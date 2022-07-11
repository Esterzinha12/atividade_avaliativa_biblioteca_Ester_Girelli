const crud = require("../../crud");

async function buscarLivros() {
    return await crud.buscar("livros");
};


module.exports= {
    buscarLivros
}