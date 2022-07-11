const express = require('express');
const router = express.Router();
const handllerClientes = require('./clientes.handler');

router.get("/", async (req, res) => {
    res.json(await handllerClientes.buscarClientes());
});


module.exports = router;