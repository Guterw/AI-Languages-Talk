import Sequelize from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'backend/data/database.sqlite', // Nome do arquivo do banco de dados
});

export default sequelize;
