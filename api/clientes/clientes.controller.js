const express = require('express');
const router = express.Router();
const handllerClientes = require('./clientes.handller');

router.post("/", async (req, res) => {
    res.json(await handllerClientes.cadastrarClientes());
});

router.get("/", async (req, res) => {
    res.json(await handllerClientes.buscarClientes());
});

router.get("/id", async (req, res) => {
    res.json(await handllerClientes.buscarClientesId());
});

router.delete("/id", async (req, res) => {
    res.json(await handllerClientes.deletarClientes());
});



module.exports = router;