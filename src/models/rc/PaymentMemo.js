import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../configs/DatabaseConnection.js';
import StandardModel from '../StandardModel.js';

const sequelize = DatabaseConnectionSingleton.getConnection();

class PaymentMemo extends StandardModel {}
class PaymentMemoImg extends StandardModel {}

PaymentMemo.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('paymentMemoId', DataTypes.BIGINT),
      paymentMemoCode: DataTypes.STRING(50),
      paymentMemoCodeTemp: DataTypes.STRING(50),
      paymentMemoDate: DataTypes.DATE,
      coaSubgroupId: DataTypes.BIGINT,
      paymentMethod: DataTypes.TINYINT,
      chequeNumber: DataTypes.STRING(150),
      noteTransaction: DataTypes.TEXT,
      dueDate: DataTypes.DATE,
      coaBankId: DataTypes.BIGINT,
      istax: DataTypes.TINYINT,
      taxPercent: DataTypes.DOUBLE,
      currencyId: DataTypes.BIGINT,
      rate: DataTypes.DOUBLE,
      totalSpend: DataTypes.DOUBLE,
      name: DataTypes.STRING(150),
      npwpType: DataTypes.TINYINT,
      npwp: DataTypes.STRING(150),
      reffNumber: DataTypes.STRING(150),
      reffDate: DataTypes.DATE,
      taxNumber: DataTypes.STRING(150),
      countryId: DataTypes.BIGINT,
      swiftCode: DataTypes.STRING(100),
      notePayment: DataTypes.TEXT,
      bankId: DataTypes.BIGINT,
      bankAccNo: DataTypes.STRING(50),
      bankAccName: DataTypes.STRING(500),
      status: DataTypes.TINYINT,
      statusNext: DataTypes.TINYINT,
      confirmtimeF: DataTypes.DATE,
      confirmbyF: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),

  StandardModel.buildStandardModelInformation('rc_payment_memo', 'PaymentMemo', sequelize)
);

PaymentMemoImg.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('paymentMemoImgId', DataTypes.BIGINT),
      paymentMemoId: DataTypes.BIGINT,
      imgSrc: DataTypes.TEXT
    },
    { withIsactive: true, withIsdel: true, withCreate: true, withModify: true }
  ),

  StandardModel.buildStandardModelInformation('rc_payment_memo_img', 'PaymentMemoImg', sequelize)
);

export { PaymentMemo, PaymentMemoImg };
