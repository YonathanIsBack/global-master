import StandardDto from '../../StandardDto.js';

class OffshorePurchaseAdvancedPaymentDto extends StandardDto {
  #offshorePurchaseAdvpayId;
  #offshorePurchaseOrderId;
  #offshorePurchaseOrderCode;
  #offshorePurchaseAdvpayCode;
  #offshorePurchaseAdvpayCodeTemp;
  #offshorePurchaseAdvpayDate;
  #traceId;
  #coaId;
  #currencyId;
  #currencyRate;
  #supplierId;
  #supplierBankId;
  #supplierBankAccountNo;
  #supplierBankAccountName;
  #bankId;
  #bankCompanyId;
  #bankAccountNo;
  #bankAccountName;
  #reffNumber;
  #notes;
  #percentOrder;
  #totalOrder;
  #totalDp;
  #totalDpUsed;
  #persenVat;
  #totalVat;
  #total;
  #statusNext;
  #isedit;
  #status;
  #confirmtime;
  #confirmby;
  #confirmtimeF;
  #confirmbyF;

  constructor(dto) {
    super(dto);
    this.#offshorePurchaseAdvpayId = dto.offshore_purchase_advpay_id;
    this.#offshorePurchaseOrderId = dto.offshore_purchase_order_id;
    this.#offshorePurchaseOrderCode = dto.offshore_purchase_order_code;
    this.#offshorePurchaseAdvpayCode = dto.offshore_purchase_advpay_code;
    this.#offshorePurchaseAdvpayCodeTemp = dto.offshore_purchase_advpay_code_temp;
    this.#offshorePurchaseAdvpayDate = dto.offshore_purchase_advpay_date;
    this.#traceId = dto.trace_id;
    this.#coaId = dto.coa_id;
    this.#currencyId = dto.currency_id;
    this.#currencyRate = dto.currency_rate;
    this.#supplierId = dto.supplier_id;
    this.#supplierBankId = dto.supplier_bank_id;
    this.#supplierBankAccountNo = dto.supplier_bank_account_no;
    this.#supplierBankAccountName = dto.supplier_bank_account_name;
    this.#bankId = dto.bank_id;
    this.#bankCompanyId = dto.bank_company_id;
    this.#bankAccountNo = dto.bank_account_no;
    this.#bankAccountName = dto.bank_account_name;
    this.#reffNumber = dto.reff_number;
    this.#notes = dto.notes;
    this.#percentOrder = dto.percent_order;
    this.#totalOrder = dto.total_order;
    this.#totalDp = dto.total_dp;
    this.#totalDpUsed = dto.total_dp_used;
    this.#persenVat = dto.persen_vat;
    this.#totalVat = dto.total_vat;
    this.#total = dto.total;
    this.#statusNext = dto.status_next;
    this.#isedit = dto.isedit;
    this.#status = dto.status;
    this.#confirmtime = dto.confirmtime;
    this.#confirmby = dto.confirmby;
    this.#confirmtimeF = dto.confirmtime_f;
    this.#confirmbyF = dto.confirmby_f;
  }

  get offshorePurchaseAdvpayId() {
    return this.#offshorePurchaseAdvpayId;
  }

  toModel() {
    return {
      offshorePurchaseAdvpayId: this.#offshorePurchaseAdvpayId,
      offshorePurchaseOrderId: this.#offshorePurchaseOrderId,
      offshorePurchaseOrderCode: this.#offshorePurchaseOrderCode,
      offshorePurchaseAdvpayCode: this.#offshorePurchaseAdvpayCode,
      offshorePurchaseAdvpayCodeTemp: this.#offshorePurchaseAdvpayCodeTemp,
      offshorePurchaseAdvpayDate: this.#offshorePurchaseAdvpayDate,
      traceId: this.#traceId,
      coaId: this.#coaId,
      currencyId: this.#currencyId,
      currencyRate: this.#currencyRate,
      supplierId: this.#supplierId,
      supplierBankId: this.#supplierBankId,
      supplierBankAccountNo: this.#supplierBankAccountNo,
      suppierBankAccountName: this.#supplierBankAccountName,
      bankId: this.#bankId,
      bankCompanyId: this.#bankCompanyId,
      bankAccountNo: this.#bankAccountNo,
      bankAccountName: this.#bankAccountName,
      reffNumber: this.#reffNumber,
      notes: this.#notes,
      percentOrder: this.#percentOrder,
      totalOrder: this.#totalOrder,
      totalDp: this.#totalDp,
      totalDpUsed: this.#totalDpUsed,
      persenVat: this.#persenVat,
      totalVat: this.#totalVat,
      total: this.#total,
      statusNext: this.#statusNext,
      isedit: this.#isedit,
      status: this.#status,
      confirmtime: this.#confirmtime,
      confirmby: this.#confirmby,
      confirmtimeF: this.#confirmtimeF,
      confirmbyF: this.#confirmbyF,
      ...super.toModel()
    };
  }
}

export default OffshorePurchaseAdvancedPaymentDto;
