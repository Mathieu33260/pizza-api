import { Router } from 'express';
import PizzaRoutes from './pizzas.routes';

const router = new Router();

router.use('/pizzas/', PizzaRoutes);

export default router;