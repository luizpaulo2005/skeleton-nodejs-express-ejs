var express = require('express');
var router = express.Router();

const Autor = require ("../models/autor");

/* GET home page. */
router.get('/', async function(req, res, next) {
  const autores = await Autor.selecionar();
  res.json(autores.rows);
});

router.get('/inserir', async function(req, res, next) {

  const autor = {
    nome: "Marcelo",
    sobrenome: "Dominador",
    datanasc: "2000/01/01"
  }
  const autores = await Autor.inserir(autor);
  res.json(autores.rows);
});

router.get('/atualizar', async function(req, res, next) {

    const autor = {
      nome: "Pedrao",
      sobrenome: "Rei delas",
      datanasc: "2000/01/02",
      id: "1"
    }
  
  const autores = await Autor.atualizar(autor);
  res.json(autores.rows);
});

router.get('/deletar', async function(req, res, next) {

  const autor = {
    id: "1"
  }
  
  const autores = await Autor.deletar(autor);
  res.json(autores.rows);
});


module.exports = router;
