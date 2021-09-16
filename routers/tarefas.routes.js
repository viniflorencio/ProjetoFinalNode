const express = require('express');
const router = express.Router();
const Tarefa = require('../models/tarefas');
const Controller = require('../controllers/tarefas.controllers');


router.get('/', async (req,res) =>{
    await Tarefa.find ({})
    .then((tarefa) =>{
        res.status(200).send(tarefa);
    })
    .catch((err) =>{
        res.status(400).send("algo deu errado, tente novamente");
        console.log(err);
    })
});


router.get('/findById/:id', async (req, res) => {
    await Tarefa.findOne({_id : req.params.id})
    .then((tarefa) => {
        res.status(200).send(tarefa);
    })
    .catch((err) => {
        res.status(400).send("algo deu errado, tente novamente");
        console.log(err);
    })
});



router.post('/add', async (req,res)=>{
    await Tarefa.create (req.body)
    .then(() =>{
        res.status(200).send("tarefa adicionada com sucesso");
    })
    .catch((err) =>{
        res.status(400).send("algo deu errado com a criacão, tente novamente");
        console.log(err);
    })
});

router.put("/update/:id", async (req, res) => {
    await Tarefa.updateOne({ _id: req.params.id }, req.body)
      .then(() => {
        res.status(200).send("Tarefa atualizada com sucesso");
      })
      .catch((err) => {
        res.status(400).send("tente novamente");
        console.error(err);
      });
});

router.delete('/delete/:id', async (req,res) =>{
    await Tarefa.deleteOne({id : req.params.id})
    .then(() =>{
        res.status(200).send("deletado com sucesso");
    })
    .catch((err) =>{
        res.status(400).send("algo deu errado ao deletar, tente novamente");
        console.log(err);
    })
})

module.exports = router;

