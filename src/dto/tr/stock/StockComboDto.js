import StandardDto from '../../StandardDto.js';

class StockComboDto extends StandardDto {
  #stockComboId;
  #stockComboCode;
  #stockComboCodeTemp;
  #stockComboDate;
  #itemId;
  #itemName;
  #itemCode;
  #whId;
  #qty;
  #price;
  #startDate;
  #endDate;
  #reff;
  #note;
  #status;
  #statusNext;
  #isedit;
  #confirmtime;
  #confirmby;
  #confirmtimeF;
  #confirmbyF;

  constructor(body) {
    super(body);
    this.#stockComboId = body.stock_combo_id;
    this.#stockComboCode = body.stock_combo_code;
    this.#stockComboCodeTemp = body.stock_combo_code_temp;
    this.#stockComboDate = body.stock_combo_date;
    this.#itemId = body.item_id;
    this.#itemName = body.item_name;
    this.#itemCode = body.item_code;
    this.#whId = body.wh_id;
    this.#qty = body.qty;
    this.#price = body.price;
    this.#startDate = body.start_date;
    this.#endDate = body.end_date;
    this.#reff = body.reff;
    this.#note = body.note;
    this.#status = body.status;
    this.#statusNext = body.status_next;
    this.#isedit = body.isedit;
    this.#confirmtime = body.confirmtime;
    this.#confirmby = body.confirmby;
    this.#confirmtimeF = body.confirmtime_f;
    this.#confirmbyF = body.confirmby_f;
  }

  get stockComboId() {
    return this.#stockComboId;
  }

  toModel() {
    return {
      stockComboId: this.#stockComboId,
      stockComboCode: this.#stockComboCode,
      stockComboCodeTemp: this.#stockComboCodeTemp,
      stockComboDate: this.#stockComboDate,
      itemId: this.#itemId,
      itemName: this.#itemName,
      itemCode: this.#itemCode,
      whId: this.#whId,
      qty: this.#qty,
      price: this.#price,
      startDate: this.#startDate,
      endDate: this.#endDate,
      reff: this.#reff,
      note: this.#note,
      status: this.#status,
      statusNext: this.#statusNext,
      isedit: this.#isedit,
      confirmtime: this.#confirmtime,
      confirmby: this.#confirmby,
      confirmtimeF: this.#confirmtimeF,
      confirmbyF: this.#confirmbyF,
      ...super.toModel()
    };
  }
}

class StockComboDtDto extends StandardDto {
  #stockComboDtId;
  #stockComboId;
  #itemId;
  #itemCode;
  #itemName;
  #qty;

  constructor(body) {
    super(body);
    this.#stockComboDtId = body.stock_combo_dt_id;
    this.#stockComboId = body.stock_combo_id;
    this.#itemId = body.item_id;
    this.#itemCode = body.item_code;
    this.#itemName = body.item_name;
    this.#qty = body.qty;
  }

  get stockComboDtId() {
    return this.#stockComboDtId;
  }

  toModel() {
    return {
      stockComboDtId: this.#stockComboDtId,
      stockComboId: this.#stockComboId,
      itemId: this.#itemId,
      itemCode: this.#itemCode,
      itemName: this.#itemName,
      qty: this.#qty,
      ...super.toModel()
    };
  }
}
class StockComboRecordDto extends StandardDto {
  #stockComboRecordId;
  #stockComboId;
  #itemId;
  #itemName;
  #itemCode;
  #whId;
  #qty;
  #used;
  #price;
  #hargaFix;
  #priceT;
  #hargaFixT;

  constructor(body) {
    super(body);
    this.#stockComboRecordId = body.stock_combo_record_id;
    this.#stockComboId = body.stock_combo_id;
    this.#itemId = body.item_id;
    this.#itemName = body.item_name;
    this.#itemCode = body.item_code;
    this.#whId = body.wh_id;
    this.#qty = body.qty;
    this.#used = body.used;
    this.#price = body.price;
    this.#hargaFix = body.harga_fix;
    this.#priceT = body.price_t;
    this.#hargaFixT = body.harga_fix_t;
  }

  get stockComboRecordId() {
    return this.#stockComboRecordId;
  }

