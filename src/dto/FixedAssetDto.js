import StandardDto from './StandardDto.js';

class FixedAssetDto extends StandardDto {
  #fixedAssetId;
  #companyParentId;
  #companyId;
  #fixedAssetCategoryId;
  #fixedAssetPurchaseId;
  #fixedAssetPurchaseDtId;
  #fixedAssetCode;
  #fixedAssetName;
  #isused;
  #locationId;
  #qrCode;
  #user;
  #isnewpurchase;
  #acquisitionDate;
  #acquisitionValue;
  #fixedAssetGroupId;
  #quantity;
  #serviceLife;
  #salvageValue;
  #serialNumber;

  constructor(dto) {
    super(dto);
    this.#fixedAssetId = dto.fixed_asset_id;
    this.#companyParentId = dto.company_parent_id;
    this.#companyId = dto.company_id;
    this.#fixedAssetCategoryId = dto.fixed_asset_category_id;
    this.#fixedAssetPurchaseId = dto.fixed_asset_purchase_id;
    this.#fixedAssetPurchaseDtId = dto.fixed_asset_purchase_dt_id;
    this.#fixedAssetCode = dto.fixed_asset_code;
    this.#fixedAssetName = dto.fixed_asset_name;
    this.#isused = dto.isused;
    this.#locationId = dto.location_id;
    this.#qrCode = dto.qr_code;
    this.#user = dto.user;
    this.#isnewpurchase = dto.isnewpurchase;
    this.#acquisitionDate = dto.acquisition_date;
    this.#acquisitionValue = dto.acquisition_value;
    this.#fixedAssetGroupId = dto.fixed_asset_group_id;
    this.#quantity = dto.quantity;
    this.#serviceLife = dto.service_life;
    this.#salvageValue = dto.salvage_value;
    this.#serialNumber = dto.serial_number;
  }

  get fixedAssetId() {
    return this.#fixedAssetId;
  }

  toModel() {
    return {
      fixedAssetId: this.#fixedAssetId,
      companyParentId: this.#companyParentId,
      companyId: this.#companyId,
      fixedAssetCategoryId: this.#fixedAssetCategoryId,
      fixedAssetPurchaseId: this.#fixedAssetPurchaseId,
      fixedAssetPurchaseDtId: this.#fixedAssetPurchaseDtId,
      fixedAssetCode: this.#fixedAssetCode,
      fixedAssetName: this.#fixedAssetName,
      isused: this.#isused,
      locationId: this.#locationId,
      qrCode: this.#qrCode,
      user: this.#user,
      isnewpurchase: this.#isnewpurchase,
      acquisitionDate: this.#acquisitionDate,
      acquisitionValue: this.#acquisitionValue,
      fixedAssetGroupId: this.#fixedAssetGroupId,
      quantity: this.#quantity,
      serviceLife: this.#serviceLife,
      salvageValue: this.#salvageValue,
      serialNumber: this.#serialNumber,
      ...super.toModel()
    };
  }
}

class FixedAssetCategoryDto extends StandardDto {
  #fixedAssetCategoryId;
  #companyParentId;
  #fixedAssetCategoryName;
  #coaBiayaId;
  #coaAkumulasiId;
  #coaExpensesId;

  constructor(dto) {
    super(dto);
    this.#fixedAssetCategoryId = dto.fixed_asset_category_id;
    this.#companyParentId = dto.company_parent_id;
    this.#fixedAssetCategoryName = dto.fixed_asset_category_name;
    this.#coaBiayaId = dto.coa_biaya_id;
    this.#coaAkumulasiId = dto.coa_akumulasi_id;
    this.#coaExpensesId = dto.coa_expenses_id;
  }

  get fixedAssetCategoryId() {
    return this.#fixedAssetCategoryId;
  }

  toModel() {
    return {
      fixedAssetCategoryId: this.#fixedAssetCategoryId,
      companyParentId: this.#companyParentId,
      fixedAssetCategoryName: this.#fixedAssetCategoryName,
      coaBiayaId: this.#coaBiayaId,
      coaAkumulasiId: this.#coaAkumulasiId,
      coaExpensesId: this.#coaExpensesId,
      ...super.toModel()
    };
  }
}

class FixedAssetGroupDto extends StandardDto {
  #fixedAssetGroupId;
  #companyParentId;
  #fixedAssetGroupName;
  #fixedAssetGroupCode;
  #depreciationMethod;
  #depreciationRate;
  #serviceLife;
  #coaBiayaId;
  #coaAkumulasiId;

  constructor(dto) {
    super(dto);
    this.#fixedAssetGroupId = dto.fixed_asset_group_id;
    this.#companyParentId = dto.company_parent_id;
    this.#fixedAssetGroupName = dto.fixed_asset_group_name;
    this.#fixedAssetGroupCode = dto.fixed_asset_group_code;
    this.#depreciationMethod = dto.depreciation_method;
    this.#depreciationRate = dto.depreciation_rate;
    this.#serviceLife = dto.service_life;
    this.#coaBiayaId = dto.coa_biaya_id;
    this.#coaAkumulasiId = dto.coa_akumulasi_id;
  }

  get fixedAssetGroupId() {
    return this.#fixedAssetGroupId;
  }

  toModel() {
    return {
      fixedAssetGroupId: this.#fixedAssetGroupId,
      companyParentId: this.#companyParentId,
      fixedAssetGroupName: this.#fixedAssetGroupName,
      fixedAssetGroupCode: this.#fixedAssetGroupCode,
      depreciationMethod: this.#depreciationMethod,
      depreciationRate: this.#depreciationRate,
      serviceLife: this.#serviceLife,
      coaBiayaId: this.#coaBiayaId,
      coaAkumulasiId: this.#coaAkumulasiId,
      ...super.toModel()
    };
  }
}

class FixedDepreciationDto extends StandardDto {
  #depreciationId;
  #depreciationName;
  #depreciationRate;

  constructor(dto) {
    super(dto);
    this.#depreciationId = dto.depreciation_id;
    this.#depreciationName = dto.depreciation_name;
    this.#depreciationRate = dto.depreciation_rate;
  }

  get depreciationId() {
    return this.#depreciationId;
  }

  toModel() {
    return {
      depreciationId: this.#depreciationId,
      depreciationName: this.#depreciationName,
      depreciationRate: this.#depreciationRate,
      ...super.toModel()
    };
  }
}

export { FixedAssetDto, FixedAssetCategoryDto, FixedAssetGroupDto, FixedDepreciationDto };
