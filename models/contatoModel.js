const mongoose = require('mongoose');

const contatosSchema = new mongoose.Schema({
        nome:
        {
            type : String,
            required: [true, "Nome é obrigatório"]
        },
        fone:
        {
            type : String,
            required: [true, "Telefone é obrigatório"]
        }

},{
    timestamps: true
});

module.exports = mongoose.model("Contato", contatosSchema);