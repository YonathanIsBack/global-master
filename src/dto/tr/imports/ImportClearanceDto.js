import ObjectUtil from '../../../util/ObjectUtil.js';
import StandardDto from '../../StandardDto.js';

class ImportClearanceDto extends StandardDto {
  #importClearanceId;
  #importClearanceCode;
  #importClearanceCodeTemp;
  #importClearanceDate;
  #importStockTransferId;
  #importStockTransferCode;
  #importOrderId;
  #importOrderCode;
  #traceId;
  #supplierId;
  #warehouseId;
  #warehouseIdTo;
  #currencyId;
  #currencyRate;
  #ppn;
  #pph;
  #regisDate;
  #bc28;
  #ajuDate;
  #ajuNumber;
  #customesOffice;
  #note;
  #status;
  #statusNext;
  #isvat;
  #totalQty;
  #subtotal;
  #subtotalIdr;
  #discPersen;
  #discAmount;
  #discAmountIdr;
  #discPersen2;
  #discAmount2;
  #discAmountIdr2;
  #taxPersen;
  #taxAmount;
  #taxAmountIdr;
  #total;
  #totalIdr;
  #coaPibId;
  #totalPibDebit;
  #totalPibCredit;
  #totalPib;
  #coaId;
  #totalFund;
  #totalPayFinish;
  #cretime;
  #creby;
  #modtime;
  #modby;
  #confirmtime;
  #confirmby;
  #isedit;
  #confirmtimeF;
  #confirmbyF;

  constructor(dto) {
    super(dto);
    this.#importClearanceId = dto.import_clearance_id;
    this.#importClearanceCode = dto.import_clearance_code;
    this.#importClearanceCodeTemp = dto.import_clearance_code_temp;
    this.#importClearanceDate = ObjectUtil.defaultEmptyString(dto.import_clearance_date);
    this.#importStockTransferId = ObjectUtil.defaultEmptyString(dto.import_stock_transfer_id);
    this.#importStockTransferCode = dto.import_stock_transfer_code;
    this.#importOrderId = ObjectUtil.defaultEmptyString(dto.import_order_id);
    this.#importOrderCode = dto.import_order_code;
    this.#traceId = dto.trace_id;
    this.#supplierId = ObjectUtil.defaultEmptyString(dto.supplier_id);
    this.#warehouseId = ObjectUtil.defaultEmptyString(dto.warehouse_id);
    this.#warehouseIdTo = ObjectUtil.defaultEmptyString(dto.warehouse_id_to);
    this.#currencyId = ObjectUtil.defaultEmptyString(dto.currency_id);
    this.#currencyRate = dto.currency_rate;
    this.#ppn = dto.ppn;
    this.#pph = dto.pph;
    this.#regisDate = ObjectUtil.defaultEmptyString(dto.regis_date);
    this.#bc28 = dto.bc_28;
    this.#ajuDate = ObjectUtil.defaultEmptyString(dto.aju_date);
    this.#ajuNumber = dto.aju_number;
    this.#customesOffice = dto.customes_office;
    this.#note = dto.note;
    this.#status = dto.status;
    this.#statusNext = dto.status_next;
    this.#isvat = dto.isvat;
    this.#totalQty = dto.total_qty;
    this.#subtotal = dto.subtotal;
    this.#subtotalIdr = dto.subtotal_idr;
    this.#discPersen = dto.disc_persen;
    this.#discAmount = dto.disc_amount;
    this.#discAmountIdr = dto.disc_amount_idr;
    this.#discPersen2 = dto.disc_persen2;
    this.#discAmount2 = dto.disc_amount2;
    this.#discAmountIdr2 = dto.disc_amount2_idr;
    this.#taxPersen = dto.tax_persen;
    this.#taxAmount = dto.tax_amount;
    this.#taxAmountIdr = dto.tax_amount_idr;
    this.#total = dto.total;
    this.#totalIdr = dto.total_idr;
    this.#coaPibId = ObjectUtil.defaultEmptyString(dto.coa_pib_id);
    this.#totalPibDebit = dto.total_pib_debit;
    this.#totalPibCredit = dto.total_pib_credit;
    this.#totalPib = dto.total_pib;
    this.#coaId = ObjectUtil.defaultEmptyString(dto.coa_id);
    this.#totalFund = dto.total_fund;
    this.#totalPayFinish = dto.total_pay_finish;
    this.#cretime = dto.cretime;
    this.#creby = dto.creby;
    this.#modtime = dto.creby;
    this.#modby = dto.modtime;
    this.#isedit = dto.modby;
    this.#confirmtime = dto.confirmtime;
    this.#confirmby = dto.confirmby;
    this.#isedit = dto.isedit;
    this.#confirmtimeF = dto.confirmtime_f;
    this.#confirmbyF = dto.confirmby_f;
  }

