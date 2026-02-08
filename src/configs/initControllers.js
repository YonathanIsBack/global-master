import AccessController from '../controllers/AccessController.js';
import { ActionController, ActionPageController } from '../controllers/ActionController.js';
import { AutoCodeController, AutoCodeCountController, AutoJurnalController } from '../controllers/AutoController.js';
import { BackdatedController, BackdatedLogsController, BackdatedUserController } from '../controllers/BackedatedController.js';
import BankController from '../controllers/BankController.js';
import BrandController from '../controllers/BrandController.js';
import { BuyingPriceListController, BuyingPriceListDetailController } from '../controllers/BuyingPriceListController.js';
import { BuyingPriceListImportController, BuyingPriceListImportDetailController } from '../controllers/BuyingPriceListImportController.js';
import CityController from '../controllers/CityController.js';
import { CoaBankController, CoaController, CoaGroupController, CoaSubGroupController, CoaTypeController } from '../controllers/CoaController.js';
import { CompanyBankController, CompanyController } from '../controllers/CompanyController.js';
import { CountryCodeController, CountryController } from '../controllers/CountryController.js';
import CurrencyController from '../controllers/CurrencyController.js';
import {
  CustomerBillingController,
  CustomerCartController,
  CustomerCodeController,
  CustomerContactController,
  CustomerController,
  CustomerDeliveryController,
  CustomerDocumentController,
  CustomerGroupController,
  CustomerImgController,
  CustomerRegionController,
  CustomerSalesController,
  CustomerSegmentationController,
  CustomerTaxController,
  CustomerTypeController
} from '../controllers/CustomerController.js';
import DepartmentController from '../controllers/DepartmentController.js';
import DistrictController from '../controllers/DistrictController.js';
import EndOfMonthController from '../controllers/EndOfMonthController.js';
import EndOfMonthLogController from '../controllers/EndOfMonthLogController.js';
import EndOfMonthSettingController from '../controllers/EndOfMonthSettingController.js';
import FakturPajakController from '../controllers/FakturPajakController.js';
import {
  FixedAssetCategoryController,
  FixedAssetController,
  FixedAssetGroupController,
  FixedDepreciationController
} from '../controllers/FixedAssetController.js';
import ImportDataController from '../controllers/ImportDataController.js';
import {
  ItemBuyingController,
  ItemCategoryController,
  ItemComboController,
  ItemController,
  ItemImgController,
  ItemLabelController,
  ItemLabelDetailController,
  ItemPriceController,
  ItemSubcategoryController,
  ItemTypeController,
  ItemUomController
} from '../controllers/ItemController.js';
import KasbonPotonganController from '../controllers/KasbonPotonganController.js';
import { LabelController, LabelSettinganPrintController } from '../controllers/LabelController.js';
import LocationController from '../controllers/LocationController.js';
import MonitorApiController from '../controllers/MonitorApiController.js';
import { NotificationController, NotificationDetailController } from '../controllers/NotificationController.js';
import { PageMenuController, PageMenuTerbukaController } from '../controllers/PageMenuController.js';
import PaymentTermController from '../controllers/PaymentTermController.js';
import PeriodeController from '../controllers/PeriodeController.js';
import PeriodeLogController from '../controllers/PeriodeLogController.js';
import PreferenceController from '../controllers/PreferenceController.js';
import PrincipalController from '../controllers/PrincipalController.js';
import ProvinceController from '../controllers/ProvinceController.js';
import PusherController from '../controllers/PusherController.js';
import { SalesPriceController, SalesPriceDetailController } from '../controllers/SalesPriceController.js';
import { SalesmanCommissionController, SalesmanController, SalesmanTargetController } from '../controllers/SalesmanController.js';
import ShippingController from '../controllers/ShippingController.js';
import StAutoApproveController from '../controllers/StAutoApproveController.js';
import StCurrencyRateController from '../controllers/StCurrencyRateController.js';
import StCurrencyRateDetailController from '../controllers/StCurrencyRateDetailController.js';
import StratumController from '../controllers/StratumController.js';
import SubdistrictController from '../controllers/SubdistrictController.js';
import {
  SupplierBankController,
  SupplierBrandController,
  SupplierContactController,
  SupplierController,
  SupplierGroupController,
  SupplierPaymentController,
  SupplierPurchaseController,
  SupplierRegionController,
  SupplierSegmentationController,
  SupplierTaxController,
  SupplierTypeController
} from '../controllers/SupplierController.js';
import { TaxController, TaxFormController } from '../controllers/TaxController.js';
import { TrPurchaseTargetController, TrPurchaseTargetDtController } from '../controllers/TrPurchaseTargetController.js';
import TrSafetyStockController from '../controllers/TrSafetyStockController.js';
import { TrSalesTargetController, TrSalesTargetDtController } from '../controllers/TrSalesTargetController.js';
import { TrSalesmanTargetController, TrSalesmanTargetDtController } from '../controllers/TrSalesmanTargetController.js';
import {
  NoTransactionController,
  TransCodeController,
  TransCodeGroupController,
  TransactionCodeController
} from '../controllers/TransCodeController.js';
import TransactionController from '../controllers/TransactionController.js';
import {
  UserAksesCompanyController,
  UserController,
  UserCustomerController,
  UserGroupAccessController,
  UserGroupController,
  UserGroupCustomerController,
  UserItemController,
  UserOtpController,
  UserSalesmanController,
  UserSupplierController,
  UserTableViewColumnController,
  UserTurunanController
} from '../controllers/UserController.js';
import VintageController from '../controllers/VintageController.js';
import { WarehouseController, WarehouseLevelController } from '../controllers/WarehouseController.js';
import CashBankController from '../controllers/gl/CashBankController.js';
import DeferralController from '../controllers/gl/DeferralJurnalController.js';
import MemoJurnalController from '../controllers/gl/MemoJurnalController.js';
import PaymentMemoController from '../controllers/gl/PaymentMemoController.js';
import { CoretaxCategoryController, CoretaxCountryController, CoretaxFacilityController, CoretaxInfoController, CoretaxJenisPembeliController, CoretaxTaxController, CoretaxTransactionCodeController, CoretaxTypeController, CoretaxUomController } from '../controllers/ms/CoretaxController.js';
import { StCoaController, StCoaDtControler } from '../controllers/st/StCoaController.js';
import KasbonController from '../controllers/tr/KasbonController.js';
import {
  ExportSalesAdvancePaymentController,
  ExportSalesAdvancePaymentRejectController,
  ExportSalesAdvancePaymentRequestController
} from '../controllers/tr/expot/ExportSalesAdvancePaymentController.js';
import ExportDepositController from '../controllers/tr/expot/ExportSalesDepositController.js';
import {
  ExportSalesInvoiceAdvanceController,
  ExportSalesInvoiceBc16Controller,
  ExportSalesInvoiceController,
  ExportSalesInvoiceDtController,
  ExportSalesInvoiceItemDtController,
  ExportSalesInvoiceRejectController,
  ExportSalesInvoiceRequestController
} from '../controllers/tr/expot/ExportSalesInvoiceController.js';
import { ExportSalesOrderController } from '../controllers/tr/expot/ExportSalesOrderController.js';
import { ExportSalesPackingListController } from '../controllers/tr/expot/ExportSalesPackingListController.js';
import { ExportSalesPaymentController } from '../controllers/tr/expot/ExportSalesPaymentController.js';
import { ExportSalesPriceController, ExportSalesPriceDtController } from '../controllers/tr/expot/ExportSalesPriceController.js';
import { ExportSalesQuoteController } from '../controllers/tr/expot/ExportSalesQuoteController.js';
import { ExportSalesReturnController } from '../controllers/tr/expot/ExportSalesReturnController.js';
import FixedAssetPaymentController from '../controllers/tr/fixedasset/FixedAssetPaymentController.js';
import FixedAssetPurchaseController from '../controllers/tr/fixedasset/FixedAssetPurchaseController.js';
import FixedAssetSalesController from '../controllers/tr/fixedasset/FixedAssetSalesController.js';
import FixedAssetTransferController from '../controllers/tr/fixedasset/FixedAssetTransferController.js';
import FixedAssetWriteOffController from '../controllers/tr/fixedasset/FixedAssetWriteOffController.js';
import { ImportAdvancedPaymentController } from '../controllers/tr/import/ImportAdvancedPaymentController.js';
import { ImportCreditNoteController } from '../controllers/tr/import/ImportCreditNoteController.js';
import { ImportInvoiceController } from '../controllers/tr/import/ImportInvoiceController.js';
import { ImportOrderController } from '../controllers/tr/import/ImportOrderController.js';
import { ImportPaymentController } from '../controllers/tr/import/ImportPaymentController.js';
import { ImportQuoteController } from '../controllers/tr/import/ImportQuoteController.js';
import { ImportReceiveController } from '../controllers/tr/import/ImportReceiveController.js';
import { ImportReturnController } from '../controllers/tr/import/ImportReturnController.js';
import { ImportClearanceController } from '../controllers/tr/import/ImportSalesClearanceController.js';
import { ImportStockTransferController } from '../controllers/tr/import/ImportStockTransferController.js';
import { InventoryAdjustmentController } from '../controllers/tr/inventory/InventoryAdjustmentController.js';
import { InventoryTransferController } from '../controllers/tr/inventory/InventoryTransferController.js';
import { PembayaranSendController } from '../controllers/tr/memo/PembayaranSendController.js';
import OffshorePurchaseAdvancedPaymentController from '../controllers/tr/offshore/OffshorePurchaseAdvancedPaymentController.js';
import OffshorePurchaseCreditNoteController from '../controllers/tr/offshore/OffshorePurchaseCreditNoteController.js';
import OffshorePurchaseInvoiceController from '../controllers/tr/offshore/OffshorePurchaseInvoiceController.js';
import OffshorePurchaseOrderController from '../controllers/tr/offshore/OffshorePurchaseOrderController.js';
import OffshorePurchasePaymentController from '../controllers/tr/offshore/OffshorePurchasePaymentController.js';
import OffshorePurchaseReceiveController from '../controllers/tr/offshore/OffshorePurchaseReceiveController.js';
import OffshoreSalesInvoiceController from '../controllers/tr/offshore/OffshoreSalesInvoiceController.js';
import OffshoreSalesPaymentController from '../controllers/tr/offshore/OffshoreSalesPaymentController.js';
import { PurchaseAdvancePaymentController } from '../controllers/tr/purchase/PurchaseAdvancePaymentController.js';
import { PurchaseInvoiceController } from '../controllers/tr/purchase/PurchaseInvoiceController.js';
import { PurchaseOrderController } from '../controllers/tr/purchase/PurchaseOrderController.js';
import { PurchasePaymentController } from '../controllers/tr/purchase/PurchasePaymentController.js';
import { PurchaseQuoteController } from '../controllers/tr/purchase/PurchaseQuoteController.js';
import { PurchaseReceiveController } from '../controllers/tr/purchase/PurchaseReceiveController.js';
import { PurchaseReturnController } from '../controllers/tr/purchase/PurchaseReturnController.js';
import { SalesAdvancePaymentController } from '../controllers/tr/sales/SalesAdvancePaymentController.js';
import { SalesContractController } from '../controllers/tr/sales/SalesContractController.js';
import { SalesDeliveryFixedController } from '../controllers/tr/sales/SalesDeliverFixedController.js';
import { SalesDeliveryNoteController } from '../controllers/tr/sales/SalesDeliverNoteController.js';
import { SalesDepositController } from '../controllers/tr/sales/SalesDepositController.js';
import { SalesInvoiceController } from '../controllers/tr/sales/SalesInvoiceController.js';
import {
  SalesOrderAdvanceController,
  SalesOrderController,
  SalesOrderDepositController,
  SalesOrderDtController,
  SalesOrderRejectController,
  SalesOrderRequestController
} from '../controllers/tr/sales/SalesOrderController.js';
import { SalesPaymentController } from '../controllers/tr/sales/SalesPaymentController.js';
import {
  SalesQuoteController,
  SalesQuoteDtController,
  SalesQuoteItemDtController,
  SalesQuoteRejectController,
  SalesQuoteRequestController
} from '../controllers/tr/sales/SalesQuoteController.js';
import { SalesReturnController } from '../controllers/tr/sales/SalesReturnController.js';
import { StockComboController, StockComboReverseController } from '../controllers/tr/stock/StockComboController.js';
import StockOpnameController from '../controllers/tr/stock/StockOpnameController.js';

