const express = require("express");
const router = express.Router();
const handllerLivros = require("./livros.handller")


router.get("/", async (req, res) => {
    res.json(await handllerLivros.buscarLivros());
});


module.exports = router;