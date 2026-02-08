import StandardDto from './StandardDto.js';

class TransCodeDto extends StandardDto {
  #transCodeId;
  #transCodeGroupId;
  #transCodeName;
  #transCode;
  #numberNow;

  constructor(dto) {
    super(dto);
    this.#transCodeId = dto.trans_code_id;
    this.#transCodeGroupId = dto.trans_code_group_id;
    this.#transCodeName = dto.trans_code_name;
    this.#transCode = dto.trans_code;
    this.#numberNow = dto.number_now;
  }

  get transCodeId() {
    return this.#transCodeId;
  }

  toModel() {
    return {
      transCodeId: this.#transCodeId,
      transCodeGroupId: this.#transCodeGroupId,
      transCodeName: this.#transCodeName,
      transCode: this.#transCode,
      numberNow: this.#numberNow,
      ...super.toModel()
    };
  }
}

class TransCodeGroupDto extends StandardDto {
  #transCodeGroupId;
  #transCodeGroupName;

  constructor(dto) {
    super(dto);
    this.#transCodeGroupId = dto.trans_code_group_id;
    this.#transCodeGroupName = dto.trans_code_group_name;
  }

  get transCodeGroupId() {
    return this.#transCodeGroupId;
  }

  toModel() {
    return {
      transCodeGroupId: this.#transCodeGroupId,
      companyParentId: this.#transCodeGroupName,
      ...super.toModel()
    };
  }
}

class TransactionCodeDto extends StandardDto {
  #transactionCodeId;
  #dbId;
  #companyParentId;
  #pQuote;
  #pOrder;
  #pReciept;
  #pInvoice;
  #pInvoiceDirect;
  #pReturn;
  #pPayment;
  #pAdvancePayment;
  #iQuote;
  #iOrder;
  #iReciept;
  #iInvoice;
  #iStockTransfer;
  #iClearance;
  #iReturn;
  #iPayment;
  #iAdvancePayment;
  #sQuote;
  #sOrder;
  #sDeliveryNote;
  #sDeliveryFixed;
  #sInvoice;
  #sInvoiceDirect;
  #sDeposit;
  #sReciept;
  #sReturn;
  #sContract;
  #eQuote;
  #eOrder;
  #ePackingList;
  #eInvoice;
  #eDeposit;
  #eReciept;
  #eReturn;
  #oQuote;
  #oOrder;
  #oPackingList;
  #oInvoice;
  #oDeposit;
  #oReciept;
  #oReturn;
  #isTransfer;
  #isOpnameOrder;
  #isOpnameResult;
  #isAdjustment;
  #fAdjustment;
  #pcIn;
  #pcOut;
  #bIn;
  #bOut;
  #jGeneral;
  #jDeferal;
  #jPrepaid;
  #jUndentifiedReciept;
  #aPurchase;
  #aPaymentRegister;
  #aTransfer;
  #aWriteOff;
  #icCombo;

  constructor(dto) {
    super(dto);
    this.#transactionCodeId = dto.transaction_code_id;
    this.#dbId = dto.db_id;
    this.#companyParentId = dto.company_parent_id;
    this.#pQuote = dto.p_quote;
    this.#pOrder = dto.p_order;
    this.#pReciept = dto.p_reciept;
    this.#pInvoice = dto.p_invoice;
    this.#pInvoiceDirect = dto.p_invoice_direct;
    this.#pReturn = dto.p_return;
    this.#pPayment = dto.p_payment;
    this.#pAdvancePayment = dto.p_advance_payment;
    this.#iQuote = dto.i_quote;
    this.#iOrder = dto.i_order;
    this.#iReciept = dto.i_reciept;
    this.#iInvoice = dto.i_invoice;
    this.#iStockTransfer = dto.i_stock_transfer;
    this.#iClearance = dto.i_clearance;
    this.#iReturn = dto.i_return;
    this.#iPayment = dto.i_payment;
    this.#iAdvancePayment = dto.i_advance_payment;
    this.#sQuote = dto.s_quote;
    this.#sOrder = dto.s_order;
    this.#sDeliveryNote = dto.s_delivery_note;
    this.#sDeliveryFixed = dto.s_delivery_fixed;
    this.#sInvoice = dto.s_invoice;
    this.#sInvoiceDirect = dto.s_invoice_direct;
    this.#sDeposit = dto.s_deposit;
    this.#sReciept = dto.s_reciept;
    this.#sReturn = dto.s_return;
    this.#sContract = dto.s_contract;
    this.#eQuote = dto.e_quote;
    this.#eOrder = dto.e_order;
    this.#ePackingList = dto.e_packing_list;
    this.#eInvoice = dto.e_invoice;
    this.#eDeposit = dto.e_deposit;
    this.#eReciept = dto.e_reciept;
    this.#eReturn = dto.e_return;
    this.#oQuote = dto.o_quote;
    this.#oOrder = dto.o_order;
    this.#oPackingList = dto.o_packing_list;
    this.#oInvoice = dto.o_invoice;
    this.#oDeposit = dto.o_deposit;
    this.#oReciept = dto.o_reciept;
    this.#oReturn = dto.o_return;
    this.#isTransfer = dto.is_transfer;
    this.#isOpnameOrder = dto.is_opname_order;
    this.#isOpnameResult = dto.is_opname_result;
    this.#isAdjustment = dto.is_adjustment;
    this.#fAdjustment = dto.f_adjustment;
    this.#pcIn = dto.pc_in;
    this.#pcOut = dto.pc_out;
    this.#bIn = dto.b_in;
    this.#bOut = dto.b_out;
    this.#jGeneral = dto.j_general;
    this.#jDeferal = dto.j_deferal;
    this.#jPrepaid = dto.j_prepaid;
    this.#jUndentifiedReciept = dto.j_undentified_reciept;
    this.#aPurchase = dto.a_purchase;
    this.#aPaymentRegister = dto.a_payment_register;
    this.#aTransfer = dto.a_transfer;
    this.#aWriteOff = dto.a_write_off;
    this.#icCombo = dto.ic_combo;
  }

