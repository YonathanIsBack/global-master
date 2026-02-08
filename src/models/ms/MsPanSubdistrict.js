import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class MsPanSubdistrict extends StandardModel { }

MsPanSubdistrict.init(
    StandardModel.buildPropertyWithOptions(
        {
            ...StandardModel.buildPrimaryKey('subdistrictId', DataTypes.BIGINT),
            rajaOngkirId: DataTypes.BIGINT,
            countryId: DataTypes.BIGINT,
            cityId: DataTypes.BIGINT,
            provinceId: DataTypes.BIGINT,
            districtId: DataTypes.BIGINT,
            type: DataTypes.STRING(150),
            subdistrictCode: DataTypes.STRING(25),
            subdistrictName: DataTypes.STRING(500),
            subdistrictLabel: DataTypes.STRING(500),
            kodePos: DataTypes.STRING(150),
        },
        { withIsactive: true, withIsdel: true, withCreate: true, withModify: true }
    ),
    StandardModel.buildStandardModelInformation('ms_pan_subdistrict', 'MsPanSubdistrict', sequelize)
);

export default MsPanSubdistrict;

