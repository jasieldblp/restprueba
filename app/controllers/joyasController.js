const joyasModel = require('../models/joyasModel');

function buscarTodo(req, res) {
    joyasModel.find({})
    .then(joyas => {
        if (joyas.length) {
            return res.status(200).send({ joyas });
        }
        return res.status(204).send({ mensaje: "no hay nada que mostrar" });
    })
    .catch(e => {
        return res.status(404).send({ mensaje: `error al consultar la informacion: ${e}` });
    });
}

function agregarJoya(req, res) {
    console.log(req.body);
    new joyasModel(req.body).save()
    .then(info => {
        return res.status(200).send({
            mensaje: "La informacion se guardo de forma correcta",
            info
        });
    })
    .catch(e => {
        return res.status(404).send({ mensaje: `error al guardar: ${e}` });
    });
}

async function buscarjoyas(req, res, next) {
    let consulta = {};
    consulta[req.params.key] = req.params.value;
    console.log(consulta);
    joyasModel.find(consulta)
    .then(joyas => {
        if (!joyas.length) return next();
        req.body.joyas = joyas;
        return next();
    })
    .catch(e => {
        req.body.e = e;
        return next();
    });
}

function mostrarjoyas(req, res) {
    if (req.body.e) return res.status(404).send({ mensaje: `error al buscar la informacion` });
    if (!req.body.joyas) return res.status(204).send({ mensaje: `no hay nada que mostrar` });

    let joyas = req.body.joyas;
    return res.status(200).send({ joyas });
}

function eliminarJoya(req, res) {
    const joya = req.body.joyas && req.body.joyas[0];
    if (!joya) {
        return res.status(400).send({ mensaje: "No se proporcionó una joya válida para eliminar" });
    }

    joyasModel.deleteOne({ _id: joya._id }) // Asegúrate de usar el ID
    .then(info => {
        return res.status(200).send({ mensaje: "Registro eliminado", info });
    })
    .catch(e => {
        return res.status(404).send({ mensaje: "error al eliminar la informacion", error: e });
    });
}

function actualizarJoya(req, res) {
    const joya = req.params.joya;
    const update = req.body;

    joyasModel.updateOne(joya, {$set: update})
   .then(info => {
        return res.status(200).send({ mensaje: "Joya actualizada", info });
    })
    .catch(e => {
        return res.status(404).send({ mensaje: "error al actualizar joyas", error: e });
    });
}


module.exports = {
    buscarTodo,
    agregarJoya,
    buscarjoyas,
    mostrarjoyas,
    eliminarJoya,
    actualizarJoya
};