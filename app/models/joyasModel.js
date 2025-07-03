const mongoose = require('mongoose');

const joyasSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        length:50
    },
     descripcion: {
        type: String,
        required: true,
        length: 100
    },
    precio: {
        type: Number,
        required: true
    },
    peso:{
        type:Number,
        required:true
    },
    stock:{
        type:Number,
        default:10
    }
})

const JoyasModel = mongoose.model('Joyas', joyasSchema);

module.exports = JoyasModel;