// backend/models/userModel.js
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.js'; // Importe a instância do Sequelize

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize, // Passa a instância do Sequelize para o modelo
    modelName: 'User', // Define o nome do modelo
    tableName: 'users', // Define o nome da tabela no banco de dados
  }
);

export default User;
