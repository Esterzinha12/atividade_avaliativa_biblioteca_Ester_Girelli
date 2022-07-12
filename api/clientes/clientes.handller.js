const crud = require("../../crud");

async function cadastrarClientes() {
    return await crud.cadastrar("clientes");
};

async function buscarClientes() {
    return await crud.buscar("clientes");
};

async function buscarClientesId() {
    return await crud.buscarId("clientes");
};

async function deletarClientes() {
    return await crud.remover("clientes");
};



module.exports= {
    buscarClientes,
    buscarClientesId,
    cadastrarClientes,
    deletarClientes
}