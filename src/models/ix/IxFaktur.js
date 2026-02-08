import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxFaktur extends StandardModel { }
class IxFakturDt extends StandardModel { }

IxFaktur.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixFakturId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_faktur', 'IxFaktur', sequelize)
);

IxFakturDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixFakturDtId', DataTypes.BIGINT),
      ixFakturId: DataTypes.BIGINT,
      npwpPembeli: DataTypes.STRING(50),
      namaPembeli: DataTypes.STRING(150),
      kodeTransaksi: DataTypes.STRING(10),
      nomorFakturPajak: DataTypes.STRING(50),
      tanggalFakturPajak: DataTypes.DATE,
      masaPajak: DataTypes.TINYINT,
      tahunPajak: DataTypes.SMALLINT,
      statusFaktur: DataTypes.STRING(50),
      esignStatus: DataTypes.STRING(50),
      hargaJual: DataTypes.DOUBLE,
      dppNilaiLain: DataTypes.DOUBLE,
      ppn: DataTypes.DOUBLE,
      ppnbm: DataTypes.DOUBLE,
      penadatangan: DataTypes.STRING(150),
      referensi: DataTypes.STRING(100),
      dipalorkanPenjual: DataTypes.STRING(50),
      dilaporkanPemungut: DataTypes.STRING(50),
    },
    { withIsactive: true, withIsdel: true }
  ),
  StandardModel.buildStandardModelInformation('ix_faktur_dt', 'IxFakturDt', sequelize)
);

export {
  IxFaktur,
  IxFakturDt
};

