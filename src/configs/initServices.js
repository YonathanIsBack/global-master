import Access from '../models/Access.js';
import { Action, ActionPage } from '../models/Action.js';
import { AutoCode, AutoCodeCount, AutoJurnal } from '../models/Auto.js';
import { BackDated, BackDatedLogs, BackDatedUser } from '../models/Backdated.js';
import Bank from '../models/Bank.js';
import Brand from '../models/Brand.js';
import { BuyingPriceList, BuyingPriceListDetail } from '../models/BuyingPriceList.js';
import { BuyingPriceListImport, BuyingPriceListImportDetail } from '../models/BuyingPriceListImport.js';
import City from '../models/City.js';
import { Coa, CoaBank, CoaGroup, CoaSubGroup, CoaType } from '../models/Coa.js';
import { Company, CompanyBank } from '../models/Company.js';
import { Country, CountryCode } from '../models/Country.js';
import Currency from '../models/Currency.js';
import {
  Customer,
  CustomerBilling,
  CustomerCart,
  CustomerCode,
  CustomerContact,
  CustomerDelivery,
  CustomerDocument,
  CustomerGroup,
  CustomerImg,
  CustomerRegion,
  CustomerSales,
  CustomerSegmentation,
  CustomerTax,
  CustomerType
} from '../models/Customer.js';
import Department from '../models/Department.js';
import District from '../models/District.js';
import EndOfMonth from '../models/EndOfMonth.js';
import EndOfMonthLog from '../models/EndOfMonthLog.js';
import EndOfMonthSetting from '../models/EndOfMonthSetting.js';
import FakturPajak from '../models/FakturPajak.js';
import { FixedAsset, FixedAssetCategory, FixedAssetGroup, FixedDepreciation } from '../models/FixedAsset.js';
import {
  Item,
  ItemBuying,
  ItemCategory,
  ItemCombo,
  ItemImg,
  ItemLabel,
  ItemLabelDetail,
  ItemPrice,
  ItemSubcategory,
  ItemType,
  ItemUom
} from '../models/Item.js';
import KasbonPotongan from '../models/KasbonPotongan.js';
import { Label, LabelSettinganPrint } from '../models/Label.js';
import Location from '../models/Location.js';
import LogTransaksi from '../models/LogTransaksi.js';
import { Notification, NotificationDetail } from '../models/Notification.js';
import { PageMenu, PageMenuTerbuka } from '../models/PageMenu.js';
import PaymentTerm from '../models/PaymentTerm.js';
import Periode from '../models/Periode.js';
import PeriodeLog from '../models/PeriodeLog.js';
import Preference from '../models/Preference.js';
import Principal from '../models/Principal.js';
import Province from '../models/Province.js';
import { Salesman, SalesmanCommision, SalesmanTarget } from '../models/Salesman.js';
import Shipping from '../models/Shipping.js';
import StAutoApprove from '../models/StAutoApprove.js';
import StCurrencyRate from '../models/StCurrencyRate.js';
import StCurrencyRateDetail from '../models/StCurrencyRateDetail.js';
import Stratum from '../models/Stratum.js';
import SubDistrict from '../models/SubDistrict.js';
import {
  Supplier,
  SupplierBank,
  SupplierBrand,
  SupplierContact,
  SupplierGroup,
  SupplierPayment,
  SupplierPurchase,
  SupplierRegion,
  SupplierSegmentation,
  SupplierTax,
  SupplierType
} from '../models/Supplier.js';
import { Tax, TaxForm } from '../models/Tax.js';
import { NoTransaction, TransactionCode, TransCode, TransCodeGroup } from '../models/TransCode.js';
import Transaction from '../models/Transaction.js';
import {
  User,
  UserAksesCompany,
  UserCustomer,
  UserGroup,
  UserGroupAccess,
  UserGroupCustomer,
  UserItem,
  UserOtp,
  UserSalesman,
  UserSupplier,
  UserTableViewColumn,
  UserTurunan
} from '../models/User.js';
import Vintage from '../models/Vintage.js';
import { Warehouse, WarehouseLevel } from '../models/Warehouse.js';
import { CashBank } from '../models/gl/CashBank.js';
import { Deferral } from '../models/gl/Deferral.js';
import { MemoJurnal } from '../models/gl/MemoJurnal.js';
import { IxBank } from '../models/ix/IxBank.js';
import { IxBeginning } from '../models/ix/IxBeginning.js';
import { IxBeginningGl } from '../models/ix/IxBeginningGl.js';
import { IxBeginningImport } from '../models/ix/IxBeginningImport.js';
import { IxBrand } from '../models/ix/IxBrand.js';
import { IxBuyingPrice } from '../models/ix/IxBuyingPrice.js';
import { IxBuyingPriceImport } from '../models/ix/IxBuyingPriceImport.js';
import { IxCity } from '../models/ix/IxCity.js';
import { IxCoa } from '../models/ix/IxCoa.js';
import { IxCoaGroup } from '../models/ix/IxCoaGroup.js';
import { IxCoaList } from '../models/ix/IxCoaList.js';
import { IxCoaSubgroup } from '../models/ix/IxCoaSubgroup.js';
import { IxCoaSubledger } from '../models/ix/IxCoaSubledger.js';
import { IxCoaType } from '../models/ix/IxCoaType.js';
import { IxCoretaxCategory } from '../models/ix/IxCoretaxCategory.js';
import { IxCoretaxCountry } from '../models/ix/IxCoretaxCountry.js';
import { IxCoretaxFacility } from '../models/ix/IxCoretaxFacility.js';
import { IxCoretaxInfo } from '../models/ix/IxCoretaxInfo.js';
import { IxCoretaxTax } from '../models/ix/IxCoretaxTax.js';
import { IxCoretaxTransactionCode } from '../models/ix/IxCoretaxTransactionCode.js';
import { IxCoretaxType } from '../models/ix/IxCoretaxType.js';
import { IxCoretaxUom } from '../models/ix/IxCoretaxUom.js';
import { IxCountry } from '../models/ix/IxCountry.js';
import { IxCurrency } from '../models/ix/IxCurrency.js';
import { IxCustomer } from '../models/ix/IxCustomer.js';
import { IxCustomerBalance } from '../models/ix/IxCustomerBalance.js';
import { IxCustomerBalanceExport } from '../models/ix/IxCustomerBalanceExport.js';
import { IxCustomerGroup } from '../models/ix/IxCustomerGroup.js';
import { IxCustomerRegion } from '../models/ix/IxCustomerRegion.js';
import { IxCustomerSegmentation } from '../models/ix/IxCustomerSegmentation.js';
import { IxCustomerSubsegmentation } from '../models/ix/IxCustomerSubsegmentation.js';
import { IxCustomerSubsubsegmentation } from '../models/ix/IxCustomerSubsubsegmentation.js';
import { IxCustomerType } from '../models/ix/IxCustomerType.js';
import { IxDepartment } from '../models/ix/IxDepartment.js';
import { IxDistrict } from '../models/ix/IxDistrict.js';
import { IxExportSellingPrice } from '../models/ix/IxExportSellingPrice.js';
import { IxFaktur } from '../models/ix/IxFaktur.js';
import { IxFixedAsset } from '../models/ix/IxFixedAsset.js';
import { IxFixedAssetCategory } from '../models/ix/IxFixedAssetCategory.js';
import { IxFixedAssetGroup } from '../models/ix/IxFixedAssetGroup.js';
import { IxItem } from '../models/ix/IxItem.js';
import { IxItemCategory } from '../models/ix/IxItemCategory.js';
import { IxItemLabel } from '../models/ix/IxItemLabel.js';
import { IxItemSubCategory } from '../models/ix/IxItemSubCategory.js';
import { IxItemType } from '../models/ix/IxItemType.js';
import { IxItemUom } from '../models/ix/IxItemUom.js';
import { IxLocation } from '../models/ix/IxLocation.js';
import { IxPaymentTerm } from '../models/ix/IxPaymentTerm.js';
import { IxPrincipal } from '../models/ix/IxPrincipal.js';
import { IxProvince } from '../models/ix/IxProvince.js';
import { IxSalesman } from '../models/ix/IxSalesman.js';
import { IxSellingPrice } from '../models/ix/IxSellingPrice.js';
import { IxStratum } from '../models/ix/IxStratum.js';
import { IxSubdistrict } from '../models/ix/IxSubdistrict.js';
import { IxSupplier } from '../models/ix/IxSupplier.js';
import { IxSupplierBalance } from '../models/ix/IxSupplierBalance.js';
import { IxSupplierGroup } from '../models/ix/IxSupplierGroup.js';
import { IxSupplierRegion } from '../models/ix/IxSupplierRegion.js';
import { IxSupplierSegmentation } from '../models/ix/IxSupplierSegmentation.js';
import { IxSupplierSubsegmentation } from '../models/ix/IxSupplierSubsegmentation.js';
import { IxSupplierSubsubsegmentation } from '../models/ix/IxSupplierSubsubsegmentation.js';
import { IxSupplierType } from '../models/ix/IxSupplierType.js';
import { IxTax } from '../models/ix/IxTax.js';
import { IxUserCustomer } from '../models/ix/IxUserCustomer.js';
import { IxUserItem } from '../models/ix/IxUserItem.js';
import { IxUserSalesman } from '../models/ix/IxUserSalesman.js';
import { IxUserSupplier } from '../models/ix/IxUserSupplier.js';
import { IxUserTurunan } from '../models/ix/IxUserTurunan.js';
import { IxWarehouse } from '../models/ix/IxWarehouse.js';
import {
  CoretaxCategory,
  CoretaxCountry,
  CoretaxFacility,
  CoretaxInfo,
  CoretaxJenisPembeli,
  CoretaxTax,
  CoretaxTransactionCode,
  CoretaxType,
  CoretaxUom
} from '../models/ms/Coretax.js';
import { PaymentMemo } from '../models/rc/PaymentMemo.js';
import Ap from '../models/sm/Ap.js';
import ApTr from '../models/sm/ApTr.js';
import Ar from '../models/sm/Ar.js';
import ArTr from '../models/sm/ArTr.js';
import Bc16 from '../models/sm/Bc16.js';
import Bc16ItemDt from '../models/sm/Bc16ItemDt.js';
import UserCustomerLimit from '../models/sm/UserCustomerLimit.js';
import GlReport from '../models/sm/gl/GlReport.js';
import HppAvg from '../models/sm/hpp/HppAvg.js';
import HppAvgFix from '../models/sm/hpp/HppAvgFix.js';
import HppAvgRecord from '../models/sm/hpp/HppAvgRecord.js';
import ImportHppAvg from '../models/sm/import/ImportHppAvg.js';
import ImportHppAvgFix from '../models/sm/import/ImportHppAvgFix.js';
import ImportHppAvgRecord from '../models/sm/import/ImportHppAvgRecord.js';
import { ItemStock, ItemStockDt } from '../models/sm/item/ItemStock.js';
import { ItemStockCard, ItemStockCardDt } from '../models/sm/item/ItemStockCard.js';
import LocalHppAvg from '../models/sm/local/LocalHppAvg.js';
import ItemFifo from '../models/sm/tr/ItemFifo.js';
import ItemFifoOut from '../models/sm/tr/ItemFifoOut.js';
import { StCoa, StCoaDt } from '../models/st/StCoa.js';
import TransactionTrace from '../models/st/TransactionTrace.js';
import Kasbon from '../models/tr/Kasbon.js';
import {
  ExportSalesAdvancePayment,
  ExportSalesAdvancePaymentReject,
  ExportSalesAdvancePaymentRequest
} from '../models/tr/export/ExportSalesAdvancePayment.js';
import { ExportSalesDeposit } from '../models/tr/export/ExportSalesDeposit.js';
import {
  ExportSalesInvoice,
  ExportSalesInvoiceAdvancePay,
  ExportSalesInvoiceBc16,
  ExportSalesInvoiceDt,
  ExportSalesInvoiceItemDt,
  ExportSalesInvoiceReject,
  ExportSalesInvoiceRequest
} from '../models/tr/export/ExportSalesInvoice.js';
import { ExportSalesOrder } from '../models/tr/export/ExportSalesOrder.js';
import { ExportSalesPackingList } from '../models/tr/export/ExportSalesPackingList.js';
import { ExportSalesPayment } from '../models/tr/export/ExportSalesPayment.js';
import { ExportSalesPrice, ExportSalesPriceDt } from '../models/tr/export/ExportSalesPrice.js';
import { ExportSalesQuote } from '../models/tr/export/ExportSalesQuote.js';
import { ExportSalesReturn } from '../models/tr/export/ExportSalesReturn.js';
import { FixedAssetPayment } from '../models/tr/fixedasset/FixedAssetPayment.js';
import { FixedAssetPurchase } from '../models/tr/fixedasset/FixedAssetPurchase.js';
import { FixedAssetSales } from '../models/tr/fixedasset/FixedAssetSales.js';
import { FixedAssetTransfer } from '../models/tr/fixedasset/FixedAssetTransfer.js';
import { FixedAssetWriteOff } from '../models/tr/fixedasset/FixedAssetWriteOff.js';
import { ImportAdvancedPayment } from '../models/tr/import/ImportAdvance.js';
import { ImportClearance } from '../models/tr/import/ImportClearance.js';
import { ImportCreditNote } from '../models/tr/import/ImportCreditNote.js';
import { ImportInvoice } from '../models/tr/import/ImportInvoice.js';
import { ImportOrder } from '../models/tr/import/ImportOrder.js';
import { ImportPayment } from '../models/tr/import/ImportPayment.js';
import { ImportQuote } from '../models/tr/import/ImportQuote.js';
import { ImportReceive } from '../models/tr/import/ImportReceive.js';
import { ImportReturn } from '../models/tr/import/ImportReturn.js';
import { ImportStockTransfer } from '../models/tr/import/ImportStock.js';
import { InventoryAdjustment } from '../models/tr/inventory/InventoryAdjustment.js';
import { InventoryTransfer } from '../models/tr/inventory/InventoryTransfer.js';
import { PembayaranSend } from '../models/tr/memo/PembayaranSend.js';
import { OffshorePurchaseAdvancePayment } from '../models/tr/offshore/OffshorePurchaseAdvancedPayment.js';
import { OffshorePurchaseCreditNote } from '../models/tr/offshore/OffshorePurchaseCreditNote.js';
import { OffshorePurchaseInvoice } from '../models/tr/offshore/OffshorePurchaseInvoice.js';
import { OffshorePurchaseOrder } from '../models/tr/offshore/OffshorePurchaseOrder.js';
import { OffshorePurchasePayment } from '../models/tr/offshore/OffshorePurchasePayment.js';
import { OffshorePurchaseReceive } from '../models/tr/offshore/OffshorePurchaseReceive.js';
import { OffshoreSalesInvoice } from '../models/tr/offshore/OffshoreSalesInvoice.js';
import { OffshoreSalesPayment } from '../models/tr/offshore/OffshoreSalesPayment.js';
import { PurchaseAdvancePayment } from '../models/tr/purchase/PurchaseAdvancePayment.js';
import { PurchaseInvoice } from '../models/tr/purchase/PurchaseInvoice.js';
import { PurchaseOrder } from '../models/tr/purchase/PurchaseOrder.js';
import { PurchasePayment } from '../models/tr/purchase/PurchasePayment.js';
import { PurchaseQuote } from '../models/tr/purchase/PurchaseQuote.js';
import { PurchaseReceive } from '../models/tr/purchase/PurchaseReceive.js';
import { PurchaseReturn } from '../models/tr/purchase/PurchaseReturn.js';
import { TrPurchaseTarget, TrPurchaseTargetDt } from '../models/tr/purchase/TrPurchaseTarget.js';
import { SalesAdvancePayment } from '../models/tr/sales/SalesAdvancePayment.js';
import { SalesContract } from '../models/tr/sales/SalesContract.js';
import { SalesDeliveryFixed } from '../models/tr/sales/SalesDeliveryFixed.js';
import { SalesDeliveryNote } from '../models/tr/sales/SalesDeliveryNote.js';
import { SalesDeposit } from '../models/tr/sales/SalesDeposit.js';
import { SalesInvoice } from '../models/tr/sales/SalesInvoice.js';
import {
  SalesOrder,
  SalesOrderAdvance,
  SalesOrderDeposit,
  SalesOrderDt,
  SalesOrderItemDt,
  SalesOrderReject,
  SalesOrderRequest
} from '../models/tr/sales/SalesOrder.js';
import { SalesPayment } from '../models/tr/sales/SalesPayment.js';
import { SalesPrice, SalesPriceDt } from '../models/tr/sales/SalesPrice.js';
import {
  SalesQuote,
  SalesQuoteDt,
  SalesQuoteItemDt,
  SalesQuoteReject,
  SalesQuoteRequest
} from '../models/tr/sales/SalesQuote.js';
import { SalesReturn } from '../models/tr/sales/SalesReturn.js';
import { TrSalesTarget, TrSalesTargetDt } from '../models/tr/sales/TrSalesTarget.js';
import { TrSalesmanTarget, TrSalesmanTargetDt } from '../models/tr/salesman/TrSalesmanTarget.js';
import { StockCombo, StockComboReverse } from '../models/tr/stock/StockCombo.js';
import { StockOpname } from '../models/tr/stock/StockOpname.js';
import TrSafetyStock from '../models/tr/stock/TrSafetyStock.js';
import BankService from '../services/BankService.js';
import BrandService from '../services/BrandService.js';
import CountryService from '../services/CountryService.js';
import CurrencyService from '../services/CurrencyService.js';
import DepartmentService from '../services/DepartmentService.js';
import FakturPajakService from '../services/FakturPajakService.js';
import ImportDataService from '../services/ImportDataService.js';
import LocationService from '../services/LocationService.js';
import PaymentTermService from '../services/PaymentTermService.js';
import ProvinceService from '../services/ProvinceService.js';
import PusherService from '../services/PusherService.js';
import { SalesPriceDtService, SalesPriceService } from '../services/SalesPriceService.js';
import ShippingService from '../services/ShippingService.js';
import StandardService from '../services/StandardService.js';
import StandardTransactionService from '../services/StandardTransactionService.js';
import StratumService from '../services/StratumService.js';
import SupplierService from '../services/ms/SupplierService.js';
import TaxService from '../services/TaxService.js';
import TransactionService from '../services/TransactionService.js';
import WarehouseService from '../services/WarehouseService.js';
import ItemCategoryService from '../services/ms/ItemCategoryService.js';
import ItemService from '../services/ms/ItemService.js';
import ItemSubCategoryService from '../services/ms/ItemSubCategoryService.js';
import ItemTypeService from '../services/ms/ItemTypeService.js';
import ItemUomService from '../services/ms/ItemUomService.js';
import LabelService from '../services/ms/LabelService.js';
import { ExportSalesPriceDtService, ExportSalesPriceService } from '../services/tr/export/ExportSalesPriceService.js';
import InventoryAdjustmentService from '../services/tr/inventory/InventoryAdjustmentService.js';
import StockOpnameService from '../services/tr/stock/StockOpnameService.js';
import SupplierGroupService from '../services/ms/SupplierGroupService.js';
import SupplierSegmentationService from '../services/ms/SupplierSegmentationService.js';
import SupplierTypeService from '../services/ms/SupplierTypeService.js';
import SupplierRegionService from '../services/ms/SupplierRegionService.js';
import CustomerService from '../services/ms/CustomerService.js';
import CustomerSegmentationService from '../services/ms/CustomerSegmentationService.js';
import CustomerGroupService from '../services/ms/CustomerGroupService.js';
import CustomerTypeService from '../services/ms/CustomerTypeService.js';
import CustomerRegionService from '../services/ms/CustomerRegionService.js';
import SalesmanService from '../services/ms/SalesmanService.js';
import CoaTypeService from '../services/ms/CoaTypeService.js';
import CoaGroupService from '../services/ms/CoaGroupService.js';
import CoaSubGroupService from '../services/ms/CustomerSubGroupService.js';
import CoaService from '../services/ms/CoaService.js';
import CoaSubLedgerService from '../services/ms/CoaSubLedgerService.js';
import FixedAssetService from '../services/ms/FixedAssetService.js';
import FixedAssetGroupService from '../services/ms/FixedAssetGroupService.js';
import FixedAssetCategoryService from '../services/ms/FixedAssetCategoryService.js';
import BuyingPriceListService from '../services/tr/buying-price/BuyingPriceListService.js';
import TrSalesTargetService from '../services/tr/sales-target/TrSalesTargetService.js';
import CoretaxCategoryService from '../services/ms/CoretaxCategoryService.js';
import CoretaxCountryService from '../services/ms/CoretaxCountryService.js';
import CoretaxFacilityService from '../services/ms/CoretaxFacilityService.js';
import CoretaxInfoService from '../services/ms/CoretaxInfoService.js';
import CoretaxJenisPembeliService from '../services/ms/CoretaxJenisPembeliService.js';
import CoretaxTaxService from '../services/ms/CoretaxTaxService.js';
import CoretaxTransactionCodeService from '../services/ms/CoretaxTransactionCodeService.js';
import CoretaxTypeService from '../services/ms/CoretaxTypeService.js';
import CoretaxUomService from '../services/ms/CoretaxUomService.js';
import PrincipalService from '../services/ms/PrincipalService.js';
import MsCk6GolonganService from '../services/ms/MsCk6GolonganService.js';
import MsCk6Golongan from '../models/ms/MsCk6Golongan.js';

