import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class MsPanCity extends StandardModel { }

MsPanCity.init(
    StandardModel.buildPropertyWithOptions(
        {
            ...StandardModel.buildPrimaryKey('cityId', DataTypes.BIGINT),
            rajaOngkirId: DataTypes.BIGINT,
            countryId: DataTypes.BIGINT,
            provinceId: DataTypes.BIGINT,
            cityCode: DataTypes.STRING(25),
            cityName: DataTypes.STRING(150),
            type: DataTypes.STRING(150),
            kodePos: DataTypes.STRING(15),
            
        },
        { withIsactive: true, withIsdel: true, withCreate: true, withModify: true }
    ),
    StandardModel.buildStandardModelInformation('ms_pan_city', 'MsPanCity', sequelize)
);

export default MsPanCity;

