const crud = require("../../crud");

async function cadastrarClientes(cliente) {
    return await crud.cadastrar("clientes", undefined, cliente);
};

async function buscarClientes() {
    return await crud.buscar("clientes");
};

async function buscarClientesId(id) {
    return await crud.buscarId("clientes", id);
};

async function deletarClientes(id) {
    return await crud.remover("clientes", id);
};



module.exports= {
    buscarClientes,
    buscarClientesId,
    cadastrarClientes,
    deletarClientes
}