  get importClearanceId() {
    return this.#importClearanceId;
  }

  toModel() {
    return {
      importClearanceId: this.#importClearanceId,
      importClearanceCode: this.#importClearanceCode,
      importClearanceCodeTemp: this.#importClearanceCodeTemp,
      importClearanceDate: this.#importClearanceDate,
      importStockTransferId: this.#importStockTransferId,
      importStockTransferCode: this.#importStockTransferCode,
      importOrderId: this.#importOrderId,
      importOrderCode: this.#importOrderCode,
      traceId: this.#traceId,
      supplierId: this.#supplierId,
      warehouseId: this.#warehouseId,
      warehouseIdTo: this.#warehouseIdTo,
      currencyId: this.#currencyId,
      currencyRate: this.#currencyRate,
      ppn: this.#ppn,
      pph: this.#pph,
      regisDate: this.#regisDate,
      bc28: this.#bc28,
      ajuDate: this.#ajuDate,
      ajuNumber: this.#ajuNumber,
      customesOffice: this.#customesOffice,
      note: this.#note,
      status: this.#status,
      statusNext: this.#statusNext,
      isvat: this.#isvat,
      totalQty: this.#totalQty,
      subtotal: this.#subtotal,
      subtotalIdr: this.#subtotalIdr,
      discPersen: this.#discPersen,
      discAmount: this.#discAmount,
      discAmountIdr: this.#discAmountIdr,
      discPersen2: this.#discPersen2,
      discAmount2: this.#discAmount2,
      discAmountIdr2: this.#discAmountIdr2,
      taxPersen: this.#taxPersen,
      taxAmount: this.#taxAmount,
      taxAmountIdr: this.#taxAmountIdr,
      total: this.#total,
      totalIdr: this.#totalIdr,
      coaPibId: this.#coaPibId,
      totalPibDebit: this.#totalPibDebit,
      totalPibCredit: this.#totalPibCredit,
      totalPib: this.#totalPib,
      coaId: this.#coaId,
      totalFund: this.#totalFund,
      totalPayFinish: this.#totalPayFinish,
      cretime: this.#cretime,
      creby: this.#creby,
      modtime: this.#modtime,
      modby: this.#modby,
      isedit: this.#isedit,
      confirmtime: this.#confirmtime,
      confirmby: this.#confirmby,
      isedit: this.#isedit,
      confirmtimeF: this.#confirmtimeF,
      confirmbyF: this.#confirmbyF,
      ...super.toModel()
    };
  }
}

class ImportClearanceDtDto extends StandardDto {
  #importClearanceDtId;
  #importClearanceId;
  #importStockTransferId;
  #importStockTransferDtId;
  #importStockTransferType;
  #importStockTransferCode;
  #bc16;
  #itemId;
  #itemCode;
  #itemName;
  #poNumber;
  #qtyImport;
  #qty;
  #qtyIi;
  #currencyId;
  #price;
  #priceT;
  #priceIdr;
  #price2;
  #priceAvg;
  #rate;
  #rateExcise;
  #rateTax;
  #ppn;
  #pph;
  #discPersen;
  #discAmount;
  #discAmountIdr;
  #disc3;
  #taxPersen;
  #taxAmount;
  #taxAmountIdr;
  #total;
  #totalIdr;
  #costBtl;
  #pibBtl;

