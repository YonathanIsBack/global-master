import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxSupplierBalance extends StandardModel { }
class IxSupplierBalanceDt extends StandardModel { }

IxSupplierBalance.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixSupplierBalanceId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_supplier_balance', 'IxSupplierBalance', sequelize)
);

IxSupplierBalanceDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixSupplierBalanceDtId', DataTypes.BIGINT),
      ixSupplierBalanceId: DataTypes.BIGINT,
      invoiceNumber: DataTypes.STRING(20),
      referensi: DataTypes.STRING(20),
      supplierCode: DataTypes.STRING(50),
      supplierName: DataTypes.STRING(150),
      tempo: DataTypes.STRING(20),
      tanggalPo: DataTypes.STRING(50),
      jatuhTempo: DataTypes.STRING(40),
      saldoAkhir: DataTypes.STRING(50),
      status: DataTypes.TINYINT
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ix_supplier_balance_dt', 'IxSupplierBalanceDt', sequelize)
);

export {
  IxSupplierBalance,
  IxSupplierBalanceDt
};

