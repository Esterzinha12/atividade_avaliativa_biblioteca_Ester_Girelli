const express = require('express');
const router = express.Router();
const handllerEditoras = require('./editoras.handller');

router.post("/", async (req, res) => {
    const editora= req.body;
    res.json(await handllerEditoras.cadastrarEditoras(editora));
});

router.get("/", async (req, res) => {
    res.json(await handllerEditoras.buscarEditoras());
});

router.get("/:id", async (req, res) => {
    const id =req.params.id;
    res.json(await handllerEditoras.buscarEditorasId(id));
});

router.delete("/:id", async (req, res) => {
    const id =req.params.id;
    res.json(await handllerEditoras.deletarEditoras(id));
});

module.exports = router;