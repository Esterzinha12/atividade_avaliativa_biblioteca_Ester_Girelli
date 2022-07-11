const express = require('express');
const router = express.Router();
const handlerEditoras = require('./editoras.handler');

router.get("/", async (req, res) => {
    res.json(await handllerEditoras.buscarEditoras());
});


module.exports = router;