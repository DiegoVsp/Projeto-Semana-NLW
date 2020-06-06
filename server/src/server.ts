import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';

const app = express();

app.use(cors())
app.use(express.json()); // para conseguir trazer informações json
// com isso, no app.post já consigo trazer as infos para criação

//Rota: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema

// GET:BUSCAR UMA OU MAIS INFORMAÇÕES DO BACK-END
// POST:CRIAR UMA NOVA INFORMAÇÃO NO BACK-END
// PUT:ATUALIZAR UMA INFORMAÇÃO EXISTENTE NO BACK-END
// DELETE:REMOVER UMA INFORMAÇÃO DO BACK-END

// POST ->  http://localhost:3333/users  = criar um usuário
// GET -> http://localhost:3333/users = listar usuário
// GET -> http://localhost:3333/users/5 = buscar dados do usuários com id 5

//  Request Param: Parametros que vem na própria rota que identificam um recurso
//  Query Param: Parametros que vem na própria rota geralmente opcionais para filtros, paginação...
//  Request Body:Parametros para criação / atualização de infos


// SELECT * from users WHERE name ='Diego';
// knex('users').where('name', 'Diego').select('*')


// const users = [
//   'Diego',
//   'Rodrigo',
//   'Tiago'
// ];

// buscar lista de usuários
app.get('/', (request, response) => {
  // const search = String(request.query.search);//busca com base na info passada pela query search
  // const filteredUsers = search ? users.filter(user => user.includes(search)):users;
  // return response.json(filteredUsers);

  return response.json({message: 'Hello World'});
});


// buscar um unico usuário com base em seu id
// app.get('/users/:id', (request,response) =>{
//   const id = Number(request.params.id);
//   const user = users[id];// pegar usuário de dentro do array na posição [id]

//   return response.json(user);
  
// })

//criar usuário
// app.post('/users', (request, response) => {
//   const data = request.body; // pegar informações para criação atraves de request body 
//   console.log(data);


//   const user = {
//     name: data.name,
//     email: data.email
//   };
//   return response.json(user); //sempre que for utilizar response colocar o return antes dele
// })

app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.listen(3333);
