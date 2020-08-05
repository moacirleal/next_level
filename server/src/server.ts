import express from 'express'; //importação do pacote express

const app = express(); // criar uma constante que recebe o pacote express

//Corpo (Request Body): Dados para criação ou atualização de um registro
//Route Params: Identificar qual recurso atualizar ou deletar
//Query Params: Paginação, filtros, ordenação


app.use(express.json()) //Informa ao express que a cada requesição do body ele deve retornar JSON

app.get('/users', (request, response) => { //Informa o método, o endpoint e passa como parâmetros a resposta e a requisição
    console.log(request.query)
    
    const users = [ //Cria um array que pega a estrutura do JSON
        {
            name: 'Moacir', age: 27
        },
        {
            name: 'Eloise', age: 26
        }
    ];
    return (
        response.json([users]) //retorna para o navegador o o array transformardo em JSON
    );
})

app.listen(3333);
