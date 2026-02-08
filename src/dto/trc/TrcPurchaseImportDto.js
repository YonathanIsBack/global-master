import TrcPurchaseImport from "../../models/trc/TrcPurchaseImport.js";

class TrcPurchaseImportDto {
  #trcId;
  #logTransaksiId;
  #id;
  #transactionCode;
  #transactionDate;
  #transactionType;
  #transactionStatusAfter;
  #transactionStatusBefore;
  #traceId;
  #page;
  #status;
  #cretime;
  #creby;
  #ip;
  #sequelizeModel;

  constructor(body) {
    const { trc_purchase_import } = body;
    if (trc_purchase_import == null || trc_purchase_import.length == 0) {
      return;
    }

    this.#trcId = trc_purchase_import[0].trc_id;
    this.#logTransaksiId = trc_purchase_import[0].log_transaksi_id;
    this.#id = trc_purchase_import[0].id;
    this.#transactionCode = trc_purchase_import[0].transaction_code;
    this.#transactionDate = trc_purchase_import[0].transaction_date;
    this.#transactionType = trc_purchase_import[0].transaction_type;
    this.#transactionStatusAfter = trc_purchase_import[0].transaction_status_after;
    this.#transactionStatusBefore = trc_purchase_import[0].transaction_status_before;
    this.#traceId = trc_purchase_import[0].trace_id;
    this.#page = trc_purchase_import[0].page;
    this.#status = trc_purchase_import[0].status;
    this.#cretime = trc_purchase_import[0].cretime;
    this.#creby = trc_purchase_import[0].creby;
    this.#ip = trc_purchase_import[0].ip;
    this.#sequelizeModel = TrcPurchaseImport;
  }

  get trcId() {
    return this.#trcId;
  }

  get sequelizeModel() {
    return this.#sequelizeModel;
  }

  toModel() {
    return {
      trcId: this.#trcId,
      logTransaksiId: this.#logTransaksiId,
      id: this.#id,
      transactionCode: this.#transactionCode,
      transactionDate: this.#transactionDate,
      transactionType: this.#transactionType,
      transactionStatusAfter: this.#transactionStatusAfter,
      transactionStatusBefore: this.#transactionStatusBefore,
      traceId: this.#traceId,
      page: this.#page,
      status: this.#status,
      cretime: this.#cretime,
      creby: this.#creby,
      ip: this.#ip,
    };
  }
}

export default TrcPurchaseImportDto;