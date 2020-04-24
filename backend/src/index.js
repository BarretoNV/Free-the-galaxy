/*
Rota / Recursos

Métodos HTTP:

GET: Buscar/listar uma informação do back-end
POST: Criar uma informação no back-end
PUT: Alterar uma informação no back-end
DELETE: Deletar uma informação no back-end


Tipos de parâmetros:

Query Params: Parâmetros nomeados enviador na rota após "?" (filtros, paginação)
Route Params: Parâmetros utilizados para identificar recursos
Request Body: Corpo da requisição, usado para criar ou alterar recursos
*/

const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);


app.listen(3333);