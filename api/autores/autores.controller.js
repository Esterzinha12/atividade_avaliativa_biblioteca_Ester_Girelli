const express = require("express");
const router = express.Router();
const handllerAutores = require("./autores.handller")

router.post("/", async (req, res) => {
    const autor= req.body;
    res.json(await handllerAutores.cadastrarAutores(autor));
});

router.get("/", async (req, res) => {
    res.json(await handllerAutores.buscarAutores());
});

router.get("/:id", async (req, res) => {
    const id =req.params.id;
    res.json(await handllerAutores.buscarAutoresId(id));
});

router.delete("/:id", async (req, res) => {
    const id =req.params.id;
    res.json(await handllerAutores.deletarAutores(id));
});

module.exports = router;