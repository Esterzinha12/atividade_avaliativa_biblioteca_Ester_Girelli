const crud = require("../../crud");

async function buscarClientes() {
    return await crud.buscar("clientes");
};


module.exports= {
    buscarClientes
}