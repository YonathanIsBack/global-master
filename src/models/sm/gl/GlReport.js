import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../../configs/DatabaseConnection.js";
import StandardModel from "../../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class GlReport extends StandardModel { }

GlReport.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('glReportId', DataTypes.BIGINT),
      transactionType: DataTypes.INTEGER,
      transactionId: DataTypes.BIGINT,
      transactionDate: DataTypes.DATE,
      transactionCode: DataTypes.STRING(25),
      coaId: DataTypes.BIGINT,
      coaCode: DataTypes.STRING(25),
      coaName: DataTypes.STRING(150),
      departmentId: DataTypes.BIGINT,
      supplierId: DataTypes.BIGINT,
      supplierCode: DataTypes.STRING(25),
      supplierName: DataTypes.STRING(500),
      customerId: DataTypes.BIGINT,
      customerCode: DataTypes.STRING(25),
      customerName: DataTypes.STRING(500),
      description: DataTypes.TEXT,
      debit: DataTypes.DOUBLE,
      credit: DataTypes.DOUBLE,
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('sm_gl_report', 'GlReport', sequelize)
);

export default GlReport;
