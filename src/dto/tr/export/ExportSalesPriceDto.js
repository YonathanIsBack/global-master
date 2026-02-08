import StandardDto from '../../StandardDto.js';

class ExportSalesPriceDto extends StandardDto {
  #exportSalesPriceId;
  #companyId;
  #name;
  #publishTime;
  #note;
  #isdel;
  #isactive;

  constructor(dto) {
    super(dto);
    this.#exportSalesPriceId = dto.export_sales_price_id;
    this.#companyId = dto.company_id;
    this.#name = dto.name;
    this.#publishTime = dto.publish_time;
    this.#note = dto.note;
    this.#isdel = dto.isdel;
    this.#isactive = dto.isactive;
  }

  get exportSalesPriceId() {
    return this.#exportSalesPriceId;
  }

  toModel() {
    return {
      exportSalesPriceId: this.#exportSalesPriceId,
      companyId: this.#companyId,
      name: this.#name,
      publishTime: this.#publishTime,
      note: this.#note,
      isdel: this.#isdel,
      isactive: this.#isactive,
      ...super.toModel()
    };
  }
}

class ExportSalesPriceDtDto extends StandardDto {
  #exportSalesPriceDtId;
  #exportSalesPriceId;
  #itemId;
  #customerTypeId;
  #price;
  #priceAvg;

  constructor(dto) {
    super(dto);
    this.#exportSalesPriceDtId = dto.export_sales_price_dt_id;
    this.#exportSalesPriceId = dto.export_sales_price_id;
    this.#itemId = dto.item_id;
    this.#customerTypeId = dto.customer_type_i;
    this.#price = dto.price;
    this.#priceAvg = dto.price_avg;
  }

  get exportSalesPriceDtId() {
    return this.#exportSalesPriceDtId;
  }

  toModel() {
    return {
      exportSalesPriceDtId: this.#exportSalesPriceDtId,
      exportSalesPriceId: this.#exportSalesPriceId,
      itemId: this.#itemId,
      customerTypeId: this.#customerTypeId,
      price: this.#price,
      priceAvg: this.#priceAvg,

      ...super.toModel()
    };
  }
}
export { ExportSalesPriceDto, ExportSalesPriceDtDto };
