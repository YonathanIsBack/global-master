class LogTransaksiDto {
  #logTransaksiId;
  #id;
  #transactionCode;
  #transactionType;
  #page;
  #before;
  #after;
  #status;
  #cretime;
  #creby;
  #ip;

  constructor(dto) {
    const { log_transaksi } = dto;
    if (!Array.isArray(log_transaksi) || log_transaksi.length === 0 || log_transaksi[0] == null) {
      return;
    }
    this.#logTransaksiId = log_transaksi[0].log_transaksi_id;
    this.#id = log_transaksi[0].id;
    this.#transactionCode = log_transaksi[0].transaction_code;
    this.#transactionType = log_transaksi[0].transaction_type;
    this.#page = log_transaksi[0].page;
    this.#before = log_transaksi[0].before;
    this.#after = log_transaksi[0].after;
    this.#status = log_transaksi[0].status;
    this.#cretime = log_transaksi[0].cretime;
    this.#creby = log_transaksi[0].creby;
    this.#ip = log_transaksi[0].ip;
  }

  get logTransaksiId() {
    return this.#logTransaksiId;
  }

  toModel() {
    return {
      logTransaksiId: this.#logTransaksiId,
      id: this.#id,
      transactionCode: this.#transactionCode,
      transactionType: this.#transactionType,
      page: this.#page,
      before: this.#before,
      after: this.#after,
      status: this.#status,
      cretime: this.#cretime,
      creby: this.#creby,
      ip: this.#ip,
    };
  }
}

export default LogTransaksiDto;
