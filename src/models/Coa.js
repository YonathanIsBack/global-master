import { DataTypes, DATE } from 'sequelize';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
import StandardModel from './StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class Coa extends StandardModel {}
class CoaBank extends StandardModel {}
class CoaGroup extends StandardModel {}
class CoaSubGroup extends StandardModel {}
class CoaType extends StandardModel {}

Coa.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('coaId', DataTypes.INTEGER),
      coaParentId: DataTypes.INTEGER,
      coaCode: DataTypes.STRING(25),
      coaName: DataTypes.STRING(50),
      coaTypeId: DataTypes.TINYINT,
      coaSubGroupId: DataTypes.BIGINT,
      coaLinkId: DataTypes.BIGINT,
      isledger: DataTypes.BIGINT,
      level: DataTypes.INTEGER,
      reportType: DataTypes.TINYINT,
      isactiva: DataTypes.TINYINT,
      normalBalance: DataTypes.TINYINT,
      isbank: DataTypes.TINYINT,
      isused: DataTypes.TINYINT,
      isunder: DataTypes.TINYINT,
      isupdateXls: DataTypes.TINYINT
    },
    { withDbId: true, withIsactive: true, withIsdel: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_coa', 'Coa', sequelize)
);

CoaBank.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('coaBankId', DataTypes.INTEGER),
      bankId: DataTypes.INTEGER,
      companyParentId: DataTypes.INTEGER,
      coaId: DataTypes.INTEGER,
      coaBankCode: DataTypes.STRING(5),
      coaBankName: DataTypes.STRING(25),
      branch: DataTypes.STRING(50),
      accountNumber: DataTypes.STRING(30),
      currencyId: DataTypes.INTEGER
    },
    { withDbId: true, withIsactive: true, withIsdel: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_coa_bank', 'CoaBank', sequelize)
);

CoaGroup.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('coaGroupId', DataTypes.INTEGER),
      companyParentId: DataTypes.INTEGER,
      coaGroupParentId: DataTypes.INTEGER,
      coaGroupCode: DataTypes.STRING(10),
      coaGroupName: DataTypes.STRING(25),
      coaTypeId: DataTypes.INTEGER
    },
    { withDbId: true, withIsactive: true, withIsdel: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_coa_group', 'CoaGroup', sequelize)
);

CoaSubGroup.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('coaSubGroupId', DataTypes.INTEGER),
      companyParentId: DataTypes.INTEGER,
      coaSubGroupCode: DataTypes.STRING(10),
      coaSubGroupName: DataTypes.STRING(25),
      coaGroupId: DataTypes.INTEGER,
      coaTypeId: DataTypes.INTEGER
    },
    { withDbId: true, withIsactive: true, withIsdel: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_coa_sub_group', 'CoaSubGroup', sequelize)
);

CoaType.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('coaTypeId', DataTypes.BIGINT),
      companyParentId: DataTypes.INTEGER,
      coaTypeCode: DataTypes.STRING(25),
      coaTypeName: DataTypes.STRING(50)
    },
    { withDbId: true, withIsactive: true, withIsdel: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_coa_type', 'CoaType', sequelize)
);

export { Coa, CoaBank, CoaGroup, CoaSubGroup, CoaType };
