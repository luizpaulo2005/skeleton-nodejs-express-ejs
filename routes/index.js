var express = require('express');
var router = express.Router();

const Autor = require ("../models/autor");
const Livro = require ("../models/livro");

/* GET home page. */
router.get('/', async function(req, res, next) {
  const autores = await Autor.selecionar();
  res.json(autores.rows);
});

router.get('/livros', async function(req, res, next) {
  const livros = await Livro.selecionarl();
  res.json(livros.rows);
});

router.post('/inserir', async function(req, res, next) {

  const autores = await Autor.inserir(req.body);
  res.json(autores.rows);

});

router.post('/inserirl', async function(req, res, next) {

  const livros = await Livro.inserirl(req.body);
  res.json(livros.rows);

});

router.put('/atualizar', async function(req, res, next) {
  
  const autores = await Autor.atualizar(req.body);
  res.json(autores.rows);
});

router.put('/atualizarl', async function(req, res, next) {
  
  const livros = await Livro.atualizarl(req.body);
  res.json(livros.rows);
});

router.delete('/deletar', async function(req, res, next) {

  const autores = await Autor.deletar(req.body);
  res.json(autores.rows);
});

router.delete('/deletarl', async function(req, res, next) {

  const livros = await Livro.deletar(req.body);
  res.json(livros.rows);
});

module.exports = router;