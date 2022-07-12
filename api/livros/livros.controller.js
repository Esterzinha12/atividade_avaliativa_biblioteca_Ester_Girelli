const express = require("express");
const router = express.Router();
const handllerLivros = require("./livros.handller")

router.post("/", async (req, res) => {
    res.json(await handllerLivros.cadastrarLivros());
});

router.get("/", async (req, res) => {
    res.json(await handllerLivros.buscarLivros());
});

router.get("/id", async (req, res) => {
    res.json(await handllerLivros.buscarLivrosId());
});

router.delete("/id", async (req, res) => {
    res.json(await handllerLivros.deletarLivros());
});


module.exports = router;