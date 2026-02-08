import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
import StandardModel from './StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class Department extends StandardModel { }

Department.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('departmentId', DataTypes.BIGINT),
      companyParentId: DataTypes.INTEGER,
      departmentCode: DataTypes.STRING(5),
      departmentName: DataTypes.STRING(25)
    },
    { withDbId: true, withIsactive: true, withIsdel: true, withIsused: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_department', 'Department', sequelize)
);

export default Department;
