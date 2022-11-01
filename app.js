const express = require('express');

const contatos = require('./routes/contatoRouter');

const app = express();
app.use(express.json()); //vem algo na req JSON req.body
 

app.use('/contatos', contatos);

module.exports = app;

