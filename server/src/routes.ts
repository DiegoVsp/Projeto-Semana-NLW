import express from 'express';

import PointsController from './controllers/PointsController'; 
import ItemsController from './controllers/ItemsController';

//padrao quando cria um controller index -> se for uma listagem/listar varios, show -> se for exibir um unico registro, create, update e delete
const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);
routes.post('/points',pointsController.create);
// buscar item expecifico
routes.get('/points',pointsController.index);
routes.get('/points/:id',pointsController.show);

export default routes;

// Service Pattern
// Repository Pattern