const initServices = () => {
  return {
    accessService: new StandardService(Access),
    actionService: new StandardService(Action),
    actionPageService: new StandardService(ActionPage),
    autoCodeService: new StandardService(AutoCode),
    autoCodeCountService: new StandardService(AutoCodeCount),
    autoJurnalService: new StandardService(AutoJurnal),
    backdatedService: new StandardService(BackDated),
    backdatedLogService: new StandardService(BackDatedLogs),
    backdatedUserService: new StandardService(BackDatedUser),
    bankService: new BankService(Bank),
    brandService: new BrandService(Brand),
    buyingPriceListImportService: new StandardService(BuyingPriceListImport),
    buyingPriceListImportDetailService: new StandardService(BuyingPriceListImportDetail),
    buyingPriceListService: new BuyingPriceListService(BuyingPriceList),
    buyingPriceListDetailService: new StandardService(BuyingPriceListDetail),
    cityService: new StandardService(City),
    coaService: new CoaService(Coa),
    coaBankService: new StandardService(CoaBank),
    coaGroupService: new CoaGroupService(Coa),
    coaSubGroupService: new CoaSubGroupService(Coa),
    coaTypeService: new CoaTypeService(Coa),
    coaSubledgerService: new CoaSubLedgerService(Coa),
    companyService: new StandardService(Company),
    companyBankService: new StandardService(CompanyBank),
    countryService: new CountryService(Country),
    countryCodeService: new StandardService(CountryCode),
    currencyService: new CurrencyService(Currency),
    customerService: new CustomerService(Customer),
    customerBillingService: new StandardService(CustomerBilling),
    customeCartService: new StandardService(CustomerCart),
    customerCodeService: new StandardService(CustomerCode),
    customerContactSevice: new StandardService(CustomerContact),
    customerDeliveryService: new StandardService(CustomerDelivery),
    customerDocumentSerice: new StandardService(CustomerDocument),
    customerGroupService: new CustomerGroupService(CustomerGroup),
    customerImgService: new StandardService(CustomerImg),
    customerRegionService: new CustomerRegionService(CustomerRegion),
    customerSalesService: new StandardService(CustomerSales),
    customerSegmentationService: new CustomerSegmentationService(CustomerSegmentation),
    customerTaxService: new StandardService(CustomerTax),
    customerTypeService: new CustomerTypeService(CustomerType),
    departmentService: new DepartmentService(Department),
    endOfMonthLogService: new StandardService(EndOfMonthLog),
    endOfMonthService: new StandardService(EndOfMonth),
    endOfMonthSettingService: new StandardService(EndOfMonthSetting),
    fakturPajakService: new FakturPajakService(FakturPajak),
    fixedAssetService: new FixedAssetService(FixedAsset),
    fixedAssetCategoryService: new FixedAssetCategoryService(FixedAssetCategory),
    fixedAssetGroupService: new FixedAssetGroupService(FixedAssetGroup),
    fixedDepreciationService: new StandardService(FixedDepreciation),
    itemService: new ItemService(Item),
    itemBuyingService: new StandardService(ItemBuying),
    itemCategoryService: new ItemCategoryService(ItemCategory),
    itemComboService: new StandardService(ItemCombo),
    itemImgService: new StandardService(ItemImg),
    itemLabelService: new StandardService(ItemLabel),
    itemLabelDetailService: new StandardService(ItemLabelDetail),
    itemPriceService: new StandardService(ItemPrice),
    itemSubcategoryService: new ItemSubCategoryService(ItemSubcategory),
    itemTypeService: new ItemTypeService(ItemType),
    itemUomService: new ItemUomService(ItemUom),
    kasbonPotonganService: new StandardService(KasbonPotongan),
    labelService: new LabelService(Label),
    labelSettinganPrintService: new StandardService(LabelSettinganPrint),
    locationService: new LocationService(Location),
    notificationService: new StandardService(Notification),
    notificationDtService: new StandardService(NotificationDetail),
    pageMenuService: new StandardService(PageMenu),
    pageMenuTerbukaService: new StandardService(PageMenuTerbuka),
    paymentService: new PaymentTermService(PaymentTerm),
    periodeLogService: new StandardService(PeriodeLog),
    periodeService: new StandardService(Periode),
    preferenceService: new StandardService(Preference),
    principalService: new PrincipalService(Principal),
    provinceService: new ProvinceService(Province),
    districtService: new StandardService(District),
    subdistrictService: new StandardService(SubDistrict),
    salesmanService: new SalesmanService(Salesman),
    salesmanCommissionService: new StandardService(SalesmanCommision),
    salesmanTargetService: new StandardService(SalesmanTarget),
    salesPriceService: new SalesPriceService(SalesPrice),
    salesPriceDetailService: new SalesPriceDtService(SalesPriceDt),
    shippingService: new ShippingService(Shipping),
    stAutoApproveService: new StandardService(StAutoApprove),
    stCurrencyRate: new StandardService(StCurrencyRate),
    stCurrencyRateDetailService: new StandardService(StCurrencyRateDetail),
    stratumService: new StratumService(Stratum),
    supplierService: new SupplierService(Supplier),
    supplierBankService: new StandardService(SupplierBank),
    supplierBrandService: new StandardService(SupplierBrand),
    supplierContactService: new StandardService(SupplierContact),
    supplierGroupService: new SupplierGroupService(SupplierGroup),
    supplierPaymentService: new StandardService(SupplierPayment),
    supplierPurchaseService: new StandardService(SupplierPurchase),
    supplierRegionService: new SupplierRegionService(SupplierRegion),
    supplierSegmentationService: new SupplierSegmentationService(SupplierSegmentation),
    supplierTaxService: new StandardService(SupplierTax),
    supplierTypeService: new SupplierTypeService(SupplierType),
    taxService: new TaxService(Tax),
    taxFormService: new StandardService(TaxForm),
    transactionService: new TransactionService(Transaction),
    transCodeService: new StandardService(TransCode),
    transCodeGroupService: new StandardService(TransCodeGroup),
    transactionCodeService: new StandardService(TransactionCode),
    noTransactionService: new StandardService(NoTransaction),
    trPurchaseTargetService: new StandardService(TrPurchaseTarget),
    trPurchaseTargetDetailService: new StandardService(TrPurchaseTargetDt),
    trSafetyStockService: new StandardService(TrSafetyStock),
    trSalesmanTargetService: new StandardService(TrSalesmanTarget),
    trSalesmanTargetDtService: new StandardService(TrSalesmanTargetDt),
    trSalesTargetService: new TrSalesTargetService(TrSalesTarget),
    trSalesTargetDtService: new StandardService(TrSalesTargetDt),
    userService: new StandardService(User),
    userAksesCompanyService: new StandardService(UserAksesCompany),
    userGroupService: new StandardService(UserGroup),
    userGroupAccessService: new StandardService(UserGroupAccess),
    userGroupCustomerService: new StandardService(UserGroupCustomer),
    userOtpService: new StandardService(UserOtp),
    userTableViewColumnService: new StandardService(UserTableViewColumn),
    userItemService: new StandardService(UserItem),
    userCustomerService: new StandardService(UserCustomer),
    userSalesmanService: new StandardService(UserSalesman),
    userSupplierService: new StandardService(UserSupplier),
    userTurunanService: new StandardService(UserTurunan),
    vintageService: new StandardService(Vintage),
    warehouseService: new WarehouseService(Warehouse),
    warehouseLevelService: new StandardService(WarehouseLevel),
    exportSalesAdvancePaymentService: new StandardTransactionService(ExportSalesAdvancePayment),
    exportSalesAdvancePaymentRejectService: new StandardService(ExportSalesAdvancePaymentReject),
    exportSalesAdvancedPaymentRequestService: new StandardService(ExportSalesAdvancePaymentRequest),
    exportDepositService: new StandardService(ExportSalesDeposit),
    exportSalesInvoiceService: new StandardTransactionService(ExportSalesInvoice),
    exportSalesInvoiceAdvanceService: new StandardService(ExportSalesInvoiceAdvancePay),
    exportSalesInvoiceBc16Service: new StandardService(ExportSalesInvoiceBc16),
    exportSalesInvoiceDtService: new StandardService(ExportSalesInvoiceDt),
    exportSalesInvoiceItemDtService: new StandardService(ExportSalesInvoiceItemDt),
    exportSalesInvoiceRejectService: new StandardService(ExportSalesInvoiceReject),
    exportSalesInvoiceRequestService: new StandardService(ExportSalesInvoiceRequest),
    inventoryAdjustmentService: new InventoryAdjustmentService(InventoryAdjustment),
    inventoryTransferService: new StandardTransactionService(InventoryTransfer),
    salesOrderService: new StandardTransactionService(SalesOrder),
    salesOrderAdvanceService: new StandardService(SalesOrderAdvance),
    salesOrderDepositService: new StandardService(SalesOrderDeposit),
    salesOrderDtService: new StandardService(SalesOrderDt),
    salesOrderItemDtService: new StandardService(SalesOrderItemDt),
    salesOrderRejectService: new StandardService(SalesOrderReject),
    salesOrderRequestService: new StandardService(SalesOrderRequest),
    salesQuoteService: new StandardTransactionService(SalesQuote),
    salesQuoteDtService: new StandardService(SalesQuoteDt),
    salesQuoteItemService: new StandardService(SalesQuoteItemDt),
    salesQuoteRejectService: new StandardService(SalesQuoteReject),
    salesQuoteRequestService: new StandardService(SalesQuoteRequest),
    stockComboService: new StandardService(StockCombo),
    stockComboReverseService: new StandardService(StockComboReverse),
    stockOpnameService: new StockOpnameService(StockOpname),
    salesDeliveryNoteService: new StandardTransactionService(SalesDeliveryNote),
    salesDeliveryFixedService: new StandardTransactionService(SalesDeliveryFixed),
    salesInvoiceService: new StandardTransactionService(SalesInvoice),
    salesReturnService: new StandardTransactionService(SalesReturn),
    salesAdvancePaymentService: new StandardTransactionService(SalesAdvancePayment),
    salesContractService: new StandardTransactionService(SalesContract),
    salesDepositService: new StandardTransactionService(SalesDeposit),
    salesPaymentService: new StandardTransactionService(SalesPayment),
    importQuoteService: new StandardTransactionService(ImportQuote),
    importOrderService: new StandardTransactionService(ImportOrder),
    importReceiveService: new StandardTransactionService(ImportReceive),
    importInvoiceService: new StandardTransactionService(ImportInvoice),
    importReturnService: new StandardTransactionService(ImportReturn),
    importStockTransferService: new StandardTransactionService(ImportStockTransfer),
    importClearanceService: new StandardTransactionService(ImportClearance),
    importAdvancePaymentService: new StandardTransactionService(ImportAdvancedPayment),
    importCreditNoteService: new StandardTransactionService(ImportCreditNote),
    importPaymentService: new StandardTransactionService(ImportPayment),
    purchaseQuoteService: new StandardTransactionService(PurchaseQuote),
    purchaseOrderService: new StandardTransactionService(PurchaseOrder),
    purchaseReceiveService: new StandardTransactionService(PurchaseReceive),
    purchaseInvoiceService: new StandardTransactionService(PurchaseInvoice),
    purchaseReturnService: new StandardTransactionService(PurchaseReturn),
    purchaseAdvancePaymentService: new StandardTransactionService(PurchaseAdvancePayment),
    purchasePaymentService: new StandardTransactionService(PurchasePayment),
    exportSalesQuoteService: new StandardTransactionService(ExportSalesQuote),
    exportSalesOrderService: new StandardTransactionService(ExportSalesOrder),
    exportSalesPackingListService: new StandardTransactionService(ExportSalesPackingList),
    exportSalesReturnService: new StandardTransactionService(ExportSalesReturn),
    exportSalesAdvancePaymentService: new StandardTransactionService(ExportSalesAdvancePayment),
    exportSalesPaymentService: new StandardTransactionService(ExportSalesPayment),
    pusherService: new PusherService(),
    cashBankService: new StandardTransactionService(CashBank),
    memoJurnalService: new StandardTransactionService(MemoJurnal),
    deferralService: new StandardTransactionService(Deferral),
    paymentMemoService: new StandardTransactionService(PaymentMemo),
    fixedAssetPurchaseService: new StandardTransactionService(FixedAssetPurchase),
    pembayaranSendService: new StandardTransactionService(PembayaranSend),
    kasbonService: new StandardTransactionService(Kasbon),
    salesQuoteService: new StandardTransactionService(SalesQuote),
    salesQuoteDtService: new StandardService(SalesQuoteDt),
    salesQuoteItemService: new StandardService(SalesQuoteItemDt),
    salesQuoteRejectService: new StandardService(SalesQuoteReject),
    salesQuoteRequestService: new StandardService(SalesQuoteRequest),
    salesOrderService: new StandardTransactionService(SalesOrder),
    salesOrderAdvanceService: new StandardService(SalesOrderAdvance),
    salesOrderDepositService: new StandardService(SalesOrderDeposit),
    salesOrderDtService: new StandardService(SalesOrderDt),
    salesOrderItemDtService: new StandardService(SalesOrderItemDt),
    salesOrderRejectService: new StandardService(SalesOrderReject),
    salesOrderRequestService: new StandardService(SalesOrderReject),
    fixedAssetPaymentService: new StandardTransactionService(FixedAssetPayment),
    fixedAssetPurchaseService: new StandardTransactionService(FixedAssetPurchase),
    fixedAssetSalesService: new StandardTransactionService(FixedAssetSales),
    fixedAssetTransferService: new StandardTransactionService(FixedAssetTransfer),
    fixedAssetWriteOffService: new StandardTransactionService(FixedAssetWriteOff),
    exportSalesPriceService: new ExportSalesPriceService(ExportSalesPrice),
    exportSalesPriceDtService: new ExportSalesPriceDtService(ExportSalesPriceDt),
    stCoaService: new StandardService(StCoa),
    stCoaDtService: new StandardService(StCoaDt),
    glReportService: new StandardService(GlReport),
    hppAvgService: new StandardService(HppAvg),
    hppAvgFixService: new StandardService(HppAvgFix),
    hppAvgRecordService: new StandardService(HppAvgRecord),
    importHppAvgService: new StandardService(ImportHppAvg),
    importHppAvgRecordService: new StandardService(ImportHppAvgRecord),
    itemStockService: new StandardService(ItemStock),
    itemStockDtService: new StandardService(ItemStockDt),
    itemStockCardService: new StandardService(ItemStockCard),
    itemStockCardDtService: new StandardService(ItemStockCardDt),
    localHppAvgService: new StandardService(LocalHppAvg),
    itemFifoService: new StandardService(ItemFifo),
    itemFifoOutService: new StandardService(ItemFifoOut),
    bc16Service: new StandardService(Bc16),
    bc16ItemDtService: new StandardService(Bc16ItemDt),
    logTransaksiService: new StandardService(LogTransaksi),
    importHppAvgFixService: new StandardService(ImportHppAvgFix),
    apService: new StandardService(Ap),
    apTrService: new StandardService(ApTr),
    arService: new StandardService(Ar),
    arTrService: new StandardService(ArTr),
    userCustomerLimitService: new StandardService(UserCustomerLimit),
    coretaxCategoryService: new CoretaxCategoryService(CoretaxCategory),
    coretaxCountryService: new CoretaxCountryService(CoretaxCountry),
    coretaxFacilityService: new CoretaxFacilityService(CoretaxFacility),
    coretaxInfoService: new CoretaxInfoService(CoretaxInfo),
    coretaxJenisPembeliService: new CoretaxJenisPembeliService(CoretaxJenisPembeli),
    coretaxTaxService: new CoretaxTaxService(CoretaxTax),
    coretaxTransactionCodeService: new CoretaxTransactionCodeService(CoretaxTransactionCode),
    coretaxTypeService: new CoretaxTypeService(CoretaxType),
    coretaxUomService: new CoretaxUomService(CoretaxUom),
    offshorePurchaseOrderService: new StandardTransactionService(OffshorePurchaseOrder),
    offshorePurchaseReceiveService: new StandardTransactionService(OffshorePurchaseReceive),
    offshorePurchaseInvoiceService: new StandardTransactionService(OffshorePurchaseInvoice),
    offshorePurchaseAdvancedPaymentService: new StandardTransactionService(OffshorePurchaseAdvancePayment),
    offshorePurchasePaymentService: new StandardTransactionService(OffshorePurchasePayment),
    offshorePurchaseCreditNoteService: new StandardTransactionService(OffshorePurchaseCreditNote),
    offshoreSalesInvoiceService: new StandardTransactionService(OffshoreSalesInvoice),
    offshoreSalesPaymentService: new StandardTransactionService(OffshoreSalesPayment),
    ixCurrencyService: new StandardService(IxCurrency),
    ixDepartmentService: new StandardService(IxDepartment),
    ixStratumService: new StandardService(IxStratum),
    ixLocationService: new StandardService(IxLocation),
    ixTaxService: new StandardService(IxTax),
    ixPaymentTermService: new StandardService(IxPaymentTerm),
    ixBankService: new StandardService(IxBank),
    ixCountryService: new StandardService(IxCountry),
    ixItemService: new StandardService(IxItem),
    ixBrandService: new StandardService(IxBrand),
    ixItemCategoryService: new StandardService(IxItemCategory),
    ixItemSubCategoryService: new StandardService(IxItemSubCategory),
    ixItemTypeService: new StandardService(IxItemType),
    ixItemUomService: new StandardService(IxItemUom),
    ixItemLabelService: new StandardService(IxItemLabel),
    ixPrincipalService: new StandardService(IxPrincipal),
    ixProvinceService: new StandardService(IxProvince),
    ixCityService: new StandardService(IxCity),
    ixDistrictService: new StandardService(IxDistrict),
    ixSubdistrictService: new StandardService(IxSubdistrict),
    ixWarehouseService: new StandardService(IxWarehouse),
    ixSupplierService: new StandardService(IxSupplier),
    ixSupplierGroupService: new StandardService(IxSupplierGroup),
    ixSupplierSegmentationService: new StandardService(IxSupplierSegmentation),
    ixSupplierSubsegmentationService: new StandardService(IxSupplierSubsegmentation),
    ixSupplierSubsubsegmentationService: new StandardService(IxSupplierSubsubsegmentation),
    ixSupplierTypeService: new StandardService(IxSupplierType),
    ixSupplierRegionService: new StandardService(IxSupplierRegion),
    ixCustomerService: new StandardService(IxCustomer),
    ixCustomerGroupService: new StandardService(IxCustomerGroup),
    ixCustomerSegmentationService: new StandardService(IxCustomerSegmentation),
    ixCustomerSubsegmentationService: new StandardService(IxCustomerSubsegmentation),
    ixCustomerSubsubsegmentationService: new StandardService(IxCustomerSubsubsegmentation),
    ixCustomerTypeService: new StandardService(IxCustomerType),
    ixCustomerRegionService: new StandardService(IxCustomerRegion),
    ixSalesmanService: new StandardService(IxSalesman),
    ixCoaService: new StandardService(IxCoa),
    ixCoaGroupService: new StandardService(IxCoaGroup),
    ixCoaListService: new StandardService(IxCoaList),
    ixCoaSubgroupService: new StandardService(IxCoaSubgroup),
    ixCoaSubledgerService: new StandardService(IxCoaSubledger),
    ixCoaTypeService: new StandardService(IxCoaType),
    ixFixedAsset: new StandardService(IxFixedAsset),
    ixFixedAssetGroupService: new StandardService(IxFixedAssetGroup),
    ixFixedAssetCategoryService: new StandardService(IxFixedAssetCategory),
    ixCoretaxTypeService: new StandardService(IxCoretaxType),
    ixCoretaxCategoryService: new StandardService(IxCoretaxCategory),
    ixCoretaxTransactionCodeService: new StandardService(IxCoretaxTransactionCode),
    ixCoretaxInfoService: new StandardService(IxCoretaxInfo),
    ixCoretaxFacilityService: new StandardService(IxCoretaxFacility),
    ixCoretaxUomService: new StandardService(IxCoretaxUom),
    ixCoretaxCountryService: new StandardService(IxCoretaxCountry),
    ixCoretaxTaxService: new StandardService(IxCoretaxTax),
    ixBuyingPriceImportService: new StandardService(IxBuyingPriceImport),
    ixBuyingPriceService: new StandardService(IxBuyingPrice),
    ixSellingPriceService: new StandardService(IxSellingPrice),
    ixExportSellingPriceService: new StandardService(IxExportSellingPrice),
    ixBeginningGlService: new StandardService(IxBeginningGl),
    ixCustomerBalanceService: new StandardService(IxCustomerBalance),
    ixSupplierBalanceService: new StandardService(IxSupplierBalance),
    ixUserItemService: new StandardService(IxUserItem),
    ixUserCustomerService: new StandardService(IxUserCustomer),
    ixUserSupplierService: new StandardService(IxUserSupplier),
    ixUserSalesmanService: new StandardService(IxUserSalesman),
    ixUserTurunanService: new StandardService(IxUserTurunan),
    ixBeginningService: new StandardService(IxBeginning),
    ixBeginningImportService: new StandardService(IxBeginningImport),
    ixCustomerBalanceExportService: new StandardService(IxCustomerBalanceExport),
    transactionTraceService: new StandardService(TransactionTrace),
    ixFakturService: new StandardService(IxFaktur),
    msCk6GolonganService: new MsCk6GolonganService(MsCk6Golongan),
    importDataService: new ImportDataService()
  };
};
export default initServices;
