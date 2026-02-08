import StandardDto from '../../StandardDto.js';

class PurchaseAdvancePaymentDto extends StandardDto {
  #purchaseAdvpayId;
  #purchaseOrderId;
  #purchaseOrderCode;
  #purchaseAdvpayCode;
  #purchaseAdvpayCodeTemp;
  #purchaseAdvpayDate;
  #traceId;
  #reffNumber;
  #memoNumber;
  #supplierId;
  #supplierBankId;
  #supplierBankAccountNo;
  #supplierBankAccountName;
  #bankId;
  #bankCompanyId;
  #bankAccountNo;
  #bankAccountName;
  #coaId;
  #taxNo;
  #currencyId;
  #currencyRate;
  #percentOrder;
  #totalOrder;
  #totalDp;
  #totalDpUsed;
  #persenVat;
  #totalVat;
  #total;
  #totalAfterVat;
  #status;
  #statusNext;
  #type;
  #notes;
  #isedit;
  #confirmtime;
  #confirmby;
  #confirmtimeF;
  #confirmbyF;

  constructor(dto) {
    super(dto);
    this.#purchaseAdvpayId = dto.purchase_advpay_id;
    this.#purchaseOrderId = dto.purchase_order_id;
    this.#purchaseOrderCode = dto.purchase_order_code;
    this.#purchaseAdvpayCode = dto.purchase_advpay_code;
    this.#purchaseAdvpayCodeTemp = dto.purchase_advpay_code_temp;
    this.#purchaseAdvpayDate = dto.purchase_advpay_date;
    this.#traceId = dto.trace_id;
    this.#reffNumber = dto.reff_number;
    this.#memoNumber = dto.memo_number;
    this.#supplierId = dto.supplier_id;
    this.#supplierBankId = dto.supplier_bank_id;
    this.#supplierBankAccountNo = dto.supplier_bank_account_no;
    this.#supplierBankAccountName = dto.supplier_bank_account_name;
    this.#bankId = dto.bank_id;
    this.#bankCompanyId = dto.bank_company_id;
    this.#bankAccountNo = dto.bank_account_no;
    this.#bankAccountName = dto.bank_account_name;
    this.#coaId = dto.coa_id;
    this.#taxNo = dto.tax_no;
    this.#currencyId = dto.currency_id;
    this.#currencyRate = dto.currency_rate;
    this.#percentOrder = dto.percent_order;
    this.#totalOrder = dto.total_order;
    this.#totalDp = dto.total_dp;
    this.#totalDpUsed = dto.total_dp_used;
    this.#persenVat = dto.persen_vat;
    this.#totalVat = dto.total_vat;
    this.#total = dto.total;
    this.#totalAfterVat = dto.total_after_vat;
    this.#status = dto.status;
    this.#statusNext = dto.status_next;
    this.#type = dto.type;
    this.#notes = dto.notes;
    this.#isedit = dto.isedit;
    this.#confirmtime = dto.confirmtime;
    this.#confirmby = dto.confirmby;
    this.#confirmtimeF = dto.confirmtime_f;
    this.#confirmbyF = dto.confirmby_f;
  }

  get purchaseAdvpayId() {
    return this.#purchaseAdvpayId;
  }

  toModel() {
    return {
      purchaseAdvpayId: this.#purchaseAdvpayId,
      purchaseOrderId: this.#purchaseOrderId,
      purchaseOrderCode: this.#purchaseOrderCode,
      purchaseAdvpayCode: this.#purchaseAdvpayCode,
      purchaseAdvpayCodeTemp: this.#purchaseAdvpayCodeTemp,
      purchaseAdvpayDate: this.#purchaseAdvpayDate,
      traceId: this.#traceId,
      reffNumber: this.#reffNumber,
      memoNumber: this.#memoNumber,
      supplierId: this.#supplierId,
      supplierBankId: this.#supplierBankId,
      supplierBankAccountNo: this.#supplierBankAccountNo,
      supplierBankAccountName: this.#supplierBankAccountName,
      bankId: this.#bankId,
      bankCompanyId: this.#bankCompanyId,
      bankAccountNo: this.#bankAccountNo,
      bankAccountName: this.#bankAccountName,
      coaId: this.#coaId,
      taxNo: this.#taxNo,
      currencyId: this.#currencyId,
      currencyRate: this.#currencyRate,
      percentOrder: this.#percentOrder,
      totalOrder: this.#totalOrder,
      totalDp: this.#totalDp,
      totalDpUsed: this.#totalDpUsed,
      persenVat: this.#persenVat,
      totalVat: this.#totalVat,
      total: this.#total,
      totalAfterVat: this.#totalAfterVat,
      status: this.#status,
      statusNext: this.#statusNext,
      type: this.#type,
      notes: this.#notes,
      isedit: this.#isedit,
      confirmtime: this.#confirmtime,
      confirmby: this.#confirmby,
      confirmtimeF: this.#confirmtimeF,
      confirmbyF: this.#confirmbyF,
      ...super.toModel()
    };
  }
}

