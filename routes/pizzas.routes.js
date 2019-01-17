import {Router} from 'express';
import {getPizzaByIdHandler} from "./pizzas/getPizzaById.handler";

const router = new Router();

router.get('/', (request, response, next) => {

});

router.post('/', (request, response, next) => {

});

router.put('/', (request, response, next) => {

});

router.patch('/', (request, response, next) => {

});

router.get('/:idPizza(\\d+)', getPizzaByIdHandler);

export default router;