import StandardDto from '../../StandardDto.js';

class OffshorePurchasePaymentDto extends StandardDto {
  #offshorePurchasePaymentId;
  #offshorePurchasePaymentCode;
  #offshorePurchasePaymentCodeTemp;
  #offshorePurchasePaymentDate;
  #offshorePurchaseInvoiceId;
  #offshorePurchaseInvoiceCode;
  #traceId;
  #supplierId;
  #supplierBankId;
  #supplierPaymentId;
  #supplierBankAccountNo;
  #supplierBankAccountName;
  #swiftCode;
  #bankId;
  #bankCompanyId;
  #bankAccountNo;
  #bankAccountName;
  #branch;
  #currencyId;
  #currencyRate;
  #notes;
  #totalCoa;
  #totalInvoice;
  #totalPayment;
  #sisaInvoice;
  #totalCreditNote;
  #totalAdvPay;
  #total;
  #note;
  #isedit;
  #status;
  #statusNext;
  #confirmtime;
  #confirmby;
  #confirmtimeF;
  #confirmbyF;

  constructor(dto) {
    super(dto);
    this.#offshorePurchasePaymentId = dto.offshore_purchase_payment_id;
    this.#offshorePurchasePaymentCode = dto.offshore_purchase_payment_code;
    this.#offshorePurchasePaymentCodeTemp = dto.offshore_purchase_payment_code_temp;
    this.#offshorePurchasePaymentDate = dto.offshore_purchase_payment_date;
    this.#offshorePurchaseInvoiceId = dto.offshore_purchase_invoice_id;
    this.#offshorePurchaseInvoiceCode = dto.offshore_purchase_invoice_code;
    this.#traceId = dto.trace_id;
    this.#supplierId = dto.supplier_id;
    this.#supplierBankId = dto.supplier_bank_id;
    this.#supplierPaymentId = dto.supplier_payment_id;
    this.#supplierBankAccountNo = dto.supplier_bank_account_no;
    this.#supplierBankAccountName = dto.supplier_bank_account_name;
    this.#swiftCode = dto.swift_code;
    this.#bankId = dto.bank_id;
    this.#bankCompanyId = dto.bank_company_id;
    this.#bankAccountNo = dto.bank_account_no;
    this.#bankAccountName = dto.bank_account_name;
    this.#branch = dto.branch;
    this.#currencyId = dto.currency_id;
    this.#currencyRate = dto.currency_rate;
    this.#notes = dto.notes;
    this.#totalCoa = dto.total_coa;
    this.#totalInvoice = dto.total_invoice;
    this.#totalPayment = dto.total_payment;
    this.#sisaInvoice = dto.sisa_invoice;
    this.#totalCreditNote = dto.total_credit_note;
    this.#totalAdvPay = dto.total_adv_pay;
    this.#total = dto.total;
    this.#note = dto.note;
    this.#isedit = dto.isedit;
    this.#status = dto.status;
    this.#statusNext = dto.status_next;
    this.#confirmtime = dto.confirmtime;
    this.#confirmby = dto.confirmby;
    this.#confirmtimeF = dto.confirmtime_f;
    this.#confirmbyF = dto.confirmby_f;
  }

  get offshorePurchasePaymentId() {
    return this.#offshorePurchasePaymentId;
  }

  toModel() {
    return {
      offshorePurchasePaymentId: this.#offshorePurchasePaymentId,
      offshorePurchasePaymentCode: this.#offshorePurchasePaymentCode,
      offshorePurchasePaymentCodeTemp: this.#offshorePurchasePaymentCodeTemp,
      offshorePurchasePaymentDate: this.#offshorePurchasePaymentDate,
      offshorePurchaseInvoiceId: this.#offshorePurchaseInvoiceId,
      offshorePurchaseInvoiceCode: this.#offshorePurchaseInvoiceCode,
      traceId: this.#traceId,
      supplierId: this.#supplierId,
      supplierBankId: this.#supplierBankId,
      supplierPaymentId: this.#supplierPaymentId,
      supplierBankAccountNo: this.#supplierBankAccountNo,
      supplierBankAccountName: this.#supplierBankAccountName,
      swiftCode: this.#swiftCode,
      bankId: this.#bankId,
      bankCompanyId: this.#bankCompanyId,
      bankAccountNo: this.#bankAccountNo,
      bankAccountName: this.#bankAccountName,
      branch: this.#branch,
      currencyId: this.#currencyId,
      currencyRate: this.#currencyRate,
      notes: this.#notes,
      totalCoa: this.#totalCoa,
      totalInvoice: this.#totalInvoice,
      totalPayment: this.#totalPayment,
      sisaInvoice: this.#sisaInvoice,
      totalCreditNote: this.#totalCreditNote,
      totalAdvPay: this.#totalAdvPay,
      total: this.#total,
      note: this.#note,
      isedit: this.#isedit,
      status: this.#status,
      statusNext: this.#statusNext,
      confirmtime: this.#confirmtime,
      confirmby: this.#confirmby,
      confirmtimeF: this.#confirmtimeF,
      confirmbyF: this.#confirmbyF,
      ...super.toModel()
    };
  }
}

export default OffshorePurchasePaymentDto;
