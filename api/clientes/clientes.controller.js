const express = require('express');
const router = express.Router();
const handllerClientes = require('./clientes.handller');

router.post("/", async (req, res) => {
    const cliente= req.body;
    res.json(await handllerClientes.cadastrarClientes(cliente));
});

router.get("/", async (req, res) => {
    res.json(await handllerClientes.buscarClientes());
});

router.get("/:id", async (req, res) => {
    const id =req.params.id;
    res.json(await handllerClientes.buscarClientesId(id));
});

router.delete("/:id", async (req, res) => {
    const id =req.params.id;
    res.json(await handllerClientes.deletarClientes(id));
});



module.exports = router;