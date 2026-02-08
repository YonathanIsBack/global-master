import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class ImportCreditNote extends StandardModel {}
class ImportCreditNoteDt extends StandardModel {}
class ImportCreditNoteReject extends StandardModel {}
class ImportCreditNoteRequest extends StandardModel {}

ImportCreditNote.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importCreditNoteId', DataTypes.BIGINT),
      importCreditNoteCode: DataTypes.STRING(50),
      importCreditNoteCodeTemp: DataTypes.STRING(50),
      importCreditNoteName: DataTypes.STRING(150),
      importCreditNoteDate: DataTypes.DATE,
      traceId: DataTypes.STRING(150),
      supplierId: DataTypes.INTEGER,
      currencyId: DataTypes.INTEGER,
      rate: DataTypes.DOUBLE,
      nominal: DataTypes.DOUBLE,
      used: DataTypes.DOUBLE,
      reff: DataTypes.STRING(50),
      note: DataTypes.STRING(800),
      status: DataTypes.TINYINT,
      statusNext: DataTypes.TINYINT,
      isvat: DataTypes.TINYINT,
      confirmby: DataTypes.INTEGER,
      confirmtime: DataTypes.DATE,
      isedit: DataTypes.TINYINT,
      confirmtimeF: DataTypes.DATE,
      confirmbyF: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_import_credit_note',
    'ImportCreditNote',
    sequelize
  )
);

ImportCreditNoteDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importCreditNoteDtId', DataTypes.BIGINT),
      importCreditNoteId: DataTypes.BIGINT,
      date: DataTypes.DATE,
      amount: DataTypes.DOUBLE
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_import_credit_note_dt',
    'ImportCreditNoteDt',
    sequelize
  )
);

ImportCreditNoteReject.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importCreditNoteRejectId', DataTypes.BIGINT),
      importCreditNoteId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_import_credit_note_reject',
    'ImportCreditNoteReject',
    sequelize
  )
);

ImportCreditNoteRequest.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importCreditNoteRequestId', DataTypes.BIGINT),
      importCreditNoteId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      statusRequest: DataTypes.INTEGER,
      userId: DataTypes.BIGINT
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_import_credit_note_request',
    'ImportCreditNoteRequest',
    sequelize
  )
);
export { ImportCreditNote, ImportCreditNoteDt, ImportCreditNoteReject, ImportCreditNoteRequest };
