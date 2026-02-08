import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxBeginning extends StandardModel { }
class IxBeginningDt extends StandardModel { }

IxBeginning.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixBeginningId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_beginning', 'IxBeginning', sequelize)
);

IxBeginningDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixBeginningDtId', DataTypes.BIGINT),
      ixBeginningId: DataTypes.BIGINT,
      whId: DataTypes.BIGINT,
      whCode: DataTypes.STRING(150),
      islocal: DataTypes.TINYINT,
      isimport: DataTypes.TINYINT,
      supplierId: DataTypes.BIGINT,
      supplierCode: DataTypes.STRING(150),
      supplierName: DataTypes.STRING(150),
      bc16: { type: DataTypes.STRING(150), field: 'bc_16' },
      transCode: DataTypes.STRING(150),
      transDate: DataTypes.DATEONLY,
      ref: DataTypes.STRING(200),
      itemId: DataTypes.BIGINT,
      itemCode: DataTypes.STRING(150),
      itemName: DataTypes.STRING(150),
      rfid: DataTypes.STRING(150),
      itemCategoryId: DataTypes.BIGINT,
      itemCategorySubId: DataTypes.BIGINT,
      brandId: DataTypes.BIGINT,
      iscombo: DataTypes.TINYINT,
      bbd: DataTypes.STRING(20),
      qty: DataTypes.DOUBLE,
      currencyId: DataTypes.BIGINT,
      currencyCode: DataTypes.STRING(150),
      price: DataTypes.DOUBLE,
      // priceT: DataTypes.FLOAT,
      kurs: DataTypes.DOUBLE,
      value: DataTypes.DOUBLE,
      // valueT: DataTypes.DOUBLE,
      status: DataTypes.TINYINT,
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ix_beginning_dt', 'IxBeginningDt', sequelize)
);

export {
  IxBeginning,
  IxBeginningDt
};

