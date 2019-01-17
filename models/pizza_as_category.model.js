import sequelizeInstance from '../lib/db';
import Sequelize from 'sequelize';
import Pizza from './pizza';
import Category from './category';

const PizzaAsCategory = sequelizeInstance.define('pizza_as_category', {
  idPizza: { type: Sequelize.INTEGER, primaryKey: true },
  idCategory: { type: Sequelize.INTEGER, primaryKey: true },
}, {
    freezeTableName: true,
    paranoid: true,
});

Category.belongsToMany(Pizza, {through: PizzaAsCategory, foreignKey : 'idCategory', as: 'pizza'});
Pizza.belongsToMany(Category, {through: PizzaAsCategory, foreignKey : 'idPizza', as: 'category'});

export default PizzaAsCategory;
export { PizzaAsCategory };
