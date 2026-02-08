import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class PurchaseCreditNote extends StandardModel {}
class PurchaseCreditNoteDt extends StandardModel {}

PurchaseCreditNote.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchaseCreditNoteId', DataTypes.BIGINT),
      purchaseCreditNoteCode: DataTypes.STRING(50),
      purchaseCreditNoteCodeTemp: DataTypes.STRING(50),
      purchaseCreditNoteName: DataTypes.STRING(150),
      purchaseCreditNoteDate: DataTypes.DATE,
      traceId: DataTypes.STRING(150),
      supplierId: DataTypes.INTEGER,
      currencyId: DataTypes.INTEGER,
      rate: DataTypes.DOUBLE,
      nominal: DataTypes.DOUBLE,
      reff: DataTypes.STRING(150),
      note: DataTypes.STRING(800),
      status: DataTypes.TINYINT,
      statusNext: DataTypes.TINYINT,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.INTEGER,
      isedit: DataTypes.TINYINT,
      confirmtimeF: DataTypes.DATE,
      confirmbyF: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_purchase_credit_note',
    'PurchaseCreditNote',
    sequelize
  )
);

PurchaseCreditNoteDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchaseCreditNoteDtId', DataTypes.BIGINT),
      purchaseCreditNoteId: DataTypes.BIGINT,
      date: DataTypes.DATE,
      amount: DataTypes.DOUBLE
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_purchase_credit_note_dt',
    'PurchaseCreditNoteDt',
    sequelize
  )
);

export { PurchaseCreditNote, PurchaseCreditNoteDt };