  constructor(dto) {
    super(dto);
    this.#importClearanceDtId = dto.import_clearance_dt_id;
    this.#importClearanceId = dto.import_clearance_id;
    this.#importStockTransferId = dto.import_stock_transfer_id;
    this.#importStockTransferDtId = dto.import_stock_transfer_dt_id;
    this.#importStockTransferType = dto.import_stock_transfer_type;
    this.#importStockTransferCode = dto.import_stock_transfer_code;
    this.#bc16 = dto.bc_16;
    this.#itemId = dto.item_id;
    this.#itemCode = dto.item_code;
    this.#itemName = dto.item_name;
    this.#poNumber = dto.po_number;
    this.#qtyImport = dto.qty_import;
    this.#qty = dto.qty;
    this.#qtyIi = dto.qty_ii;
    this.#currencyId = dto.currency_id;
    this.#price = dto.price;
    this.#priceT = dto.price_t;
    this.#priceIdr = dto.price_idr;
    this.#price2 = dto.price2;
    this.#priceAvg = dto.price_avg;
    this.#rate = dto.rate;
    this.#rateExcise = dto.rate_excise;
    this.#rateTax = dto.rate_tax;
    this.#ppn = ObjectUtil.defaultEmptyString(dto.ppn);
    this.#pph = dto.pph;
    this.#discPersen = dto.discPersen;
    this.#discAmount = dto.discAmount;
    this.#discAmountIdr = dto.disc_amount_idr;
    this.#disc3 = dto.disc3;
    this.#taxPersen = dto.tax_persen;
    this.#taxAmount = dto.tax_amount;
    this.#taxAmountIdr = dto.tax_amount_idr;
    this.#total = dto.total;
    this.#totalIdr = dto.total_idr;
    this.#costBtl = dto.cost_btl;
    this.#pibBtl = dto.pib_btl;
  }
  get importClearanceDtId() {
    return this.#importClearanceDtId;
  }
  toModel() {
    return {
      importClearanceDtId: this.#importClearanceDtId,
      importClearanceId: this.#importClearanceId,
      importStockTransferId: this.#importStockTransferId,
      importStockTransferDtId: this.#importStockTransferDtId,
      importStockTransferType: this.#importStockTransferType,
      importStockTransferCode: this.#importStockTransferCode,
      bc16: this.#bc16,
      itemId: this.#itemId,
      itemCode: this.#itemCode,
      itemName: this.#itemName,
      poNumber: this.#poNumber,
      qtyImport: this.#qtyImport,
      qty: this.#qty,
      qtyIi: this.#qtyIi,
      currencyId: this.#currencyId,
      price: this.#price,
      priceT: this.#priceT,
      priceIdr: this.#priceIdr,
      price2: this.#price2,
      priceAvg: this.#priceAvg,
      rate: this.#rate,
      rateExcise: this.#rateExcise,
      rateTax: this.#rateTax,
      ppn: this.#ppn,
      pph: this.#pph,
      discPersen: this.#discPersen,
      discAmount: this.#discAmount,
      discAmountIdr: this.#discAmountIdr,
      disc3: this.#disc3,
      taxPersen: this.#taxPersen,
      taxAmount: this.#taxAmount,
      taxAmountIdr: this.#taxAmountIdr,
      total: this.#total,
      totalIdr: this.#totalIdr,
      costBtl: this.#costBtl,
      pibBtl: this.#pibBtl,
      ...super.toModel()
    };
  }
}

