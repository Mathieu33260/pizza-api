import Sequelize from 'sequelize';

const sequelizeInstance = new Sequelize ('sqlite://./database.sqlite',{});

export {sequelizeInstance};
export default sequelizeInstance;
