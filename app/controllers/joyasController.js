const joyasModel = require('../models/joyasModel');

function buscarTodo(req, res) {
    joyasModel.find({})
    .then(joyas => {
        if(joyas,length){
            return res.statatus(200).send({joyas})
        }
        return res.status(204).send({mensaje:"no hay nada que mostrar"})
    })
    .catch(e =>{ return res.status(404).send({mensaje:`error al consultar la informacion${e}`})})
}

function agregarJoya(req, res){
    console.log(req.body)
    new joyasModel(req.body).save()
    .then(info =>{
        return res.status(200).send({
            mensaje:"La informacion se guardo de forma correcta",
            info
        })
    })
    .catch(e =>{return res.status(404).send({mensaje:`error al guardar ${e}`})})
}

function buscarjoyas(req,res,next) {
    var consultar ={}
    consulta[req.params.key]=req.params.value
    console.log(consulta)
    joyasModel.find(consulta)
    .then(joyas =>{
        if(!joyas.length) return next;
        req.body.joyas=joyas
        return next
    })
    .catch(e => {
        req.body.e = e
        return next
    })
}

function mostrarjoyas(req,res) {
    if(req.body.e)return res.status(404).send({mensaje:`error al buscar la informacion`})
    if(!req.body.joyas)return res.status(204).send({mensaje:`no hay nada que mosrar`})
    let joyas =req.body.joyas
    return res.status(200).send({joyas})
    
}

module.exports ={
    buscarTodo,
    agregarJoya,
    buscarjoyas,
    mostrarjoyas
}