class ImportClearanceItemDtDto extends StandardDto {
  #importClearanceItemDtId;
  #importClearanceDtId;
  #importClearanceId;
  #importStockTransferItemDtId;
  #itemId;
  #expDayImport;
  #expMonthImport;
  #expYearImport;
  #expDay;
  #expMonth;
  #expYear;
  #qtyImport;
  #qty;

  constructor(dto) {
    super(dto);
    this.#importClearanceItemDtId = dto.import_clearance_item_dt_id;
    this.#importClearanceDtId = dto.import_clearance_dt_id;
    this.#importClearanceId = dto.import_clearance_id;
    this.#importStockTransferItemDtId = dto.import_stock_transfer_item_dt_id;
    this.#itemId = dto.item_id;
    this.#expDayImport = dto.exp_day_import;
    this.#expMonthImport = dto.exp_month_import;
    this.#expYearImport = dto.exp_year_import;
    this.#expDay = dto.exp_day;
    this.#expMonth = dto.exp_month;
    this.#expYear = dto.exp_year;
    this.#qtyImport = dto.qty_import;
    this.#qty = dto.qty;
  }
  get importClearanceItemDtId() {
    return this.#importClearanceItemDtId;
  }
  toModel() {
    return {
      importClearanceItemDtId: this.#importClearanceItemDtId,
      importClearanceDtId: this.#importClearanceDtId,
      importClearanceId: this.#importClearanceId,
      importStockTransferItemDtId: this.#importStockTransferItemDtId,
      itemId: this.#itemId,
      expDayImport: this.#expDayImport,
      expMonthImport: this.#expMonthImport,
      expYearImport: this.#expYearImport,
      expDay: this.#expDay,
      expMonth: this.#expMonth,
      expYear: this.#expYear,
      qtyImport: this.#qtyImport,
      qty: this.#qty,
      ...super.toModel()
    };
  }
}

class ImportClearanceRejectDto extends StandardDto {
  #importClearanceRejectId;
  #importClearanceId;
  #note;
  #userId;
  #cretime;
  #creby;

  constructor(dto) {
    super(dto);
    this.#importClearanceRejectId = dto.import_clearance_reject_id;
    this.#importClearanceId = dto.import_clearance_id;
    this.#note = dto.note;
    this.#userId = dto.userId;
    this.#cretime = dto.cretime;
    this.#creby = dto.creby;
  }
  get importClearanceRejectId() {
    return this.#importClearanceRejectId;
  }
  toModel() {
    return {
      importClearanceRejectId: this.#importClearanceRejectId,
      importClearanceId: this.#importClearanceId,
      note: this.#note,
      userId: this.#userId,
      cretime: this.#cretime,
      creby: this.#creby,
      ...super.toModel()
    };
  }
}

class ImportClearanceRequestDto extends StandardDto {
  #importClearanceRequestId;
  #importClearanceId;
  #note;
  #statusRequest;
  #userId;
  #cretime;
  #creby;

  constructor(dto) {
    super(dto);
    this.#importClearanceRequestId = dto.import_clearance_request_id;
    this.#importClearanceId = dto.import_clearance_id;
    this.#note = dto.note;
    this.#userId = dto.userId;
    this.#statusRequest = dto.status_request;
    this.#cretime = dto.cretime;
    this.#creby = dto.creby;
  }
  get importClearanceRequestId() {
    return this.#importClearanceRequestId;
  }
  toModel() {
    return {
      importClearanceRequestId: this.#importClearanceRequestId,
      importClearanceId: this.#importClearanceId,
      note: this.#note,
      userId: this.#userId,
      statusRequest: this.#statusRequest,
      cretime: this.#cretime,
      creby: this.#creby,
      ...super.toModel()
    };
  }
}

export { ImportClearanceDto, ImportClearanceDtDto, ImportClearanceItemDtDto, ImportClearanceRejectDto, ImportClearanceRequestDto };
