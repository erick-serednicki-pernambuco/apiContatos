const { ObjectId } = require("mongodb");
const { find } = require("../models/contatoModel");
const Contato = require("../models/contatoModel");


async  function listar(req,res){
    await contato.find({})
    .then(contatos => {return res.json(contatos)})
    .catch( error => {return res.status(500).json(error)});
        
};


async function consultar(req,res){

    const contato = await Contato.findOne({_id:ObjectId(req.params.id)})
                        .then(localizado => {return localizado});
                        return res.json(contato);

};

async function criar(req,res){

    const contato = new Contato(req.body);
    await contato.save()
    .then(doc =>{ 
        return res.status(201).json(doc).end();
    })
    .catch( error => {
            Object.values(error.erro.entries).forEach(({properties}) =>
            {
                msgErro[properties.path] = properties.message;
            });
            return res.status(422).json(msgErro).end();
        });
};

async function atualizar(req,res){

    await Contato.updateOne({_id:ObjectId(req.params.id)},req.body);
    return res.status(204).end();

};

async function remover(req,res){
    await Contato.deleteOne({_id:ObjectId(req.params.id)});
    return res.status(204).end();  
};

module.exports = {listar, consultar, criar, atualizar, remover};