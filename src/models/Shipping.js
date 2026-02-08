import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
import StandardModel from './StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class Shipping extends StandardModel {}

Shipping.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('shippingId', DataTypes.INTEGER),
      shippingName: DataTypes.STRING(150)
    },
    { withIsactive: true, withIsdel: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_shipping', 'Shipping', sequelize)
);

export default Shipping;