class PurchaseAdvancePaymentDtDto extends StandardDto {
  #purchaseAdvpayDtId;
  #purchaseAdvpayId;
  #date;
  #amount;

  constructor(dto) {
    super(dto);
    this.#purchaseAdvpayDtId = dto.purchase_advpay_dt_id;
    this.#purchaseAdvpayId = dto.purchase_advpay_id;
    this.#date = date;
    this.#amount = amount;
  }
  get purchaseAdvpayDtId() {
    return this.#purchaseAdvpayDtId;
  }
  toModel() {
    return {
      purchaseAdvpayDtId: this.#purchaseAdvpayDtId,
      purchaseAdvpayId: this.#purchaseAdvpayId,
      date: this.#date,
      amount: this.#amount,
      ...super.toModel()
    };
  }
}

class PurchaseAdvancePaymentImgDto extends StandardDto {
  #purchaseAdvpayImgId;
  #purchaseAdvpayId;
  #imgName;
  #urlImg;

  constructor(dto) {
    super(dto);
    this.#purchaseAdvpayImgId = dto.import_advanced_payment_reject_id;
    this.#purchaseAdvpayId = dto.import_advanced_payment_id;
    this.#imgName = dto.img_name;
    this.#urlImg = dto.url_img;
  }
  get purchaseAdvpayImgId() {
    return this.#purchaseAdvpayImgId;
  }
  toModel() {
    return {
      purchaseAdvpayImgId: this.#purchaseAdvpayImgId,
      purchaseAdvpayId: this.#purchaseAdvpayId,
      imgName: this.#imgName,
      urlImg: this.#urlImg,
      ...super.toModel()
    };
  }
}

class PurchaseAdvancePaymentRejectDto extends StandardDto {
  #purchaseAdvancedPaymentRejectId;
  #purchaseAdvancedPaymentId;
  #note;
  #userId;

  constructor(dto) {
    super(dto);
    this.#purchaseAdvancedPaymentRejectId = dto.purchase_advanced_payment_reject_id;
    this.#purchaseAdvancedPaymentId = dto.purchase_advanced_payment_id;
    this.#note = dto.note;
    this.#userId = dto.userId;
  }
  get purchaseAdvancedPaymentRejectId() {
    return this.#purchaseAdvancedPaymentRejectId;
  }
  toModel() {
    return {
      purchaseAdvancedPaymentRejectId: this.#purchaseAdvancedPaymentRejectId,
      purchaseAdvancedPaymentId: this.#purchaseAdvancedPaymentId,
      note: this.#note,
      userId: this.#userId,
      ...super.toModel()
    };
  }
}

class PurchaseAdvancePaymentRequestDto extends StandardDto {
  #purchaseAdvancedPaymentRequestId;
  #purchaseAdvancedPaymentId;
  #note;
  #statusRequest;
  #userId;

  constructor(dto) {
    super(dto);
    this.purchaseAdvancedPaymentRequestId = dto.purchase_advanced_payment_request_id;
    this.purchaseAdvancedPaymentId = dto.purchase_advanced_payment_id;
    this.#note = dto.note;
    this.#userId = dto.user_id;
    this.#statusRequest = dto.status_request;
  }
  get purchaseAdvancedPaymentRequestId() {
    return this.purchaseAdvancedPaymentRequestId;
  }
  toModel() {
    return {
      purchaseAdvancedPaymentRequestId: this.#purchaseAdvancedPaymentRequestId,
      purchaseAdvancedPaymentId: this.#purchaseAdvancedPaymentId,
      note: this.#note,
      userId: this.#userId,
      statusRequest: this.#statusRequest,
      ...super.toModel()
    };
  }
}
export {
  PurchaseAdvancePaymentDto,
  PurchaseAdvancePaymentDtDto,
  PurchaseAdvancePaymentImgDto,
  PurchaseAdvancePaymentRejectDto,
  PurchaseAdvancePaymentRequestDto
};
