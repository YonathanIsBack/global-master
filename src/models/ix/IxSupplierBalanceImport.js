import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxSupplierBalanceImport extends StandardModel { }
class IxSupplierBalanceImportDt extends StandardModel { }

IxSupplierBalanceImport.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixSupplierBalanceImportId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_supplier_balance_import', 'IxSupplierBalanceImport', sequelize)
);

IxSupplierBalanceImportDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixSupplierBalanceImportDtId', DataTypes.BIGINT),
      ixSupplierBalanceImportId: DataTypes.BIGINT,
      invoiceNumber: DataTypes.STRING(20),
      referensi: DataTypes.STRING(50),
      customerCode: DataTypes.STRING(50),
      customerName: DataTypes.STRING(100),
      currencyId: DataTypes.BIGINT,
      currencyCode: DataTypes.STRING(150),
      currencyName: DataTypes.STRING(150),
      rate: DataTypes.STRING(150),
      tempo: DataTypes.STRING(50),
      tanggalPo: DataTypes.STRING(50),
      jatuhTempo: DataTypes.STRING(40),
      currencySaldoAkhir: DataTypes.STRING(150),
      saldoAkhir: DataTypes.STRING(50),
      status: DataTypes.TINYINT
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ix_supplier_balance_import_dt', 'IxSupplierBalanceImportDt', sequelize)
);

export {
  IxSupplierBalanceImport ,
  IxSupplierBalanceImportDt
};

