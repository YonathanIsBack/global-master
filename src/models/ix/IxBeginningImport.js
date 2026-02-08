import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxBeginningImport extends StandardModel { }
class IxBeginningImportDt extends StandardModel { }

IxBeginningImport.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixBeginningImportId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_beginning_import', 'IxBeginningImport', sequelize)
);

IxBeginningImportDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixBeginningImportDtId', DataTypes.BIGINT),
      ixBeginningImportId: DataTypes.BIGINT,
      whId: DataTypes.BIGINT,
      whCode: DataTypes.STRING(150),
      transCode: DataTypes.STRING(200),
      transDate: DataTypes.DATE,
      supplierId: DataTypes.BIGINT,
      supplierCode: DataTypes.STRING(50),
      supplierName: DataTypes.STRING(150),
      bc16: { type: DataTypes.STRING(150), field: 'bc_16' },
      ref: DataTypes.STRING(200),
      itemId: DataTypes.BIGINT,
      itemCode: DataTypes.STRING,
      itemName: DataTypes.STRING(150),
      rfid: DataTypes.STRING(150),
      itemCategoryId: DataTypes.BIGINT,
      itemCategorySubId: DataTypes.BIGINT,
      brandId: DataTypes.BIGINT,
      iscombo: DataTypes.TINYINT,
      bbd: DataTypes.STRING(20),
      qty: DataTypes.DOUBLE,
      currencyId: DataTypes.BIGINT,
      currencyCode: DataTypes.STRING(50),
      price: DataTypes.DOUBLE,
      kurs: DataTypes.DOUBLE,
      value: DataTypes.DOUBLE,
      status: DataTypes.TINYINT
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ix_beginning_import_dt', 'IxBeginningImportDt', sequelize)
);

export {
  IxBeginningImport,
  IxBeginningImportDt
};

