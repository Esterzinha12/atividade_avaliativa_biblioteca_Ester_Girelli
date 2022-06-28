const express= require("express");
const router = express.Router();


const livros = require("./api/livros/livros.controller");


router.use("/livros", livros);

module.exports= router;