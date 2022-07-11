const crud = require("../../crud");

async function buscarEditoras() {
    return await crud.buscar("editoras");
};


module.exports= {
    buscarEditoras
}