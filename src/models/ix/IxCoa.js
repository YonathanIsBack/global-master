import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxCoa extends StandardModel { }
class IxCoaDt extends StandardModel { }

IxCoa.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixCoaId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_coa', 'IxCoa', sequelize)
);

IxCoaDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixCoaDtId', DataTypes.BIGINT),
      ixCoaId: DataTypes.BIGINT,
      typeCode: DataTypes.STRING(150),
      namaTipe: DataTypes.TEXT,
      kodeGrup: DataTypes.STRING(50),
      namaGrup: DataTypes.STRING(100),
      kodeSubgrup: DataTypes.STRING(50),
      namaSubgrup: DataTypes.STRING(100),
      kodeCa: DataTypes.STRING(50),
      namaCa: DataTypes.STRING(100),
      kodeSubledger: DataTypes.STRING(50),
      namaSubledger: DataTypes.STRING(100),
      reportType: DataTypes.STRING(150),
      isactiva: DataTypes.STRING(150),
      normalBalance: DataTypes.STRING(150),
      keterangan: DataTypes.STRING(250),
      status: DataTypes.STRING(150),
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('ix_coa_dt', 'IxCoaDt', sequelize)
);

export {
  IxCoa,
  IxCoaDt
};

