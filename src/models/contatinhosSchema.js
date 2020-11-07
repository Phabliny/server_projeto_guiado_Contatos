const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ContatinhosSchema = new Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    nome: {
        type: String,
        required:
    },
    celular:{
        
    }
})