import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxLocation extends StandardModel { }
class IxLocationDt extends StandardModel { }

IxLocation.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixLocationId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_location', 'IxLocation', sequelize)
);

IxLocationDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixLocationDtId', DataTypes.BIGINT),
      ixLocationId: DataTypes.BIGINT,
      locationCode: DataTypes.STRING(50),
      locationName: DataTypes.STRING(150),
      isstock: DataTypes.STRING(50),
      isused: DataTypes.TINYINT
    },
    { withIsactive: true, withIsdel: true }
  ),
  StandardModel.buildStandardModelInformation('ix_location_dt', 'IxLocationDt', sequelize)
);

export {
  IxLocation,
  IxLocationDt
};

