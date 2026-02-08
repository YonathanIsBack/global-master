import TrcSalesExport from "../../models/trc/TrcSalesExport.js";

class TrcSalesExportDto {
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
    const { trc_sales_export } = body;
    if (trc_sales_export == null || trc_sales_export.length == 0) {
      return;
    }

    this.#trcId = trc_sales_export[0].trc_id;
    this.#logTransaksiId = trc_sales_export[0].log_transaksi_id;
    this.#id = trc_sales_export[0].id;
    this.#transactionCode = trc_sales_export[0].transaction_code;
    this.#transactionDate = trc_sales_export[0].transaction_date;
    this.#transactionType = trc_sales_export[0].transaction_type;
    this.#transactionStatusAfter = trc_sales_export[0].transaction_status_after;
    this.#transactionStatusBefore = trc_sales_export[0].transaction_status_before;
    this.#traceId = trc_sales_export[0].trace_id;
    this.#page = trc_sales_export[0].page;
    this.#status = trc_sales_export[0].status;
    this.#cretime = trc_sales_export[0].cretime;
    this.#creby = trc_sales_export[0].creby;
    this.#ip = trc_sales_export[0].ip;
    this.#sequelizeModel = TrcSalesExport;
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

export default TrcSalesExportDto;