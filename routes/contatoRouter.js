const express = require('express');

const router = express.Router();

const controlador = require('../controllers/contatosController');

router.get('/',controlador.listar);

router.get('/:id',controlador.consultar);

router.post('/',controlador.criar);

router.put('/:id',controlador.atualizar);

router.delete('/:id',controlador.remover);

module.exports = router;