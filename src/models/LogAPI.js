import { DataTypes, Model } from 'sequelize';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class LogAPI extends Model {}

LogAPI.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    uri: DataTypes.STRING,
    method: DataTypes.STRING,
    params: DataTypes.STRING,
    apiKey: DataTypes.STRING,
    ipAddress: DataTypes.STRING,
    time: DataTypes.INTEGER,
    rtime: DataTypes.INTEGER,
    authorized: DataTypes.STRING,
    responseCode: DataTypes.STRING,
    cretime: DataTypes.STRING,
    creby: DataTypes.STRING
  },
  {
    tableName: 'logs_api',
    underscored: true,
    timestamps: false,
    sequelize: sequelize,
    modelName: 'LogAPI'
  }
);

export default LogAPI;