const initControllers = (services) => {
  return {
    accessController: new AccessController(services.accessService),
    actionController: new ActionController(services.actionService),
    actionPageController: new ActionPageController(services.actionPageService),
    autoCodeController: new AutoCodeController(services.autoCodeService),
    autoCodeCountController: new AutoCodeCountController(services.autoCodeCountService),
    autoJurnalController: new AutoJurnalController(services.autoJurnalService),
    backdatedController: new BackdatedController(services.backdatedService),
    backdatedLogsController: new BackdatedLogsController(services.backdatedLogService),
    backdatedUserController: new BackdatedUserController(services.backdatedUserService),
    bankController: new BankController(services.bankService),
    brandController: new BrandController(services.brandService),
    buyingPriceListImportController: new BuyingPriceListImportController(services.buyingPriceListImportService),
    buyingPriceListImportDetailController: new BuyingPriceListImportDetailController(services.buyingPriceListImportDetailService),
    buyingPriceListController: new BuyingPriceListController(services.buyingPriceListService),
    buyingPriceListDetailController: new BuyingPriceListDetailController(services.buyingPriceListDetailService),
    cityController: new CityController(services.cityService),
    coaController: new CoaController(services.coaService),
    coaBankController: new CoaBankController(services.coaBankService),
    coaGroupController: new CoaGroupController(services.coaGroupService),
    coaSubGroupController: new CoaSubGroupController(services.coaSubGroupService),
    coaTypeController: new CoaTypeController(services.coaTypeService),
    companyController: new CompanyController(services.companyService),
    companyBankController: new CompanyBankController(services.companyBankService),
    countryController: new CountryController(services.countryService),
    countryCodeController: new CountryCodeController(services.countryCodeService),
    currencyController: new CurrencyController(services.currencyService),
    customerController: new CustomerController(services.customerService),
    customerBillingController: new CustomerBillingController(services.customerBillingService),
    customerCartController: new CustomerCartController(services.customeCartService),
    customerCodeController: new CustomerCodeController(services.customerCodeService),
    customerContactController: new CustomerContactController(services.customerContactSevice),
    customerDeliveryController: new CustomerDeliveryController(services.customerDeliveryService),
    customerDocumentController: new CustomerDocumentController(services.customerDocumentSerice),
    customerGroupController: new CustomerGroupController(services.customerGroupService),
    customerImgController: new CustomerImgController(services.customerImgService),
    customerRegionController: new CustomerRegionController(services.customerRegionService),
    customerSalesController: new CustomerSalesController(services.customerSalesService),
    customerSegmentationController: new CustomerSegmentationController(services.customerSegmentationService),
    customerTaxController: new CustomerTaxController(services.customerTaxService),
    customerTypeController: new CustomerTypeController(services.customerTypeService),
    departmentController: new DepartmentController(services.departmentService),
    endOfMonthLogController: new EndOfMonthLogController(services.endOfMonthLogService),
    endOfMonthController: new EndOfMonthController(services.endOfMonthService),
    endOfMonthSettingController: new EndOfMonthSettingController(services.endOfMonthSettingService),
    fakturPajakController: new FakturPajakController(services.fakturPajakService),
    fixedAssetController: new FixedAssetController(services.fixedAssetService),
    fixedAssetCategoryController: new FixedAssetCategoryController(services.fixedAssetCategoryService),
    fixedAssetGroupController: new FixedAssetGroupController(services.fixedAssetGroupService),
    fixedDepreciationController: new FixedDepreciationController(services.fixedDepreciationService),
    itemController: new ItemController(services.itemService),
    itemBuyingController: new ItemBuyingController(services.itemBuyingService),
    itemCategoryController: new ItemCategoryController(services.itemCategoryService),
    itemComboController: new ItemComboController(services.itemComboService),
    itemImgController: new ItemImgController(services.itemImgService),
    itemLabelController: new ItemLabelController(services.itemLabelService),
    itemLabelDetailController: new ItemLabelDetailController(services.itemLabelDetailService),
    itemPriceController: new ItemPriceController(services.itemPriceService),
    itemSubcategoryController: new ItemSubcategoryController(services.itemSubcategoryService),
    itemTypeController: new ItemTypeController(services.itemTypeService),
    itemUomController: new ItemUomController(services.itemUomService),
    kasbonPotonganController: new KasbonPotonganController(services.kasbonPotonganService),
    labelController: new LabelController(services.labelService),
    labelSettinganPrintController: new LabelSettinganPrintController(services.labelSettinganPrintService),
    locationController: new LocationController(services.locationService),
    notificationController: new NotificationController(services.notificationService),
    notificationDetailController: new NotificationDetailController(services.notificationDtService),
    pageMenuController: new PageMenuController(services.pageMenuService),
    pageMenuTerbukaController: new PageMenuTerbukaController(services.pageMenuTerbukaService),
    paymentController: new PaymentTermController(services.paymentService),
    periodeLogController: new PeriodeLogController(services.periodeLogService),
    periodeController: new PeriodeController(services.periodeService),
    preferenceController: new PreferenceController(services.preferenceService),
    principalController: new PrincipalController(services.principalService),
    provinceController: new ProvinceController(services.provinceService),
    districtController: new DistrictController(services.districtService),
    subdistrictController: new SubdistrictController(services.subdistrictService),
    salesmanController: new SalesmanController(services.salesmanService),
    salesmanCommissionController: new SalesmanCommissionController(services.salesmanCommissionService),
    salesmanTargetController: new SalesmanTargetController(services.salesmanTargetService),
    salesPriceController: new SalesPriceController(services.salesPriceService),
    salesPriceDetailController: new SalesPriceDetailController(services.salesPriceDetailService),
    shippingController: new ShippingController(services.shippingService),
    stAutoApproveController: new StAutoApproveController(services.stAutoApproveService),
    stCurrencyRateController: new StCurrencyRateController(services.stCurrencyRate),
    stCurrencyRateDetailController: new StCurrencyRateDetailController(services.stCurrencyRateDetailService),
    stratumController: new StratumController(services.stratumService),
    supplierController: new SupplierController(services.supplierService),
    supplierBankController: new SupplierBankController(services.supplierBankService),
    supplierBrandController: new SupplierBrandController(services.supplierBrandService),
    supplierContactController: new SupplierContactController(services.supplierContactService),
    supplierGroupController: new SupplierGroupController(services.supplierGroupService),
    supplierPaymentController: new SupplierPaymentController(services.supplierPaymentService),
    supplierPurchaseController: new SupplierPurchaseController(services.supplierPurchaseService),
    supplierRegionController: new SupplierRegionController(services.supplierRegionService),
    supplierSegmentationController: new SupplierSegmentationController(services.supplierSegmentationService),
    supplierTaxController: new SupplierTaxController(services.supplierTaxService),
    supplierTypeController: new SupplierTypeController(services.supplierTypeService),
    taxController: new TaxController(services.taxService),
    taxFormController: new TaxFormController(services.taxFormService),
    transactionController: new TransactionController(services.transactionService),
    transCodeController: new TransCodeController(services.transCodeService),
    transCodeGroupController: new TransCodeGroupController(services.transCodeGroupService),
    transactionCodeController: new TransactionCodeController(services.transactionCodeService),
    noTransactionController: new NoTransactionController(services.noTransactionService),
    trPurchaseTargetController: new TrPurchaseTargetController(services.trPurchaseTargetService),
    trPurchaseTargetDetailController: new TrPurchaseTargetDtController(services.trPurchaseTargetDetailService),
    trSafetyStockController: new TrSafetyStockController(services.trSafetyStockService),
    trSalesmanTargetController: new TrSalesmanTargetController(services.trSalesmanTargetService),
    trSalesmanTargetDtController: new TrSalesmanTargetDtController(services.trSalesmanTargetDtService),
    trSalesTargetController: new TrSalesTargetController(services.trSalesTargetService),
    trSalesTargetDtController: new TrSalesTargetDtController(services.trSalesTargetDtService),
    userController: new UserController(services.userService),
    userAksesCompanyController: new UserAksesCompanyController(services.userAksesCompanyService),
    userGroupController: new UserGroupController(services.userGroupService),
    userGroupAccessController: new UserGroupAccessController(services.userGroupAccessService),
    userGroupCustomerController: new UserGroupCustomerController(services.userGroupCustomerService),
    userOtpController: new UserOtpController(services.userOtpService),
    userTableViewColumnController: new UserTableViewColumnController(services.userTableViewColumnService),
    userItemController: new UserItemController(services.userItemService),
    userCustomerController: new UserCustomerController(services.userCustomerService),
    userSalesmanController: new UserSalesmanController(services.userSalesmanService),
    userSupplierController: new UserSupplierController(services.userSupplierService),
    userTurunanController: new UserTurunanController(services.userTurunanService),
    vintageController: new VintageController(services.vintageService),
    warehouseController: new WarehouseController(services.warehouseService),
    warehouseLevelController: new WarehouseLevelController(services.warehouseLevelService),
    exportSalesAdvancePaymentController: new ExportSalesAdvancePaymentController(services.exportSalesAdvancePaymentService),
    exportSalesAdvancePaymentRejectController: new ExportSalesAdvancePaymentRejectController(services.exportSalesAdvancePaymentRejectService),
    exportSalesAdvancePaymentRequestController: new ExportSalesAdvancePaymentRequestController(services.exportSalesAdvancedPaymentRequestService),
    exportDepositController: new ExportDepositController(services.exportDepositService),
    exportSalesInvoiceController: new ExportSalesInvoiceController(services.exportSalesInvoiceService),
    exportSalesInvoiceAdvanceController: new ExportSalesInvoiceAdvanceController(services.exportSalesInvoiceAdvanceService),
    exportSalesInvoiceBc16Controller: new ExportSalesInvoiceBc16Controller(services.exportSalesInvoiceBc16Service),
    exportSalesInvoiceDtController: new ExportSalesInvoiceDtController(services.exportSalesInvoiceDtService),
    exportSalesInvoiceItemDtController: new ExportSalesInvoiceItemDtController(services.exportSalesInvoiceItemDtService),
    exportSalesAdvancePaymentRejectController: new ExportSalesInvoiceRejectController(services.exportSalesInvoiceRejectService),
    exportSalesAdvancePaymentRequestController: new ExportSalesInvoiceRequestController(services.exportSalesInvoiceRequestService),
    inventoryAdjustmentController: new InventoryAdjustmentController(services.inventoryAdjustmentService),
    inventoryTransferController: new InventoryTransferController(services.inventoryTransferService),
    salesQuoteController: new SalesQuoteController(services.salesQuoteService),
    salesQuoteDtController: new SalesQuoteDtController(services.salesQuoteDtService),
    salesQuoteItemController: new SalesQuoteItemDtController(services.salesQuoteItemService),
    salesQuoteRejectController: new SalesQuoteRejectController(services.salesQuoteRejectService),
    salesQuoteRequestController: new SalesQuoteRequestController(services.salesQuoteRequestService),
    stockComboController: new StockComboController(services.stockComboService),
    stockComboReverseController: new StockComboReverseController(services.stockComboReverseService),
    stockOpnameController: new StockOpnameController(services.stockOpnameService),
    salesDeliveryNoteController: new SalesDeliveryNoteController(services.salesDeliveryNoteService),
    salesDeliveryFixedController: new SalesDeliveryFixedController(services.salesDeliveryFixedService),
    salesInvoiceController: new SalesInvoiceController(services.salesInvoiceService),
    salesReturnController: new SalesReturnController(services.salesReturnService),
    salesAdvancePaymentController: new SalesAdvancePaymentController(services.salesAdvancePaymentService),
    salesContractController: new SalesContractController(services.salesContractService),
    salesDepositController: new SalesDepositController(services.salesDepositService),
    salesPaymentController: new SalesPaymentController(services.salesPaymentService),
    importQuoteController: new ImportQuoteController(services.importQuoteService),
    importOrderController: new ImportOrderController(services.importOrderService),
    importReceiveController: new ImportReceiveController(services.importReceiveService),
    importInvoiceController: new ImportInvoiceController(services.importInvoiceService),
    importReturnController: new ImportReturnController(services.importReturnService),
    importStockTransferController: new ImportStockTransferController(services.importStockTransferService),
    importClearanceController: new ImportClearanceController(services.importClearanceService),
    importAdvancePaymentController: new ImportAdvancedPaymentController(services.importAdvancePaymentService),
    importCreditNoteController: new ImportCreditNoteController(services.importCreditNoteService),
    importPaymentController: new ImportPaymentController(services.importPaymentService),
    purchaseQuoteController: new PurchaseQuoteController(services.purchaseQuoteService),
    purchaseOrderController: new PurchaseOrderController(services.purchaseOrderService),
    purchaseReceiveController: new PurchaseReceiveController(services.purchaseReceiveService),
    purchaseInvoiceController: new PurchaseInvoiceController(services.purchaseInvoiceService),
    purchaseReturnController: new PurchaseReturnController(services.purchaseReturnService),
    purchaseAdvancePaymentController: new PurchaseAdvancePaymentController(services.purchaseAdvancePaymentService),
    purchasePaymentController: new PurchasePaymentController(services.purchasePaymentService),
    exportSalesQuoteController: new ExportSalesQuoteController(services.exportSalesQuoteService),
    exportSalesOrderController: new ExportSalesOrderController(services.exportSalesOrderService),
    exportSalesPackingListController: new ExportSalesPackingListController(services.exportSalesPackingListService),
    exportSalesReturnController: new ExportSalesReturnController(services.exportSalesReturnService),
    exportSalesAdvancePaymentController: new ExportSalesAdvancePaymentController(services.exportSalesAdvancePaymentService),
    exportSalesPaymentController: new ExportSalesPaymentController(services.exportSalesPaymentService),
    pusherController: new PusherController(services.pusherService),
    cashBankController: new CashBankController(services.cashBankService),
    memoJurnalController: new MemoJurnalController(services.memoJurnalService),
    deferralController: new DeferralController(services.deferralService),
    paymentMemoController: new PaymentMemoController(services.paymentMemoService),
    pembayaranSendController: new PembayaranSendController(services.pembayaranSendService),
    kasbonController: new KasbonController(services.kasbonService),
    fixedAssetPurchaseController: new FixedAssetPurchaseController(services.fixedAssetPurchaseService),
    salesQuoteController: new SalesQuoteController(services.salesQuoteService),
    salesQuoteDtController: new SalesQuoteDtController(services.salesQuoteDtService),
    salesQuoteItemController: new SalesQuoteItemDtController(services.salesQuoteItemService),
    salesQuoteRejectController: new SalesQuoteRejectController(services.salesQuoteRejectService),
    salesQuoteRequestController: new SalesQuoteRequestController(services.salesQuoteRequestService),
    salesOrderController: new SalesOrderController(services.salesOrderService),
    salesOrderAdvanceController: new SalesOrderAdvanceController(services.salesOrderAdvanceService),
    salesOrderDepositController: new SalesOrderDepositController(services.salesOrderDepositService),
    salesOrderDtController: new SalesOrderDtController(services.salesOrderDtService),
    // salesOrderItemController: new SalesQuoteItemDtController(services.salesOrderItemDtService),
    salesOrderRejectController: new SalesOrderRejectController(services.salesOrderRejectService),
    salesOrderRequestController: new SalesOrderRequestController(services.salesOrderRequestService),
    fixedAssetPaymentController: new FixedAssetPaymentController(services.fixedAssetPaymentService),
    fixedAssetPurchaseController: new FixedAssetPurchaseController(services.fixedAssetPurchaseService),
    fixedAssetSalesController: new FixedAssetSalesController(services.fixedAssetSalesService),
    fixedAssetTransferController: new FixedAssetTransferController(services.fixedAssetTransferService),
    fixedAssetWriteOffController: new FixedAssetWriteOffController(services.fixedAssetWriteOffService),
    exportSalesPriceController: new ExportSalesPriceController(services.exportSalesPriceService),
    exportSalesPriceDtController: new ExportSalesPriceDtController(services.exportSalesPriceDtService),
    stCoaController: new StCoaController(services.stCoaService),
    stCoaDtController: new StCoaDtControler(services.stCoaDtService),
    coretaxCategoryController: new CoretaxCategoryController(services.coretaxCategoryService),
    coretaxCountryController: new CoretaxCountryController(services.coretaxCountryService),
    coretaxFacilityController: new CoretaxFacilityController(services.coretaxFacilityService),
    coretaxInfoController: new CoretaxInfoController(services.coretaxInfoService),
    coretaxJenisPembeliController: new CoretaxJenisPembeliController(services.coretaxJenisPembeliService),
    coretaxTaxController: new CoretaxTaxController(services.coretaxTaxService),
    coretaxTransactionCodeController: new CoretaxTransactionCodeController(services.coretaxTransactionCodeService),
    coretaxTypeController: new CoretaxTypeController(services.coretaxTypeService),
    coretaxUomController: new CoretaxUomController(services.coretaxUomService),
    offshorePurchaseOrderController: new OffshorePurchaseOrderController(services.offshorePurchaseOrderService),
    offshorePurchaseReceiveController: new OffshorePurchaseReceiveController(services.offshorePurchaseReceiveService),
    offshorePurchaseInvoiceController: new OffshorePurchaseInvoiceController(services.offshorePurchaseInvoiceService),
    offshorePurchaseAdvancedPaymentController: new OffshorePurchaseAdvancedPaymentController(services.offshorePurchaseAdvancedPaymentService),
    offshorePurchasePaymentController: new OffshorePurchasePaymentController(services.offshorePurchasePaymentService),
    offshorePurchaseCreditNoteController: new OffshorePurchaseCreditNoteController(services.offshorePurchaseCreditNoteService),
    offshoreSalesInvoiceController: new OffshoreSalesInvoiceController(services.offshoreSalesInvoiceService),
    offshoreSalesPaymentController: new OffshoreSalesPaymentController(services.offshoreSalesPaymentService),
    monitorApiController: new MonitorApiController(),
    importDataController: new ImportDataController(services.importDataService)
  };
};

export default initControllers;
