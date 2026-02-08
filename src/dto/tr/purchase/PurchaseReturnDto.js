import StandardDto from '../../StandardDto.js';

class PurchaseReturnDto extends StandardDto {
  #purchaseReturnId;
  #purchaseReturnCode;
  #purchaseReturnCodeTemp;
  #purchaseReturnDate;
  #traceId;
  #warehouseId;
  #supplierId;
  #currencyId;
  #currencyRate;
  #purchaseInvId;
  #purchaseInvCode;
  #purchaseInvDate;
  #paymentMethod;
  #coaId;
  #isvat;
  #notes;
  #totalQty;
  #subtotal;
  #discPersen;
  #discAmount;
  #discPersen2;
  #discAmount2;
  #discPersen3;
  #discAmount3;
  #vatPersen;
  #vatAmount;
  #taxPersen;
  #taxAmount;
  #total;
  #status;
  #statusNext;
  #confirmtime;
  #confirmby;
  #isedit;
  #confirmtimeF;
  #confirmbyF;

  constructor(dto) {
    super(dto);
    this.#purchaseReturnId = dto.purchase_return_id;
    this.#purchaseReturnCode = dto.purchase_return_code;
    this.#purchaseReturnCodeTemp = dto.purchase_return_code_temp;
    this.#purchaseReturnDate = dto.purchase_return_date;
    this.#traceId = dto.trace_id;
    this.#warehouseId = dto.warehouse_id;
    this.#supplierId = dto.supplier_id;
    this.#currencyId = dto.currency_id;
    this.#currencyRate = dto.currency_rate;
    this.#purchaseInvId = dto.purchase_inv_id;
    this.#purchaseInvCode = dto.purchase_inv_code;
    this.#purchaseInvDate = dto.purchase_inv_date;
    this.#paymentMethod = dto.payment_method;
    this.#coaId = dto.coa_id;
    this.#isvat = dto.isvat;
    this.#notes = dto.notes;
    this.#totalQty = dto.total_qty;
    this.#subtotal = dto.subtotal;
    this.#discPersen = dto.disc_persen;
    this.#discAmount = dto.disc_amount;
    this.#discPersen2 = dto.disc_persen2;
    this.#discAmount2 = dto.disc_amount2;
    this.#discPersen3 = dto.disc_persen3;
    this.#discAmount3 = dto.disc_amount3;
    this.#vatPersen = dto.vat_persen;
    this.#vatAmount = dto.vat_amount;
    this.#taxPersen = dto.tax_persen;
    this.#taxAmount = dto.tax_amount;
    this.#total = dto.total;
    this.#status = dto.status;
    this.#statusNext = dto.status_next;
    this.#confirmtime = dto.confirmtime;
    this.#confirmby = dto.confirmby;
    this.#isedit = dto.isedit;
    this.#confirmtimeF = dto.confirmtimeF;
    this.#confirmbyF = dto.confirmbyF;
  }

  get purchaseReturnId() {
    return this.#purchaseReturnId;
  }

  toModel() {
    return {
      purchaseReturnId: this.#purchaseReturnId,
      purchaseReturnCode: this.#purchaseReturnCode,
      purchaseReturnCodeTemp: this.#purchaseReturnCodeTemp,
      purchaseReturnDate: this.#purchaseReturnDate,
      traceId: this.#traceId,
      warehouseId: this.#warehouseId,
      supplierId: this.#supplierId,
      currencyId: this.#currencyId,
      currencyRate: this.#currencyRate,
      purchaseInvId: this.#purchaseInvId,
      purchaseInvCode: this.#purchaseInvCode,
      purchaseInvDate: this.#purchaseInvDate,
      paymentMethod: this.#paymentMethod,
      coaId: this.#coaId,
      isvat: this.#isvat,
      notes: this.#notes,
      totalQty: this.#totalQty,
      subtotal: this.#subtotal,
      discPersen: this.#discPersen,
      discAmount: this.#discAmount,
      discPersen2: this.#discPersen2,
      discAmount2: this.#discAmount2,
      discPersen3: this.#discPersen3,
      discAmount3: this.#discAmount3,
      vatPersen: this.#vatPersen,
      vatAmount: this.#vatAmount,
      taxPersen: this.#taxPersen,
      taxAmount: this.#taxAmount,
      total: this.#total,
      status: this.#status,
      statusNext: this.#statusNext,
      confirmtime: this.#confirmtime,
      confirmby: this.#confirmby,
      isedit: this.#isedit,
      confirmtimeF: this.#confirmtimeF,
      confirmbyF: this.#confirmbyF,
      ...super.toModel()
    };
  }
}

class PurchaseReturnDtDto extends StandardDto {
  #purchaseReturnDtId;
  #purchaseReturnId;
  #purchaseInDtId;
  #purchaseInvId;
  #purchaseInvCode;
  #itemId;
  #itemCode;
  #itemName;
  #qty;
  #price;
  #price2;
  #priceAvg;
  #discPersen;
  #discAmount;
  #disc3;
  #taxPersen;
  #taxAmount;
  #total;
  #isreturn;

