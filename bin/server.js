const  app  = require("../app");
const mongoose = require('mongoose');

const url = 'mongodb+srv://erick:EL8eVsdcDSPh3jFo@cluster0.pqkdvwv.mongodb.net/contatos?retryWrites=true&w=majority';


mongoose.connect(url)
.then(
app.listen(3000, ()=>{
    console.log("Api esta ON na porta 3000!");
}))
.catch(error => console.log("inoperante", error));