  toModel() {
    return {
      stockComboRecordId: this.#stockComboRecordId,
      stockComboId: this.#stockComboId,
      itemId: this.#itemId,
      itemName: this.#itemName,
      itemCode: this.#itemCode,
      whId: this.#whId,
      qty: this.#qty,
      used: this.#used,
      price: this.#price,
      hargaFix: this.#hargaFix,
      priceT: this.#priceT,
      hargaFixT: this.#hargaFixT,
      ...super.toModel()
    };
  }
}
class StockComboRecordDtDto extends StandardDto {
  #stockComboRecordDtId;
  #stockComboRecordId;
  #stockComboId;
  #stockComboDtId;
  #whId;
  #itemId;
  #itemCode;
  #itemName;
  #qty;
  #used;
  #hargaFix;
  #hargaFixT;

  constructor(body) {
    super(body);
    this.#stockComboRecordDtId = body.stock_combo_record_dt_id;
    this.#stockComboRecordId = body.stock_combo_record_id;
    this.#stockComboId = body.stock_combo_id;
    this.#stockComboDtId = body.stock_combo_dt_id;
    this.#whId = body.wh_id;
    this.#itemId = body.item_id;
    this.#itemCode = body.item_code;
    this.#itemName = body.item_name;
    this.#qty = body.qty;
    this.#used = body.used;
    this.#hargaFix = body.harga_fix;
    this.#hargaFixT = body.harga_fix_t;
  }
}
class StockComboRejectDto extends StandardDto {
  #stockComboRejectId;
  #stockComboId;
  #note;
  #userId;

  constructor(body) {
    super(body);
    this.#stockComboRejectId = body.stock_combo_reject_id;
    this.#stockComboId = body.stock_combo_id;
    this.#note = body.note;
    this.#userId = body.user_id;
  }

  get stockComboRejectId() {
    return this.#stockComboRejectId;
  }

  toModel() {
    return {
      stockComboRejectId: this.#stockComboRejectId,
      stockComboId: this.#stockComboId,
      note: this.#note,
      userId: this.#userId,
      ...super.toModel()
    };
  }
}
class StockComboRequestDto extends StandardDto {
  #stockComboRequestId;
  #stockComboId;
  #note;
  #statusRequest;
  #userId;

  constructor(body) {
    super(body);
    this.#stockComboRequestId = this.stock_combo_request_id;
    this.#stockComboId = this.stock_combo_id;
    this.#note = this.note;
    this.#statusRequest = this.status_request;
    this.#userId = this.user_id;
  }

  get stockComboRequestId() {
    return this.#stockComboRequestId;
  }

  toModel() {
    return {
      stockComboRequestId: this.#stockComboRequestId,
      stockComboId: this.#stockComboId,
      note: this.#note,
      statusRequest: this.#statusRequest,
      userId: this.#userId,
      ...super.toModel()
    };
  }
}
class StockComboReverseDto extends StandardDto {
  #stockComboReverseId;
  #stockComboReverseCode;
  #stockComboReverseCodeTemp;
  #stockComboReverseDate;
  #itemId;
  #itemName;
  #itemCode;
  #whId;
  #qty;
  #price;
  #startDate;
  #endDate;
  #reff;
  #note;
  #status;
  #statusNext;
  #isedit;
  #confirmtime;
  #confirmby;
  #confirmtimeF;
  #confirmbyF;

  constructor(body) {
    super(body);
    this.#stockComboReverseId = body.stock_combo_reverse_id;
    this.#stockComboReverseCode = body.stock_combo_reverse_code;
    this.#stockComboReverseCodeTemp = body.stock_combo_reverse_code_temp;
    this.#stockComboReverseDate = body.stock_combo_reverse_date;
    this.#itemId = body.item_id;
    this.#itemName = body.item_name;
    this.#itemCode = body.item_code;
    this.#whId = body.wh_id;
    this.#qty = body.qty;
    this.#price = body.price;
    this.#startDate = body.start_date;
    this.#endDate = body.end_date;
    this.#reff = body.reff;
    this.#note = body.note;
    this.#status = body.status;
    this.#statusNext = body.status_next;
    this.#isedit = body.isedit;
    this.#confirmtime = body.confirmtime;
    this.#confirmby = body.confirmby;
    this.#confirmtimeF = body.confirmtime_f;
    this.#confirmbyF = body.confirmby_f;
  }

