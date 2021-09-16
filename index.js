
if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }


const cors = require('cors');
const express = require('express');
const app = express();
app.use(express.json());

const corsOptions = {
    origin: 'http://localhost:3001',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

  app.use(cors());

const Conn = require('./models/conn/conn');


const dbUrl = process.env.DB_URL;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS; 
const dbData = process.env.DB_DATA;

Conn(dbUrl, dbUser, dbPass, dbData);
const port = 3000;

const tarefa = require ('./routers/tarefas.routes');
app.use('/tarefas', tarefa);













app.listen(port,() =>{
    console.info(`rodando na porta ${port}`);
});