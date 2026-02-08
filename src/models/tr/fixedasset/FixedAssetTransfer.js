import { DataTypes } from 'sequelize';
import StandardModel from '../../StandardModel.js';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class FixedAssetTransfer extends StandardModel {}
class FixedAssetTransferDt extends StandardModel {}

FixedAssetTransfer.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('fixedAssetTransferId', DataTypes.DOUBLE),
      fixedAssetTransferCode: DataTypes.STRING(50),
      fixedAssetTransferCodeTemp: DataTypes.STRING(50),
      fixedAssetTransferDate: DataTypes.DATE,
      note: DataTypes.TEXT,
      status: DataTypes.TINYINT,
      statusNext: DataTypes.TINYINT,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.INTEGER,
      confirmtimeF: DataTypes.DATE,
      confirmbyF: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('tr_fixed_asset_transfer', 'FixedAssetTransfer', sequelize)
);

FixedAssetTransferDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('fixedAssetTransferDtId', DataTypes.BIGINT),
      fixedAssetTransferId: DataTypes.BIGINT,
      fixedAssetId: DataTypes.BIGINT,
      fromLocationId: DataTypes.BIGINT,
      toLocationId: DataTypes.BIGINT,
      fromUser: DataTypes.STRING(500),
      toUser: DataTypes.STRING(500),
      qty: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('tr_fixed_asset_transfer_dt', 'FixedAssetTransferDt', sequelize)
);

export { FixedAssetTransfer, FixedAssetTransferDt };
