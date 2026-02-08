import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class HsMaxPrint extends StandardModel { }

HsMaxPrint.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('maxPrintHsId', DataTypes.BIGINT),
      maxPrintId: DataTypes.BIGINT,
      type: DataTypes.STRING(50),
      currentMax: DataTypes.DOUBLE,
      userId: DataTypes.BIGINT,
      pageId: DataTypes.BIGINT,
      transactionId: DataTypes.BIGINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('hs_max_print', 'HsMaxPrint', sequelize)
);


export default HsMaxPrint;

