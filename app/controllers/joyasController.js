const joyasModel = require('../models/joyasModel');

function buscarTodo(req, res) {
    joyasModel.file({})
    .then(joyas => {
        if(joyas,length){
            return res.statatus(200).send({joyas})
        }
        return res.status(204).send({mensaje:"no hay nada que mostrar"})
    })
    .catch(e =>{ return res.statatus(404).send({mensaje:`error al consultar la informacion${e}`})})
}

module.exports ={
    buscarTodo
}