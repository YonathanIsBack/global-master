class LogMasterDto {
  #logMasterId;
  #restoreLogMasterId;
  #id;
  #page;
  #before;
  #after;
  #status;
  #cretime;
  #creby;
  #ip;

  constructor(dto) {
    const { log_master } = dto;
    if (log_master == null) {
      return;
    }
    this.#logMasterId = log_master.log_master_id;
    this.#restoreLogMasterId = log_master.restore_log_master_id;
    this.#id = log_master.id;
    this.#page = log_master.page;
    this.#before = log_master.before;
    this.#after = log_master.after;
    this.#status = log_master.status;
    this.#cretime = log_master.cretime;
    this.#creby = log_master.creby;
    this.#ip = log_master.ip;
  }

  get logMasterId() {
    return this.#logMasterId;
  }

  toModel() {
    return {
      logMasterId: this.#logMasterId,
      restoreLogMasterId: this.#restoreLogMasterId,
      id: this.#id,
      page: this.#page,
      before: this.#before,
      after: this.#after,
      status: this.#status,
      cretime: this.#cretime,
      creby: this.#creby,
      ip: this.#ip
    };
  }
}

export default LogMasterDto;
