import StandardDto from './StandardDto.js';

class WarehouseDto extends StandardDto {
  #warehouseId;
  #companyParentId;
  #companyId;
  #warehouseCode;
  #customerId;
  #warehouseLevelId;
  #warehouseLinkId;
  #warehouseName;
  #warehouseInitial;
  #warehouseAddr;
  #warehouseCountryId;
  #warehouseProvinceId;
  #warehouseCityId;
  #warehouseDistrictId;
  #warehouseSubdistrictId;
  #warehousePostalCode;
  #warehousePhone;
  #coaId;
  #TYPE;
  #note;
  #isimport;
  #isexport;
  #islocal;
  #isconsignment;

  constructor(dto) {
    super(dto);
    this.#warehouseId = dto.warehouse_id;
    this.#companyParentId = dto.company_parent_id;
    this.#companyId = dto.company_id;
    this.#customerId = dto.customer_id;
    this.#warehouseCode = dto.warehouse_code;
    this.#warehouseLevelId = dto.warehouse_level_id;
    this.#warehouseLinkId = dto.warehouse_link_id;
    this.#warehouseName = dto.warehouse_name;
    this.#warehouseInitial = dto.warehouse_initial;
    this.#warehouseAddr = dto.warehouse_addr;
    this.#warehouseCountryId = dto.warehouse_country_id;
    this.#warehouseProvinceId = dto.warehouse_province_id;
    this.#warehouseCityId = dto.warehouse_city_id;
    this.#warehouseDistrictId = dto.warehouse_district_id;
    this.#warehouseSubdistrictId = dto.warehouse_subdistrict_id;
    this.#warehousePostalCode = dto.warehouse_postal_code;
    this.#warehousePhone = dto.warehouse_phone;
    this.#coaId = dto.coa_id;
    this.#TYPE = dto.TYPE;
    this.#note = dto.note;
    this.#isimport = dto.isimport;
    this.#isexport = dto.isexport;
    this.#islocal = dto.islocal;
    this.#isconsignment = dto.isconsignment;
  }

  get warehouseId() {
    return this.#warehouseId;
  }

  toModel() {
    return {
      warehouseId: this.#warehouseId,
      companyParentId: this.#companyParentId,
      customerId: this.#customerId,
      warehouseCode: this.#warehouseCode,
      warehouseLevelId: this.#warehouseLevelId,
      warehouseLinkId: this.#warehouseLinkId,
      warehouseName: this.#warehouseName,
      warehouseInitial: this.#warehouseInitial,
      warehouseAddr: this.#warehouseAddr,
      warehouseCountryId: this.#warehouseCountryId,
      warehouseProvinceId: this.#warehouseProvinceId,
      warehouseCityId: this.#warehouseCityId,
      warehouseDistrictId: this.#warehouseDistrictId,
      warehouseSubdistrictId: this.#warehouseSubdistrictId,
      warehousePostalCode: this.#warehousePostalCode,
      warehousePhone: this.#warehousePhone,
      coaId: this.#coaId,
      TYPE: this.#TYPE,
      note: this.#note,
      isimport: this.#isimport,
      isexport: this.#isexport,
      islocal: this.#islocal,
      isconsignment: this.#isconsignment,
      ...super.toModel()
    };
  }
}

class WarehouseLevelDto extends StandardDto {
  #warehouseLevelId;
  #companyParentId;
  #warehouseLevelCode;
  #warehouseLevelName;
  #number;
  #digit;

  constructor(dto) {
    super(dto);
    this.#warehouseLevelId = dto.warehouse_level_id;
    this.#companyParentId = dto.company_parent_id;
    this.#warehouseLevelCode = dto.warehouse_level_code;
    this.#warehouseLevelName = dto.warehouse_level_name;
    this.#number = dto.number;
    this.#digit = dto.digit;
  }

  get warehouseLevelId() {
    return this.#warehouseLevelId;
  }

  toModel() {
    return {
      warehouseLevelId: this.#warehouseLevelId,
      companyParentId: this.#companyParentId,
      warehouseLevelCode: this.#warehouseLevelCode,
      warehouseLevelName: this.#warehouseLevelName,
      number: this.#number,
      digit: this.#digit,
      ...super.toModel()
    };
  }
}

export { WarehouseDto, WarehouseLevelDto };
