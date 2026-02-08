import ObjectUtil from '../util/ObjectUtil.js';
import LogMasterDto from './LogMasterDto.js';
import LogTransaksiDto from './LogTransaksiDto.js';
import TransactionCountDto from './no/TransactionCountDto.js';
import TrcOffshorePurchaseDto from './trc/TrcOffshorePurchaseDto.js';
import TrcOffshoreSalesDto from './trc/TrcOffshoreSalesDto.js';
import TrcPurchaseImportDto from './trc/TrcPurchaseImportDto.js';
import TrcPurchaseLocalDto from './trc/TrcPurchaseLocalDto.js';
import TrcSalesExportDto from './trc/TrcSalesExportDto.js';
import TrcSalesLocalDto from './trc/TrcSalesLocalDto.js';

class StandardDto {
  #dbId;
  #isActive;
  #isDel;
  #isused;
  #cretime;
  #creby;
  #modTime;
  #modBy;
  #logMasterDto;
  #noTransactionCount;
  #logTransaksi;
  #traceDto;
  #traceDtos;
  #detailsData;
  #deleteDetailsData;

  constructor(body) {
    this.#dbId = body.db_id;
    this.#isActive = body.isactive;
    this.#isDel = body.isdel;
    this.#cretime = body.cretime;
    this.#creby = body.creby;
    this.#modTime = body.modtime;
    this.#modBy = body.modby;
    this.#isused = body.isused;
    this.#logMasterDto = new LogMasterDto(body);
    this.#noTransactionCount = new TransactionCountDto(body);
    this.#logTransaksi = new LogTransaksiDto(body);
    this.#traceDto = this.#handleTraceDto(body);
    this.#traceDtos = [];
    this.#detailsData = {};
    this.#deleteDetailsData = {};

    this.#handleDetailsData(body);
    this.#handleDeleteDetailData(body);
    this.#handleTraceDtos(body);
  }

  #handleTraceDto(body) {
    if (body.trc_purchase_local != null) {
      return new TrcPurchaseLocalDto(body);
    }
    if (body.trc_purchase_import != null) {
      return new TrcPurchaseImportDto(body);
    }
    if (body.trc_sales_export != null) {
      return new TrcSalesExportDto(body);
    }
    if (body.trc_sales_local != null) {
      return new TrcSalesLocalDto(body);
    }
    if (body.trc_offshore_purchase != null) {
      return new TrcOffshorePurchaseDto(body);
    }
  }

  #handleTraceDtos(body) {
    if (body.trc_purchase_local != null) {
      body.trc_purchase_local.forEach(element => {
        this.#traceDtos.push(new TrcPurchaseLocalDto({ trc_purchase_local: [element] }));
      });
      return;
    }
    if (body.trc_purchase_import != null) {
      body.trc_purchase_import.forEach(element => {
        this.#traceDtos.push(new TrcPurchaseImportDto({ trc_purchase_import: [element] }));
      });
      return;
    }
    if (body.trc_sales_export != null) {
      body.trc_sales_export.forEach(element => {
        this.#traceDtos.push(new TrcSalesExportDto({ trc_sales_export: [element] }));
      });
      return;
    }
    if (body.trc_sales_local != null) {
      body.trc_sales_local.forEach(element => {
        this.#traceDtos.push(new TrcSalesLocalDto({ trc_sales_local: [element] }));
      });
      return;
    }
    if (body.trc_offshore_purchase != null) {
      body.trc_offshore_purchase.forEach(element => {
        this.#traceDtos.push(new TrcOffshorePurchaseDto({ trc_offshore_purchase: [element] }));
      });
      return;
    }
    if (body.trc_offshore_sales != null) {
      body.trc_offshore_sales.forEach(element => {
        this.#traceDtos.push(new TrcOffshoreSalesDto({ trc_offshore_sales: [element] }));
      });
      return;
    }
  }

  #handleDetailsData(body) {
    const excludedDetails = ['log_master', 'no_transaction_count', 'log_transaksi', 'trc_purchase_import', 'trc_purchase_local', 'trc_sales_export', 'trc_sales_local', 'trc_offshore_purchase', 'trc_offshore_sales'];
    const detailTableNames = Object.keys(body).filter((key) => {
      if (!Array.isArray(body[key]) || excludedDetails.includes(key)) {
        return false;
      }

      return true;
    });

    if (detailTableNames == null) {
      return;
    }

    detailTableNames.forEach((tableName) => {
      const sanitizedDetails = this.#sanitizeDetails(body[tableName]);

      this.#detailsData[tableName] = sanitizedDetails;
    });
  }

  #handleDeleteDetailData(body) {
    const deletedDetails = Object.keys(body).filter(key => key.includes('_delete') && ObjectUtil.isObject(body[key]));

    deletedDetails.forEach(deletedDetail => this.#deleteDetailsData[deletedDetail.replace('_delete', '')] = body[deletedDetail]);
  }

  #sanitizeDetails(details) {
    details.map(detail => {
      const detailKey = Object.keys(detail);
      detailKey.forEach(key => {
        detail[key] = ObjectUtil.defaultEmptyString(detail[key]);
      });
      return detail;
    });

    return details;
  }

  get detailsData() {
    return this.#detailsData;
  }

  set detailsData(detailsData) {
    this.#detailsData = detailsData;
  }

  get deleteDetailsData() {
    return this.#deleteDetailsData;
  }

  get logMasterDto() {
    return this.#logMasterDto;
  }

  get noTransactionCount() {
    return this.#noTransactionCount;
  }

  get logTransaksi() {
    return this.#logTransaksi;
  }

  get traceDto() {
    return this.#traceDto;
  }

  get traceDtos() {
    return this.#traceDtos;
  }

  toModel() {
    return {
      dbId: this.#dbId,
      isactive: this.#isActive,
      isdel: this.#isDel,
      isused: this.#isused,
      cretime: this.#cretime,
      creby: this.#creby,
      modtime: this.#modTime,
      modby: this.#modBy
    };
  }
}

export default StandardDto;