  constructor(dto) {
    super(dto);
    this.#purchaseReturnDtId = dto.purchase_return_dt_id;
    this.#purchaseReturnId = dto.purchase_return_id;
    this.#purchaseInDtId = dto.purchase_inv_dt_id;
    this.#purchaseInvId = dto.purchase_inv_id;
    this.#purchaseInvCode = dto.purchase_inv_code;
    this.#itemId = dto.item_id;
    this.#itemCode = dto.item_code;
    this.#itemName = dto.item_name;
    this.#qty = dto.qty;
    this.#price = dto.price;
    this.#price2 = dto.price2;
    this.#priceAvg = dto.price_avg;
    this.#discPersen = dto.disc_persen;
    this.#discAmount = dto.disc_amount;
    this.#disc3 = dto.disc3;
    this.#taxPersen = dto.tax_persen;
    this.#taxAmount = dto.tax_amount;
    this.#total = dto.total;
    this.#isreturn = dto.isreturn;
  }
  get purchaseReturnDtId() {
    return this.#purchaseReturnDtId;
  }
  toModel() {
    return {
      purchaseReturnDtId: this.#purchaseReturnDtId,
      purchaseReturnId: this.#purchaseReturnId,
      purchaseInDtId: this.#purchaseInDtId,
      purchaseInvId: this.#purchaseInvId,
      purchaseInvCode: this.#purchaseInvCode,
      itemId: this.#itemId,
      itemCode: this.#itemCode,
      itemName: this.#itemName,
      qty: this.#qty,
      price: this.#price,
      price2: this.#price2,
      priceAvg: this.#priceAvg,
      discPersen: this.#discPersen,
      discAmount: this.#discAmount,
      disc3: this.#disc3,
      taxPersen: this.#taxPersen,
      taxAmount: this.#taxAmount,
      total: this.#total,
      isreturn: this.#isreturn,
      ...super.toModel()
    };
  }
}

class PurchaseReturnImgDto extends StandardDto {
  #purchaseReturnImgId;
  #imgName;
  #urlImg;
  constructor(dto) {
    super(dto);
    this.#purchaseReturnImgId = dto.purchase_return_img_id;
    this.#imgName = dto.img_name;
    this.#urlImg = dto.url_img;
  }
  get purchaseReturnImgId() {
    return this.#purchaseReturnImgId;
  }
  toModel() {
    return {
      purchaseReturnImgId: this.#purchaseReturnImgId,
      imgName: this.#imgName,
      urlImg: this.#urlImg,
      ...super.toModel()
    };
  }
}

class PurchaseReturnItemDtDto extends StandardDto {
  #purchaseReturnItemDtId;
  #purchaseReturnDtId;
  #purchaseReturnId;
  #itemStockDtId;
  #purchaseInvItemDtId;
  #itemId;
  #expDay;
  #expMonth;
  #expYear;
  #qty;
  constructor(dto) {
    super(dto);
    this.#purchaseReturnItemDtId = dto.purchase_return_item_dt_id;
    this.#purchaseReturnDtId = dto.purchase_return_dt_id;
    this.#purchaseReturnId = dto.purchase_return_id;
    this.#itemStockDtId = dto.item_stock_dt_id;
    this.#purchaseInvItemDtId = dto.purchase_inv_item_dt_id;
    this.#itemId = dto.item_id;
    this.#expDay = dto.exp_day;
    this.#expMonth = dto.exp_month;
    this.#expYear = dto.exp_year;
    this.#qty = dto.qty;
  }
  get purchaseReturnItemDtId() {
    return this.#purchaseReturnItemDtId;
  }
  toModel() {
    return {
      purchaseReturnItemDtId: this.#purchaseReturnItemDtId,
      purchaseReturnDtId: this.#purchaseReturnDtId,
      purchaseReturnId: this.#purchaseReturnId,
      itemStockDtId: this.#itemStockDtId,
      purchaseInvItemDtId: this.#purchaseInvItemDtId,
      itemId: this.#itemId,
      expDay: this.#expDay,
      expMonth: this.#expMonth,
      expYear: this.#expYear,
      qty: this.#qty
    };
  }
}

class PurchaseReturnRejectDto extends StandardDto {
  #purchaseReceiveRejectId;
  #purchaseReturnId;
  #note;
  #userId;

  constructor(dto) {
    super(dto);
    this.#purchaseReceiveRejectId = dto.purchase_return_reject_id;
    this.#purchaseReturnId = dto.purchase_return_id;
    this.#note = dto.note;
    this.#userId = dto.userId;
  }
  get purchaseReceiveRejectId() {
    return this.#purchaseReceiveRejectId;
  }
  toModel() {
    return {
      purchaseReceiveRejectId: this.#purchaseReceiveRejectId,
      purchaseReturnId: this.#purchaseReturnId,
      note: this.#note,
      userId: this.#userId,
      ...super.toModel()
    };
  }
}

class PurchaseRetrunRequestDto extends StandardDto {
  #purchaseReturnRequestId;
  #purchaseReturnId;
  #note;
  #statusRequest;
  #userId;

  constructor(dto) {
    super(dto);
    this.purchaseReturnRequestId = dto.purchase_return_request_id;
    this.purchaseReturnId = dto.purchase_return_id;
    this.#note = dto.note;
    this.#userId = dto.user_id;
    this.#statusRequest = dto.status_request;
  }
  get purchaseReturnRequestId() {
    return this.purchaseReturnRequestId;
  }
  toModel() {
    return {
      purchaseReturnRequestId: this.#purchaseReturnRequestId,
      purchaseReturnId: this.#purchaseReturnId,
      note: this.#note,
      userId: this.#userId,
      statusRequest: this.#statusRequest,
      ...super.toModel()
    };
  }
}
export {
  PurchaseReturnDto,
  PurchaseReturnDtDto,
  PurchaseReturnImgDto,
  PurchaseReturnItemDtDto,
  PurchaseReturnRejectDto,
  PurchaseRetrunRequestDto
};
