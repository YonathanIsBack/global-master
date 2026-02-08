import StandardDto from '../../StandardDto.js';

class OffshoreSalesPaymentDto extends StandardDto {
  #offshoreSalesPaymentId;
  #offshoreSalesPaymentCode;
  #offshoreSalesPaymentCodeTemp;
  #offshoreSalesPaymentDate;
  #offshoreSalesInvoiceId;
  #offshoreSalesInvoiceCode;
  #traceId;
  #customerId;
  #customerBankId;
  #customerPaymentId;
  #customerBankAccountNo;
  #customerBankAccountName;
  #currencyId;
  #currencyRate;
  #notes;
  #totalCoa;
  #totalInvoice;
  #totalPayment;
  #sisaInvoice;
  #total;
  #note;
  #status;
  #statusNext;
  #confirmtime;
  #confirmby;
  

  constructor(dto) {
    super(dto);
    this.#offshoreSalesPaymentId = dto.offshore_sales_payment_id;
    this.#offshoreSalesPaymentCode = dto.offshore_sales_payment_code;
    this.#offshoreSalesPaymentCodeTemp = dto.offshore_sales_payment_code_temp;
    this.#offshoreSalesPaymentDate = dto.offshore_sales_payment_date;
    this.#offshoreSalesInvoiceId = dto.offshore_sales_invoice_id;
    this.#offshoreSalesInvoiceCode = dto.offshore_sales_invoice_code;
    this.#traceId = dto.trace_id;
    this.#customerId = dto.customer_id;
    this.#customerBankId = dto.customer_bank_id;
    this.#customerPaymentId = dto.customer_payment_id;
    this.#customerBankAccountNo = dto.customer_bank_account_no;
    this.#customerBankAccountName = dto.customer_bank_account_name;
    this.#currencyId = dto.currency_id;
    this.#currencyRate = dto.currency_rate;
    this.#notes = dto.notes;
    this.#totalCoa = dto.total_coa;
    this.#totalInvoice = dto.total_invoice;
    this.#totalPayment = dto.total_payment;
    this.#sisaInvoice = dto.sisa_invoice;
    this.#total = dto.total;
    this.#note = dto.note;
    this.#status = dto.isedit;
    this.#statusNext = dto.status;
    this.#confirmtime = dto.confirmtime;
    this.#confirmby = dto.confirmby;
  }

  get offshoreSalesPaymentId() {
    return this.#offshoreSalesPaymentId;
  }

  toModel() {
    return {
      offshoreSalesPaymentId: this.#offshoreSalesPaymentId,
      offshoreSalesPaymentCode: this.#offshoreSalesPaymentCode,
      offshoreSalesPaymentCodeTemp: this.#offshoreSalesPaymentCodeTemp,
      offshoreSalesPaymentDate: this.#offshoreSalesPaymentDate,
      offshoreSalesInvoiceId: this.#offshoreSalesInvoiceId,
      offshoreSalesInvoiceCode: this.#offshoreSalesInvoiceCode,
      traceId: this.#traceId,
      customerId: this.#customerId,
      customerBankId: this.#customerBankId,
      customerPaymentId: this.#customerPaymentId,
      customerBankAccountNo: this.#customerBankAccountNo,
      customerBankAccountName: this.#customerBankAccountName,
      currencyId: this.#currencyId,
      currencyRate: this.#currencyRate,
      notes: this.#notes,
      totalCoa: this.#totalCoa,
      totalInvoice: this.#totalInvoice,
      totalPayment: this.#totalPayment,
      sisaInvoice: this.#sisaInvoice,
      total: this.#total,
      note: this.#note,
      status: this.#status,
      statusNext: this.#statusNext,
      confirmtime: this.#confirmtime,
      confirmby: this.#confirmby,
      ...super.toModel()
    };
  }
}

export default OffshoreSalesPaymentDto;
