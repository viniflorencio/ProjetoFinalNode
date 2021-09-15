
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());


const Conn = require('./models/conn/conn');

Conn("localhost", 27017, "Tarefas");

const port = 3002;

const tarefa = require ('./routers/tarefas.routes');
app.use('/tarefas', tarefa);













app.listen(process.env.PORT || port,() =>{
    console.info(`rodando na porta ${port}`);
});