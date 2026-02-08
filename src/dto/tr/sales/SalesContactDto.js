import StandardDto from '../../StandardDto.js';

class SalesContractDto extends StandardDto {
  #salesContractId;
  #salesContractCode;
  #salesContractCodeTemp;
  #salesContractDate;
  #traceId;
  #startDate;
  #endDate;
  #paymentTermId;
  #customerId;
  #addr;
  #billingAddr;
  #note;
  #status;
  #statusNext;
  #total;
  #confirmtime;
  #confirmby;
  #isedit;
  #confirmtimeF;
  #confirmbyF;

  constructor(dto) {
    super(dto);
    this.#salesContractId = dto.sales_contract_id;
    this.#salesContractCode = dto.sales_contract_code;
    this.#salesContractCodeTemp = dto.sales_contract_code_temp;
    this.#salesContractDate = dto.sales_contract_date;
    this.#traceId = dto.trace_id;
    this.#startDate = dto.start_date;
    this.#endDate = dto.end_date;
    this.#paymentTermId = dto.payment_term_id;
    this.#customerId = dto.customer_id;
    this.#addr = dto.addr;
    this.#billingAddr = dto.billing_addr;
    this.#note = dto.note;
    this.#status = dto.status;
    this.#statusNext = dto.status_next;
    this.#total = dto.total;
    this.#confirmtime = dto.confirmtime;
    this.#confirmby = dto.confirmby;
    this.#isedit = dto.isedit;
    this.#confirmtimeF = dto.confirmtime_f;
    this.#confirmbyF = dto.confirmby_f;
  }

  get salesContractId() {
    return this.#salesContractId;
  }

  toModel() {
    return {
      salesContractId: this.#salesContractId,
      salesContractCode: this.#salesContractCode,
      salesContractCodeTemp: this.#salesContractCodeTemp,
      salesContractDate: this.#salesContractDate,
      traceId: this.#traceId,
      startDate: this.#startDate,
      endDate: this.#endDate,
      paymentTermId: this.#paymentTermId,
      customerId: this.#customerId,
      addr: this.#addr,
      billingAddr: this.#billingAddr,
      note: this.#note,
      status: this.#status,
      statusNext: this.#statusNext,
      total: this.#total,
      confirmtime: this.#confirmtime,
      confirmby: this.#confirmby,
      isedit: this.#isedit,
      confirmtimeF: this.#confirmtimeF,
      confirmbyF: this.#confirmbyF,
      ...super.toModel()
    };
  }
}

class SalesContractDtDto extends StandardDto {
  #salesContractDtId;
  #salesContractId;
  #itemId;
  #itemName;
  #itemCode;
  #qty;
  #unit;
  #price;
  #price2;
  #priceAvg;
  #total;

  constructor(dto) {
    super(dto);
    this.#salesContractDtId = dto.sales_contract_dt_id;
    this.#salesContractId = dto.sales_contract_id;
    this.#itemId = dto.item_id;
    this.#itemName = dto.item_name;
    this.#itemCode = dto.item_code;
    this.#qty = dto.qty;
    this.#unit = dto.unit;
    this.#price = dto.price;
    this.#price2 = dto.price2;
    this.#priceAvg = dto.price_avg;
    this.#total = dto.total;
  }

  get salesContractDtId() {
    return this.#salesContractDtId;
  }

  toModel() {
    return {
      salesContractDtId: this.#salesContractDtId,
      salesContractId: this.#salesContractId,
      itemId: this.#itemId,
      itemName: this.#itemName,
      itemCode: this.#itemCode,
      qty: this.#qty,
      unit: this.#unit,
      price: this.#price,
      price2: this.#price2,
      priceAvg: this.#priceAvg,
      total: this.#total,
      ...super.toModel()
    };
  }
}

class SalesContractItemDtDto extends StandardDto {
  #salesContractItemDtId;
  #salesContractDtId;
  #salesContractId;
  #itemStockDtId;
  #itemId;
  #expDay;
  #expMonth;
  #expYear;
  #qty;
  constructor(dto) {
    super(dto);
    this.#salesContractItemDtId = dto.sales_contract_dt_id;
    this.#salesContractDtId = dto.sales_contract_dt_id;
    this.#salesContractId = dto.sales_contract_id;
    this.#itemStockDtId = dto.item_stock_dt_id;
    this.#itemId = dto.item_id;
    this.#expDay = dto.exp_day;
    this.#expMonth = dto.exp_month;
    this.#expYear = dto.exp_year;
    this.#qty = dto.qty;
  }

  get salesContractItemDtId() {
    return this.#salesContractItemDtId;
  }

  toModel() {
    return {
      salesContractItemDtId: this.#salesContractItemDtId,
      salesContractDtId: this.#salesContractDtId,
      salesContractId: this.#salesContractId,
      itemStockDtId: this.#itemStockDtId,
      itemId: this.#itemId,
      expDay: this.#expDay,
      expMonth: this.#expMonth,
      expYear: this.#expYear,
      qty: this.#qty,
      ...super.toModel()
    };
  }
}

class SalesContractRejectDto extends StandardDto {
  #salesContractRejectId;
  #salesContractId;
  #note;
  #userId;

  constructor(dto) {
    super(dto);
    this.#salesContractRejectId = dto.sales_contract_reject_id;
    this.#salesContractId = dto.sales_contract_id;
    this.#note = dto.note;
    this.#userId = dto.userId;
  }

  get salesContractRejectId() {
    return this.#salesContractRejectId;
  }

  toModel() {
    return {
      salesContractRejectId: this.#salesContractRejectId,
      importReturnId: this.#salesContractId,
      note: this.#note,
      userId: this.#userId,
      ...super.toModel()
    };
  }
}

class SalesContractRequestDto extends StandardDto {
  #salesContractRequestId;
  #salesContractId;
  #note;
  #statusRequest;
  #userId;

  constructor(dto) {
    super(dto);
    this.#salesContractRequestId = dto.sales_contract_request_id;
    this.#salesContractId = dto.sales_contract_id;
    this.#note = dto.note;
    this.#userId = dto.userId;
    this.#statusRequest = dto.status_request;
  }

  get salesContractRequestId() {
    return this.#salesContractRequestId;
  }

  toModel() {
    return {
      salesContractRequestId: this.#salesContractRequestId,
      salesContractId: this.#salesContractId,
      note: this.#note,
      userId: this.#userId,
      statusRequest: this.#statusRequest,
      ...super.toModel()
    };
  }
}

export { SalesContractDto, SalesContractDtDto, SalesContractItemDtDto, SalesContractRejectDto, SalesContractRequestDto };