  get transactionCodeId() {
    return this.#transactionCodeId;
  }

  toModel() {
    return {
      transactionCodeId: this.#transactionCodeId,
      dbId: this.#dbId,
      companyParentId: this.#companyParentId,
      pQuote: this.#pQuote,
      pOrder: this.#pOrder,
      pReciept: this.#pReciept,
      pInvoice: this.#pInvoice,
      pInvoiceDirect: this.#pInvoiceDirect,
      pReturn: this.#pReturn,
      pPayment: this.#pPayment,
      pAdvancePayment: this.#pAdvancePayment,
      iQuote: this.#iQuote,
      iOrder: this.#iOrder,
      iReciept: this.#iReciept,
      iInvoice: this.#iInvoice,
      iStockTransfer: this.#iStockTransfer,
      iClearance: this.#iClearance,
      iReturn: this.#iReturn,
      iPayment: this.#iPayment,
      iAdvancePayment: this.#iAdvancePayment,
      sQuote: this.#sQuote,
      sOrder: this.#sOrder,
      sDeliveryNote: this.#sDeliveryNote,
      sDeliveryFixed: this.#sDeliveryFixed,
      sInvoice: this.#sInvoice,
      sInvoiceDirect: this.#sInvoiceDirect,
      sDeposit: this.#sDeposit,
      sReciept: this.#sReciept,
      sReturn: this.#sReturn,
      sContract: this.#sContract,
      eQuote: this.#eQuote,
      eOrder: this.#eOrder,
      ePackingList: this.#ePackingList,
      eInvoice: this.#eInvoice,
      eDeposit: this.#eDeposit,
      eReciept: this.#eReciept,
      eReturn: this.#eReturn,
      oQuote: this.#oQuote,
      oOrder: this.#oOrder,
      oPackingList: this.#oPackingList,
      oInvoice: this.#oInvoice,
      oDeposit: this.#oDeposit,
      oReciept: this.#oReciept,
      oReturn: this.#oReturn,
      isTransfer: this.#isTransfer,
      isOpnameOrder: this.#isOpnameOrder,
      isOpnameResult: this.#isOpnameResult,
      isAdjustment: this.#isAdjustment,
      fAdjustment: this.#fAdjustment,
      pcIn: this.#pcIn,
      pcOut: this.#pcOut,
      bIn: this.#bIn,
      bOut: this.#bOut,
      jGeneral: this.#jGeneral,
      jDeferal: this.#jDeferal,
      jPrepaid: this.#jPrepaid,
      jUndentifiedReciept: this.#jUndentifiedReciept,
      aPurchase: this.#aPurchase,
      aPaymentRegister: this.#aPaymentRegister,
      aTransfer: this.#aTransfer,
      aWriteOff: this.#aWriteOff,
      icCombo: this.#icCombo
    };
  }
}

class NoTransactionDto extends StandardDto {
  #noTransactionId;
  #noTransactionName;
  #noTransactionPrefix;
  #digit;
  #resetTime;

  constructor(dto) {
    super(dto);
    this.#noTransactionId = dto.no_transaction_id;
    this.#noTransactionName = dto.no_transaction_name;
    this.#noTransactionPrefix = dto.no_transaction_prefix;
    this.#digit = dto.digit;
    this.#resetTime = dto.reset_time;
  }

  get noTransactionId() {
    return this.#noTransactionId;
  }

  toModel() {
    return {
      noTransactionId: this.#noTransactionId,
      noTransactionName: this.#noTransactionName,
      noTransactionPrefix: this.#noTransactionPrefix,
      digit: this.#digit,
      resetTime: this.#resetTime,
      ...super.toModel()
    };
  }
}

export { TransCodeDto, TransCodeGroupDto, TransactionCodeDto, NoTransactionDto };
