import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class MsPanProvince extends StandardModel { }

MsPanProvince.init(
    StandardModel.buildPropertyWithOptions(
        {
            ...StandardModel.buildPrimaryKey('provinceId', DataTypes.BIGINT),
            countryId: DataTypes.BIGINT,
            rajaOngkirId: DataTypes.BIGINT,
            provinceCode: DataTypes.STRING(25),
            provinceName: DataTypes.STRING(150),
            
        },
        { withIsactive: true, withIsdel: true, withCreate: true, withModify: true }
    ),
    StandardModel.buildStandardModelInformation('ms_pan_province', 'MsPanProvince', sequelize)
);

export default MsPanProvince;

