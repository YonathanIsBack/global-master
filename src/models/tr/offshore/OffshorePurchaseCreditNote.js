import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class OffshorePurchaseCreditNote extends StandardModel { }
class OffshorePurchaseCreditNoteReject extends StandardModel { }
class OffshorePurchaseCreditNoteRequest extends StandardModel { }

OffshorePurchaseCreditNote.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('offshorePurchaseCreditNoteId', DataTypes.BIGINT),
      offshorePurchaseCreditNoteCode: DataTypes.STRING(150),
      offshorePurchaseCreditNoteCodeTemp: DataTypes.STRING(150),
      offshorePurchaseCreditNoteName: DataTypes.STRING(150),
      offshorePurchaseCreditNoteDate: DataTypes.DATE,
      traceId: DataTypes.STRING(150),
      supplierId: DataTypes.BIGINT,
      currencyId: DataTypes.BIGINT,
      currencyRate: DataTypes.DOUBLE,
      nominal: DataTypes.DOUBLE,
      used: DataTypes.DOUBLE,
      reff: DataTypes.STRING(150),
      note: DataTypes.TEXT,
      status: DataTypes.TINYINT,
      statusNext: DataTypes.TINYINT,
      isedit: DataTypes.TINYINT,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.BIGINT,
      confirmtimeF: DataTypes.DATE,
      confirmbyF: DataTypes.BIGINT,
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('tr_offshore_purchase_credit_note', 'OffshorePurchaseCreditNote', sequelize)
);

OffshorePurchaseCreditNoteReject.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('offshorePurchaseCreditNoteRejectId', DataTypes.BIGINT),
      offshorePurchaseCreditNoteId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_offshore_purchase_credit_note_reject',
    'OffshorePurchaseCreditNoteReject',
    sequelize
  )
);

OffshorePurchaseCreditNoteRequest.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('offshorePurchaseCreditNoteRequestId', DataTypes.BIGINT),
      offshorePurchaseCreditNoteId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      statusRequest: DataTypes.INTEGER,
      userId: DataTypes.BIGINT
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_offshore_purchase_credit_note_request',
    'OffshorePurchaseCreditNoteRequest',
    sequelize
  )
);

export {
  OffshorePurchaseCreditNote,
  OffshorePurchaseCreditNoteReject,
  OffshorePurchaseCreditNoteRequest
};

