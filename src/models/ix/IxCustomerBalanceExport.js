import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxCustomerBalanceExport extends StandardModel { }
class IxCustomerBalanceExportDt extends StandardModel { }

IxCustomerBalanceExport.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixCustomerBalanceExportId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_customer_balance_export', 'IxCustomerBalanceExport', sequelize)
);

IxCustomerBalanceExportDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixCustomerBalanceExportDtId', DataTypes.BIGINT),
      ixCustomerBalanceExportId: DataTypes.BIGINT,
      invoiceNumber: DataTypes.STRING(50),
      ref: DataTypes.STRING(50),
      customerCode: DataTypes.STRING(50),
      customerName: DataTypes.STRING(100),
      currencyId: DataTypes.BIGINT,
      currencyCode: DataTypes.STRING(150),
      currencyName: DataTypes.STRING(150),
      rate: DataTypes.STRING(150),
      trx: DataTypes.STRING(100),
      tempo: DataTypes.STRING(50),
      invoiceDate: DataTypes.STRING(100),
      tempoDate: DataTypes.STRING(50),
      currencySaldo: DataTypes.STRING(150),
      saldo: DataTypes.STRING(100),
      status: DataTypes.TINYINT
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ix_customer_balance_export_dt', 'IxCustomerBalanceExportDt', sequelize)
);

export {
  IxCustomerBalanceExport,
  IxCustomerBalanceExportDt
};

