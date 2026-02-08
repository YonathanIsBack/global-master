import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
import StandardModel from './StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class Warehouse extends StandardModel { }
class WarehouseLevel extends StandardModel { }
class WarehouseCategoryCoa extends StandardModel { }

Warehouse.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('warehouseId', DataTypes.BIGINT),
      companyParentId: DataTypes.INTEGER,
      companyId: DataTypes.INTEGER,
      customerId: DataTypes.INTEGER,
      warehouseLinkId: DataTypes.INTEGER,
      warehouseLevelId: DataTypes.INTEGER,
      warehouseCode: DataTypes.STRING(25),
      warehouseName: DataTypes.STRING(50),
      warehouseInitial: DataTypes.STRING(50),
      warehouseAddr: DataTypes.TEXT,
      warehouseCountryId: DataTypes.INTEGER,
      warehouseProvinceId: DataTypes.INTEGER,
      warehouseCityId: DataTypes.BIGINT,
      warehouseDistrictId: DataTypes.BIGINT,
      warehouseSubdistrictId: DataTypes.BIGINT,
      warehousePostalCode: DataTypes.STRING(7),
      warehousePhone: DataTypes.STRING(250),
      coaId: DataTypes.BIGINT,
      TYPE: { type: DataTypes.TINYINT, field: 'TYPE' },
      pic: DataTypes.STRING(100),
      note: DataTypes.TEXT,
      isexport: DataTypes.TINYINT,
      isimport: DataTypes.TINYINT,
      islocal: DataTypes.TINYINT,
      isconsignment: DataTypes.TINYINT
    },
    { withDbId: true, withIsactive: true, withIsdel: true, withIsused: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_warehouse', 'Warehouse', sequelize)
);

WarehouseLevel.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('warehouseLevelId', DataTypes.BIGINT),
      companyParentId: DataTypes.INTEGER,
      warehouseLevelCode: DataTypes.STRING(15),
      warehouseLevelName: DataTypes.STRING(25),
      number: DataTypes.TINYINT,
      digit: DataTypes.TINYINT
    },
    { withDbId: true, withIsactive: true, withIsdel: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_warehouse_level', 'WarehouseLevel', sequelize)
);

WarehouseCategoryCoa.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('warehouseCategoryCoaId', DataTypes.BIGINT),
      warehouseId: DataTypes.BIGINT,
      categoryId: DataTypes.BIGINT,
      coaId: DataTypes.BIGINT,
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('ms_warehouse_category_coa', 'WarehouseCategoryCoa', sequelize)
);

export { Warehouse, WarehouseLevel, WarehouseCategoryCoa };
