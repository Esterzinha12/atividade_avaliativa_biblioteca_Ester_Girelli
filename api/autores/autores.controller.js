const express = require("express");
const router = express.Router();
const handllerAutores = require("./autores.handller")


router.get("/", async (req, res) => {
    res.json(await handllerAutores.buscarAutores());
});


module.exports = router;