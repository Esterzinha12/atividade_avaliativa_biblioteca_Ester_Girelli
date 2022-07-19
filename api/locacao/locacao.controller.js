const express = require("express");
const router = express.Router();
const handllerLocacao = require("./locacao.handller");


router.post("/", async (req, res) => {
    const locacao= req.body;
    const idCliente= locacao.idCliente;
    res.json(await handllerLocacao.locar(locacao, idCliente));
});

router.get("/", async (req, res) => {
    res.json(await handllerLocacao.buscarLocacoes());
});

router.delete("/:id", async (req, res) => {
    const id =req.params.id;
    res.json(await handllerLocacao.deletarLocacao(id));
});

module.exports = router;
