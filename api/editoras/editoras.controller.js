const express = require('express');
const router = express.Router();
const handllerEditoras = require('./editoras.handller');

router.post("/", async (req, res) => {
    res.json(await handllerEditoras.cadastrarEditoras());
});

router.get("/", async (req, res) => {
    res.json(await handllerEditoras.buscarEditoras());
});

router.get("/id", async (req, res) => {
    res.json(await handllerEditoras.buscarEditorasId());
});

router.delete("/id", async (req, res) => {
    res.json(await handllerEditoras.deletarEditoras());
});

module.exports = router;