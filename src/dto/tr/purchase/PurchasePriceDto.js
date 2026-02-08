import StandardDto from '../../StandardDto.js';

class PurchasePriceDto extends StandardDto {
  #purchasePriceId;
  #traceId;
  #companyParentId;
  #companyId;
  #currencyId;
  #name;
  #publishTime;
  #status;
  #statusNext;

  constructor(dto) {
    super(dto);
    this.#purchasePriceId = dto.purchase_price_id;
    this.#traceId = dto.trace_id;
    this.#companyParentId = dto.company_parent_id;
    this.#companyId = dto.company_id;
    this.#currencyId = dto.currency_id;
    this.#name = dto.name;
    this.#publishTime = dto.publish_time;
    this.#status = dto.status;
    this.#statusNext = dto.status_next;
  }

  get purchasePriceId() {
    return this.#purchasePriceId;
  }

  toModel() {
    return {
      purchasePriceId: this.#purchasePriceId,
      traceId: this.#traceId,
      companyParentId: this.#companyParentId,
      companyId: this.#companyId,
      currencyId: this.#currencyId,
      name: this.#name,
      publishTime: this.#publishTime,
      status: this.#status,
      statusNext: this.#statusNext,
      ...super.toModel()
    };
  }
}

class PurchasePriceDtDto extends StandardDto {
  #purchasePriceDtId;
  #purchasePriceId;
  #itemId;
  #price;

  constructor(dto) {
    super(dto);
    this.#purchasePriceDtId = dto.purchase_price_dt_id;
    this.#purchasePriceId = dto.purchase_price_id;
    this.#itemId = item_id;
    this.#price = price;
  }
  get purchasePriceDtId() {
    return this.#purchasePriceDtId;
  }
  toModel() {
    return {
      purchasePriceDtId: this.#purchasePriceDtId,
      purchasePriceId: this.#purchasePriceId,
      itemId: this.#itemId,
      price: this.#price,
      ...super.toModel()
    };
  }
}

class PurchasePriceImportDto extends StandardDto {
  #purchasePriceImportId;
  #name;
  #publishTime;
  #status;
  #statusNext;
  constructor(dto) {
    super(dto);
    this.#purchasePriceImportId = dto.import_advanced_payment_reject_id;
    this.#name = dto.name;
    this.#publishTime = dto.publish_time;
    this.#status = dto.status;
    this.#statusNext = dto.status_next;
  }
  get purchasePriceImportId() {
    return this.#purchasePriceImportId;
  }
  toModel() {
    return {
      purchasePriceImportId: this.#purchasePriceImportId,
      name: this.#name,
      publishTime: this.#publishTime,
      status: this.#status,
      statusNext: this.#statusNext,
      ...super.toModel()
    };
  }
}

class PurchasePriceImportDtDto extends StandardDto {
  #purchasePriceImportDtId;
  #purchasePriceImportId;
  #currencyId;
  #currencyCode;
  #price;
  #priceT;

  constructor(dto) {
    super(dto);
    this.#purchasePriceImportDtId = dto.purchase_advanced_payment_reject_id;
    this.#purchasePriceImportId = dto.purchase_advanced_payment_id;
    this.#currencyId = dto.currency_id;
    this.#currencyCode = dto.currency_code;
    this.#price = dto.price;
    this.#priceT = dto.price_t;
  }
  get purchasePriceImportDtId() {
    return this.#purchasePriceImportDtId;
  }
  toModel() {
    return {
      purchasePriceImportDtId: this.#purchasePriceImportDtId,
      purchasePriceImportId: this.#purchasePriceImportId,
      currencyId: this.#currencyId,
      currencyCode: this.#currencyCode,
      price: this.#price,
      priceT: this.#priceT,
      ...super.toModel()
    };
  }
}

export { PurchasePriceDto, PurchasePriceDtDto, PurchasePriceImportDto, PurchasePriceImportDtDto };
