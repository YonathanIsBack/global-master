import TrcOffshorePurchase from "../../models/trc/TrcOffshorePurchase.js";

class TrcOffshorePurchaseDto {
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
    const { trc_offshore_purchase } = body;
    if (trc_offshore_purchase == null || trc_offshore_purchase.length == 0) {
      return;
    }

    this.#trcId = trc_offshore_purchase[0].trc_id;
    this.#logTransaksiId = trc_offshore_purchase[0].log_transaksi_id;
    this.#id = trc_offshore_purchase[0].id;
    this.#transactionCode = trc_offshore_purchase[0].transaction_code;
    this.#transactionDate = trc_offshore_purchase[0].transaction_date;
    this.#transactionType = trc_offshore_purchase[0].transaction_type;
    this.#transactionStatusAfter = trc_offshore_purchase[0].transaction_status_after;
    this.#transactionStatusBefore = trc_offshore_purchase[0].transaction_status_before;
    this.#traceId = trc_offshore_purchase[0].trace_id;
    this.#page = trc_offshore_purchase[0].page;
    this.#status = trc_offshore_purchase[0].status;
    this.#cretime = trc_offshore_purchase[0].cretime;
    this.#creby = trc_offshore_purchase[0].creby;
    this.#ip = trc_offshore_purchase[0].ip;
    this.#sequelizeModel = TrcOffshorePurchase;
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

export default TrcOffshorePurchaseDto;