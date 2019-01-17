import Pizza from "../../models/pizza";

export const getPizzaById = (idPizza) => {
    return new Promise((resolve, reject) => {
        Pizza.findOne({where: {id: idPizza}})
            .then((pizza) => resolve(
                formatPizza(pizza.get({plain: true}))
            ))
    })
};

const formatPizza = (pizza) => {
    return {
        name: pizza.name
    }
};