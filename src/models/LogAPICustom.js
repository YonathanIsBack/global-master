import { DataTypes, Model } from 'sequelize';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class LogAPICustom extends Model {}

LogAPICustom.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    url: DataTypes.STRING,
    method: DataTypes.STRING,
    contentType: DataTypes.STRING,
    user: DataTypes.STRING,
    header: DataTypes.STRING,
    requestParams: DataTypes.STRING,
    queryParams: DataTypes.STRING,
    requestBody: DataTypes.STRING,
    responseCode: DataTypes.STRING,
    responseMessage: DataTypes.STRING,
    responseType: DataTypes.STRING,
    responseBody: DataTypes.STRING,
    timestamps: DataTypes.DATE,
    requestDate: DataTypes.DATEONLY,
    requestTime: DataTypes.TIME,
    responseTime: DataTypes.TIME,
  },
  {
    tableName: 'log_api',
    underscored: true,
    timestamps: false,
    sequelize: sequelize,
    modelName: 'LogAPICustom'
  }
);

export default LogAPICustom;
