import StandardDto from './StandardDto.js';

class BuyingPriceLisImportDto extends StandardDto {
  #purchasePriceImportId;
  #name;
  #publishTime;
  #status;
  #statusNext;

  constructor(dto) {
    super(dto);
    this.#purchasePriceImportId = dto.purchase_price_import_id;
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

class BuyingPriceLisImportDetailDto extends StandardDto {
  purchasePriceImportDtId;
  #purchasePriceId;
  #currencyId;
  #currencyCode;
  #itemId;
  #price;
  #priceT;

  constructor(dto) {
    super(dto);
    this.purchasePriceImportDtId = dto.purchase_price_import_dt_id;
    this.#purchasePriceId = dto.purchase_price_id;
    this.#currencyId = dto.currency_id;
    this.#currencyCode = dto.currency_code;
    this.#itemId = dto.item_id;
    this.#price = dto.price;
    this.#price = dto.price;
    this.#priceT = dto.price_t;
  }

  get purchasePriceImportDtId() {
    return this.purchasePriceImportDtId;
  }

  toModel() {
    return {
      purchasePriceImportDtId: this.purchasePriceImportDtId,
      purchasePriceId: this.#purchasePriceId,
      currencyId: this.#currencyId,
      currencyCode: this.#currencyCode,
      itemId: this.#itemId,
      price: this.#price,
      priceT: this.#priceT,
      ...super.toModel()
    };
  }
}

export { BuyingPriceLisImportDto, BuyingPriceLisImportDetailDto };
