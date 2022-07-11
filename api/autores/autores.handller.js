const crud = require("../../crud");

async function buscarAutores() {
    return await crud.buscar("autores");
};


module.exports= {
    buscarAutores
}