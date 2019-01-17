import sequelizeInstance from '../lib/db';
import Sequelize from 'sequelize';

const Category = sequelizeInstance.define('category', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING(255), allowNull: false },
}, {
    freezeTableName: true,
    paranoid: true,
});

export default Category;
export { Category };
