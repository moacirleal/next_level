import express from 'express'; //importação do pacote express
import routes from './routes';
import cors from 'cors';

const app = express(); // criar uma constante que recebe o pacote express

//Corpo (Request Body): Dados para criação ou atualização de um registro
//Route Params: Identificar qual recurso atualizar ou deletar
//Query Params: Paginação, filtros, ordenação

app.use(cors());
app.use(express.json()); //Informa ao express que a cada requesição do body ele deve retornar JSON
app.use(routes)

app.listen(3333);
