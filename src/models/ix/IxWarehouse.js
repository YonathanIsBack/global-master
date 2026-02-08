import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxWarehouse extends StandardModel { }
class IxWarehouseDt extends StandardModel { }

IxWarehouse.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixWarehouseId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_warehouse', 'IxWarehouse', sequelize)
);

IxWarehouseDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixWarehouseDtId', DataTypes.BIGINT),
      ixWarehouseId: DataTypes.BIGINT,
      customerId: DataTypes.BIGINT,
      customerCode: DataTypes.STRING(50),
      customerName: DataTypes.STRING(150),
      warehouseLinkId: DataTypes.BIGINT,
      warehouseLinkCode: DataTypes.STRING(50),
      warehouseLinkName: DataTypes.STRING(100),
      warehouseLevelId: DataTypes.BIGINT,
      warehouseLevelName: DataTypes.STRING(150),
      warehouseCode: DataTypes.STRING(50),
      warehouseName: DataTypes.STRING(150),
      warehouseInitial: DataTypes.STRING(150),
      warehouseAddr: DataTypes.TEXT,
      warehouseCountryId: DataTypes.INTEGER,
      warehouseCountryCode: DataTypes.STRING(50),
      warehouseCountryName: DataTypes.STRING(150),
      warehouseProvinceId: DataTypes.BIGINT,
      warehouseCityId: DataTypes.BIGINT,
      warehouseCityCode: DataTypes.STRING(150),
      warehouseCityName: DataTypes.STRING(150),
      warehouseDistrictId: DataTypes.BIGINT,
      warehouseSubdistrictId: DataTypes.BIGINT,
      warehouseSubdistrictCode: DataTypes.STRING(150),
      warehouseSubdistrictName: DataTypes.STRING(150),
      warehouseDistrictCode: DataTypes.STRING(150),
      warehouseDistrictName: DataTypes.STRING(150),
      warehouseProvinceCode: DataTypes.STRING(50),
      warehouseProvinceName: DataTypes.STRING(150),
      warehousePostalCode: DataTypes.STRING(7),
      warehousePhone: DataTypes.TEXT,
      coaId: DataTypes.BIGINT,
      coaCode: DataTypes.STRING(50),
      coaName: DataTypes.STRING(150),
      pic: DataTypes.STRING(100),
      note: DataTypes.TEXT,
      type: DataTypes.STRING(100),
      isexport: DataTypes.STRING(100),
      isimport: DataTypes.STRING(100),
      islocal: DataTypes.STRING(100),
      isconsignment: DataTypes.STRING(100),
    },
    { withIsactive: true, withIsdel: true }
  ),
  StandardModel.buildStandardModelInformation('ix_warehouse_dt', 'IxWarehouseDt', sequelize)
);

export {
  IxWarehouse,
  IxWarehouseDt
};

