import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../configs/DatabaseConnection.js';
import StandardModel from '../StandardModel.js';

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxCustomer extends StandardModel {}
class IxCustomerDt extends StandardModel {}

IxCustomer.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixCustomerId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_customer', 'IxCustomer', sequelize)
);

IxCustomerDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixCustomerDtId', DataTypes.BIGINT),
      ixCustomerId: DataTypes.BIGINT,
      codeXt: DataTypes.STRING(150),
      customerCode: DataTypes.STRING(20),
      customerType: DataTypes.STRING(50),
      customerName: DataTypes.STRING(100),
      outletName: DataTypes.STRING(100),
      nickname: DataTypes.STRING(100),
      coretaxTransactionCodeId: {
        type: DataTypes.BIGINT,
        set(value) {
          if (typeof value === 'string' && isNaN(Number(value))) {
            this.setDataValue('coretaxTransactionCodeId', undefined);
          } else {
            this.setDataValue('coretaxTransactionCodeId', value);
          }
        }
      },
      coretaxTransactionCode: DataTypes.STRING(150),
      coretaxJenisPembeliId: {
        type: DataTypes.BIGINT,
        set(value) {
          if (typeof value === 'string' && isNaN(Number(value))) {
            this.setDataValue('coretaxJenisPembeliId', undefined);
          } else {
            this.setDataValue('coretaxJenisPembeliId', value);
          }
        }
      },
      coretaxJenisPembeliName: DataTypes.STRING(150),
      class: DataTypes.STRING(50),
      relation: DataTypes.STRING(100),
      relationDetail: DataTypes.STRING(100),
      relationLength: DataTypes.STRING(100),
      relationType: DataTypes.STRING(100),
      birtPlace: DataTypes.STRING(150),
      birthDate: DataTypes.STRING(50),
      gender: DataTypes.STRING(25),
      citizenship: DataTypes.STRING(50),
      citizenshipDetail: DataTypes.STRING(150),
      ktp: DataTypes.STRING(50),
      ktpValidDate: DataTypes.STRING(50),
      status: DataTypes.STRING(150),
      addr: DataTypes.STRING(500),
      province: DataTypes.STRING(50),
      countryId: DataTypes.BIGINT,
      country: DataTypes.STRING(50),
      postalCode: DataTypes.STRING(50),
      sameWithMain: DataTypes.STRING(150),
      addr2: DataTypes.STRING(150),
      countryId2: DataTypes.BIGINT,
      country2: DataTypes.STRING(150),
      zip2: DataTypes.STRING(150),
      phone: DataTypes.STRING(150),
      owner: DataTypes.STRING(100),
      note: DataTypes.STRING(150),
      contact: DataTypes.STRING(500),
      contactName: DataTypes.STRING(150),
      contactPosition: DataTypes.STRING(150),
      contactEmail: DataTypes.STRING(150),
      contactPhoneType: DataTypes.STRING(150),
      contactPhoneNumber: DataTypes.STRING(150),
      contactStatus: DataTypes.STRING(150),
      contactNote: DataTypes.STRING(150),
      contactDefault: DataTypes.STRING(150),
      billing: DataTypes.STRING(500),
      billingBankName: DataTypes.STRING(150),
      billingBankAccountName: DataTypes.STRING(150),
      billingBranch: DataTypes.STRING(150),
      billingShow: DataTypes.STRING(150),
      billingSameWithMain: DataTypes.STRING(150),
      billingAddr: DataTypes.STRING(150),
      billingCountryId: DataTypes.BIGINT,
      billingCountry: DataTypes.STRING(150),
      billingZip: DataTypes.STRING(150),
      billingPhone: DataTypes.STRING(150),
      billingPic: DataTypes.STRING(150),
      billingBankNumber: DataTypes.STRING(150),
      npwpName: DataTypes.STRING(150),
      npwp: DataTypes.STRING(50),
      npwpAddr: DataTypes.STRING(500),
      pkp: DataTypes.STRING(50),
      nib: DataTypes.STRING(50),
      siup: DataTypes.STRING(50),
      siupDate: DataTypes.STRING(50),
      nppbkcName: DataTypes.STRING(150),
      taxNppbkcSameWithMain: DataTypes.STRING(150),
      nppbkcAddr: DataTypes.STRING(500),
      nppbkc: DataTypes.STRING(50),
      nppbkcDate: DataTypes.STRING(50),
      taxCountryId: DataTypes.BIGINT,
      taxCountry: DataTypes.STRING(150),
      taxPhone: DataTypes.STRING(150),
      taxPic: DataTypes.STRING(150),
      tdp: DataTypes.STRING(50),
      tdpDate: DataTypes.STRING(50),
      taxSameWithMain: DataTypes.STRING(150),
      incorporationDeed: DataTypes.STRING(100),
      incorporationDeedDate: DataTypes.STRING(50),
      amandmentDeed: DataTypes.STRING(100),
      amandmentDeedDate: DataTypes.STRING(50),
      directorName: DataTypes.STRING(100),
      directorNumber: DataTypes.STRING(50),
      shareholderName: DataTypes.STRING(10),
      shareholderPhone: DataTypes.STRING(150),
      delivery: DataTypes.STRING(500),
      deliverySameWithMain: DataTypes.STRING(150),
      deliveryAddr: DataTypes.STRING(150),
      deliveryCountryId: DataTypes.BIGINT,
      deliveryCountry: DataTypes.STRING(150),
      deliveryPostalCode: DataTypes.STRING(150),
      deliveryPhone: DataTypes.STRING(150),
      customerPic: DataTypes.STRING(150),
      customerStatus: DataTypes.STRING(150),
      customerDefault: DataTypes.STRING(150),
      customerTypeId: DataTypes.BIGINT,
      customerType2: DataTypes.STRING(50),
      customerGroupId: DataTypes.BIGINT,
      customerGroup: DataTypes.STRING(100),
      customerSegmentationId: DataTypes.BIGINT,
      customerSegmentationCode: DataTypes.STRING(150),
      customerSegmentation: DataTypes.STRING(100),
      customerRegionId: DataTypes.BIGINT,
      customerRegion: DataTypes.BIGINT,
      paymentTermId: DataTypes.BIGINT,
      paymentTerm: DataTypes.STRING(100),
      creditLimit: DataTypes.STRING(100),
      consignment: DataTypes.STRING(20),
      type: DataTypes.TINYINT
    },
    { withIsactive: true, withIsdel: true }
  ),
  StandardModel.buildStandardModelInformation('ix_customer_dt', 'IxCustomerDt', sequelize)
);

export { IxCustomer, IxCustomerDt };
