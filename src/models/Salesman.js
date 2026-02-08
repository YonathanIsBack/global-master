
import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
import StandardModel from './StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class Salesman extends StandardModel { }
class SalesmanCommision extends StandardModel { }
class SalesmanTarget extends StandardModel { }

Salesman.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesmanId', DataTypes.BIGINT),
      companyParentId: DataTypes.INTEGER,
      salesmanCode: DataTypes.STRING(20),
      salesmanName: DataTypes.STRING(25),
      iscommission: DataTypes.TINYINT,
      dob: DataTypes.DATE,
      locationId: DataTypes.INTEGER,
      stratumId: DataTypes.INTEGER,
      salesmanEmail: DataTypes.STRING(50),
      salesmanPhone: DataTypes.STRING(20),
      userId: DataTypes.STRING(25)
    },
    { withDbId: true, withIsactive: true, withIsdel: true, withIsused: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_salesman', 'Salesman', sequelize)
);

SalesmanCommision.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesmanCommissionId', DataTypes.BIGINT),
      companyParentId: DataTypes.INTEGER,
      name: DataTypes.STRING(50),
      salesmanId: DataTypes.TEXT,
      salesCommission: DataTypes.STRING(50),
      productId: DataTypes.TEXT,
      productCommission: DataTypes.STRING(50),
      supplierGroupId: DataTypes.TEXT,
      supplierGroupCommission: DataTypes.STRING(50),
      categoryId: DataTypes.INTEGER,
      categoryCommission: DataTypes.STRING(50),
      isinvoice: DataTypes.INTEGER,
      invoiceCommission: DataTypes.STRING(50),
      term: DataTypes.INTEGER,
      termDay: DataTypes.INTEGER,
      termPercent: DataTypes.FLOAT,
      commission: DataTypes.INTEGER,
      value: DataTypes.FLOAT,
      calculation: DataTypes.INTEGER
    },
    { withDbId: true, withIsactive: true, withIsdel: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation(
    'ms_salesman_commission',
    'SalesmanCommision',
    sequelize
  )
);

SalesmanTarget.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesmanTargetId', DataTypes.BIGINT),
      companyParentId: DataTypes.INTEGER,
      salesmanId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      productValue: DataTypes.DECIMAL(10, 0),
      productQty: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
      categoryValue: DataTypes.DECIMAL(10, 0),
      categoryQty: DataTypes.INTEGER,
      brandId: DataTypes.INTEGER,
      brandValue: DataTypes.DECIMAL(10, 0),
      brandQty: DataTypes.INTEGER
    },
    { withDbId: true }
  ),
  StandardModel.buildStandardModelInformation('ms_salesman_target', 'SalesmanTarget', sequelize)
);

export { Salesman, SalesmanCommision, SalesmanTarget };
