import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxBeginningGl extends StandardModel { }
class IxBeginningGlDt extends StandardModel { }

IxBeginningGl.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixBeginningGlId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_beginning_gl', 'IxBeginningGl', sequelize)
);

IxBeginningGlDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixBeginningGlDtId', DataTypes.BIGINT),
      ixBeginningGlId: DataTypes.BIGINT,
      date: DataTypes.DATE,
      transactionCode: DataTypes.STRING(100),
      coaCode: DataTypes.STRING(100),
      coaName: DataTypes.STRING(150),
      desc: DataTypes.STRING(500),
      debit: DataTypes.DOUBLE,
      credit: DataTypes.DOUBLE,
      // debitT: DataTypes.DOUBLE,
      // creditT: DataTypes.DOUBLE,
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ix_beginning_gl_dt', 'IxBeginningGlDt', sequelize)
);

export {
  IxBeginningGl,
  IxBeginningGlDt
};