  get stockComboReverseId() {
    return this.#stockComboReverseId;
  }

  toModel() {
    return {
      stockComboReverseId: this.#stockComboReverseId,
      stockComboReverseCode: this.#stockComboReverseCode,
      stockComboReverseCodeTemp: this.#stockComboReverseCodeTemp,
      stockComboReverseDate: this.#stockComboReverseDate,
      itemId: this.#itemId,
      itemName: this.#itemName,
      itemCode: this.#itemCode,
      whId: this.#whId,
      qty: this.#qty,
      price: this.#price,
      startDate: this.#startDate,
      endDate: this.#endDate,
      reff: this.#reff,
      note: this.#note,
      status: this.#status,
      statusNext: this.#statusNext,
      isedit: this.#isedit,
      confirmtime: this.#confirmtime,
      confirmby: this.#confirmby,
      confirmtimeF: this.#confirmtimeF,
      confirmbyF: this.#confirmbyF,
      ...super.toModel()
    };
  }
}
class StockComboReverseDtDto extends StandardDto {
  #stockComboReverseDtId;
  #stockComboReverseId;
  #itemId;
  #itemCode;
  #itemName;
  #qty;

  constructor(body) {
    super(body);
    this.#stockComboReverseDtId = body.stock_combo_reverse_dt_id;
    this.#stockComboReverseId = body.stock_combo_reverse_id;
    this.#itemId = body.item_id;
    this.#itemCode = body.item_code;
    this.#itemName = body.item_name;
    this.#qty = body.qty;
  }

  get stockComboReverseDtId() {
    return this.#stockComboReverseDtId;
  }

  toModel() {
    return {
      stockComboReverseDtId: this.#stockComboReverseDtId,
      stockComboReverseId: this.#stockComboReverseId,
      itemId: this.#itemId,
      itemCode: this.#itemCode,
      itemName: this.#itemName,
      qty: this.#qty,
      ...super.toModel()
    };
  }
}
class StockComboReverseRejectDto extends StandardDto {
  #stockComboReverseRejectId;
  #stockComboReverseId;
  #note;
  #userId;

  constructor(body) {
    super(body);
    this.#stockComboReverseRejectId = body.stock_combo_reverse_reject_id;
    this.#stockComboReverseId = body.stock_combo_reverse_id;
    this.#note = body.note;
    this.#userId = body.user_id;
  }

  get stockComboReverseRejectId() {
    return this.#stockComboReverseRejectId;
  }

  toModel() {
    return {
      stockComboReverseRejectId: this.#stockComboReverseRejectId,
      stockComboReverseId: this.#stockComboReverseId,
      note: this.#note,
      userId: this.#userId,
      ...super.toModel()
    };
  }
}
class StockComboReverseRequestDto extends StandardDto {
  #stockComboReverseRequestId;
  #stockComboReverseId;
  #note;
  #statusRequest;
  #userId;

  constructor(body) {
    super(body);
    this.#stockComboReverseRequestId = body.stock_combo_reverse_request_id;
    this.#stockComboReverseId = body.stock_combo_reverse_id;
    this.#note = body.note;
    this.#statusRequest = body.status_request;
    this.#userId = body.user_id;
  }

  get stockComboReverseRequestId() {
    return this.#stockComboReverseRequestId;
  }

  toModel() {
    return {
      stockComboReverseRequestId: this.#stockComboReverseRequestId,
      stockComboReverseId: this.#stockComboReverseId,
      note: this.#note,
      statusRequest: this.#statusRequest,
      userId: this.#userId,
      ...super.toModel()
    };
  }
}

export {
  StockComboDto,
  StockComboDtDto,
  StockComboRecordDto,
  StockComboRecordDtDto,
  StockComboRejectDto,
  StockComboRequestDto,
  StockComboReverseDto,
  StockComboReverseDtDto,
  StockComboReverseRejectDto,
  StockComboReverseRequestDto
};
