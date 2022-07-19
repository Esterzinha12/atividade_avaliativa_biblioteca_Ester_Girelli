const crud = require("../../crud");


async function locar(locacao, idCliente) {
    if(crud.buscarId("locacao", idCliente)=idCliente){
        return false;
    }else{
        return await crud.cadastrar("locacao", undefined, locacao);
    }
};

async function buscarLocacoes() {
    return await crud.buscar("locacao");
};

async function deletarLocacao(id) {
    return await crud.remover("locacao", id);
};

module.exports= {
    buscarLocacoes,
    locar,
    deletarLocacao
}
