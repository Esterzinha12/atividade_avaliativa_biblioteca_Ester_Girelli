const express= require("express");
const router = express.Router();


const livros = require("./api/livros/livros.controller");
const autores = require("./api/autores/autores.controller");
const clientes = require("./api/clientes/clientes.controller");
const editoras = require("./api/editoras/editoras.controller");
const locacao = require("./api/locacao/locacao.controller");



router.use("/livros", livros);
router.use("/autores", autores);
router.use("/clientes", clientes);
router.use("/editoras", editoras);
router.use("/locacao", locacao);


module.exports= router;