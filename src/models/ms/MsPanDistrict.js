import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class MsPanDistrict extends StandardModel { }

MsPanDistrict.init(
    StandardModel.buildPropertyWithOptions(
        {
            ...StandardModel.buildPrimaryKey('districtId', DataTypes.BIGINT),
            rajaOngkirId: DataTypes.BIGINT,
            countryId: DataTypes.BIGINT,
            cityId: DataTypes.BIGINT,
            provinceId: DataTypes.BIGINT,
            type: DataTypes.STRING(150),
            districtCode: DataTypes.STRING(25),
            districtName: DataTypes.STRING(150),
            kodePos: DataTypes.STRING(15),
            
        },
        { withIsactive: true, withIsdel: true, withCreate: true, withModify: true }
    ),
    StandardModel.buildStandardModelInformation('ms_pan_district', 'MsPanDistrict', sequelize)
);

export default MsPanDistrict;

