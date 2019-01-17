import * as HTTP_STATUS from "http-status-codes";
import {getPizzaById} from "../services/pizzas.service";

export const getPizzaByIdHandler = (request, response, next) => {
    getPizzaById(request.params.idPizza)
        .then((pizza) => {

            response.status(HTTP_STATUS.OK).json(pizza);
        })
        .catch((e) => {
            response.sendStatus(HTTP_STATUS.INTERNAL_SERVER_ERROR);
        });
};