const express = require("express");
const router = express.Router();
const handllerLivros = require("./livros.handller")

router.post("/", async (req, res) => {
    const livro= req.body;
    res.json(await handllerLivros.cadastrarLivros(livro));
});

router.get("/", async (req, res) => {
    res.json(await handllerLivros.buscarLivros());
});

router.get("/:id", async (req, res) => {
    const id =req.params.id;
    res.json(await handllerLivros.buscarLivrosId(id));
});

router.delete("/:id", async (req, res) => {
    const id =req.params.id;
    res.json(await handllerLivros.deletarLivros(id));
});


module.exports = router;