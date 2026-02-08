import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
import StandardModel from './StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class Brand extends StandardModel {}

Brand.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('brandId', DataTypes.INTEGER),
      companyParentId: DataTypes.INTEGER,
      supplierGroupId: DataTypes.INTEGER,
      supplierId: DataTypes.INTEGER,
      brandCode: DataTypes.STRING(5),
      brandName: DataTypes.STRING(25)
    },
    { withDbId: true, withIsactive: true, withIsdel: true, withIsused: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_brand', 'Brand', sequelize)
);

export default Brand;
