const { ObjectId } = require("mongodb");
const Contato = require("../models/contatoModel");


async  function listar(req,res){
    await contato.find({})
    .then(contatos => {return res.json(contatos)})
    .catch( error => {return res.status(500).json(error)});
        
};


async function consultar(req,res){

    await contato.find({_id: ObjectId(req.params.id)})
    .then(contato => {
        if(contato){return res.json(contato)}
        else {return res.status(404).json('Contato não localizado')};
    })
    .catch( error => {return res.status(500).json(error)});

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

    await Contato.findOneAndUpdate({_id:ObjectId(req.params.id)},req.body)
    .then(contato => {
        if(contato) {return res.status(204).end()}
        else{ return res.status(404).json("Contato não localizado")};
    })
    .catch(error => {return res.status(500).json(error);});

};

async function remover(req,res){
    await Contato.findOneDeletOne({_id:ObjectId(req.params.id)})
    .then(contato => {
        if(contato) {return res.status(204).end()}
        else{ return res.status(404).json("Contato não localizado")};
    })
    .catch(error => {return res.status(500).json(error);});
};

module.exports = {listar, consultar, criar, atualizar, remover};