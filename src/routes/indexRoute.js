import 'dotenv/config';
import { Router } from 'express';
import 'express-async-errors';
import { StatusCodes } from 'http-status-codes';
import multer from 'multer';
import stream from 'stream';
import swaggerJSDoc from 'swagger-jsdoc';
import { serve, setup } from 'swagger-ui-express';
import Constant from '../constants/Constant.js';
import Endpoint from '../constants/Endpoint.js';
import authenticationMiddleware from '../middleware/authenticationMiddleware.js';
import errorMiddleware from '../middleware/errorMiddleware.js';
import logMiddleware from '../middleware/logMiddleware.js';
import DevelopmentUtil from '../util/DevelopmentUtil.js';
import buildResponse from '../util/buildResponse.js';
import postmanCollectionBuilder from '../util/documentation/postmanCollectionBuilder.js';
import postmanEnvironmentBuilder from '../util/documentation/postmanEnvironmentBuilder.js';
import swaggerProps from '../util/documentation/swaggerProps.js';
import { transCodeGroupRoute, transCodeRoute } from './TransCodeRoute.js';
import accessRoute from './accessRoute.js';
import { actionPageRoute, actionRoute } from './actionRoute.js';
import { autoCodeCountRoute, autoCodeRoute, autoJurnalRoute } from './autoRoute.js';
import { backdateLogsdRoute, backdatedRoute, backdatedUserRoute } from './backdatedRoute.js';
import bankRoute from './bankRoute.js';
import brandRoute from './brandRoute.js';
import { buyingPriceListImportRoute } from './buyingPriceListImportRoute.js';
import { buyingPriceListRoute } from './buyingPriceListRoute.js';
import cityRoute from './cityRoute.js';
import { coaBankRoute, coaGroupRoute, coaRoute, coaSubGroupRoute, coaSubLedgerRoute, coaTypeRoute } from './coaRoute.js';
import { companyBankRoute, companyRoute } from './companyRoute.js';
import { countryCodeRoute, countryRoute } from './countryRoute.js';
import currencyRoute from './currencyRoute.js';
import {
  customerBillingRoute,
  customerCartRoute,
  customerCodeRoute,
  customerContactRoute,
  customerDeliveryRoute,
  customerDocumentRoute,
  customerGroupRoute,
  customerImgRoute,
  customerRegionRoute,
  customerRoute,
  customerSalesRoute,
  customerSegmentationRoute,
  customerSubSegmentationRoute,
  customerSubSubSegmentationRoute,
  customerTaxRoute,
  customerTypeRoute
} from './customerRoute.js';
import departmentRoute from './departmentRoute.js';
import endOfMonthLogRoute from './endOfMonthLogRoute.js';
import endOfMonthRoute from './endOfMonthRoute.js';
import endOfMonthSettingRoute from './endOfMonthSettingRoute.js';
import fakturPajakRoute from './fakturPajakRoute.js';
import { fixedAssetCategoryRoute, fixedAssetGroupRoute, fixedAssetRoute, fixedDepreciationRoute } from './fixedAssetRoute.js';
import {
  itemBuyingRoute,
  itemCategoryRoute,
  itemComboRoute,
  itemImgRoute,
  itemLabelDetailRoute,
  itemLabelRoute,
  itemPriceRoute,
  itemRoute,
  itemSubcategoryRoute,
  itemTypeRoute,
  itemUomRoute
} from './itemRoute.js';
import kasbonPotonganRoute from './kasbonPotonganRoute.js';
import { labelRoute, labelSettinganPrintRoute } from './labelRoute.js';
import locationRoute from './locationRoute.js';
import loginRoute from './loginRoute.js';
import { notificationDetailRoute, notificationRoute } from './notificationRoute.js';
import { pageMenuRoute, pageMenuTerbukaRoute } from './pageMenuRoute.js';
import paymentTermRoute from './paymentTermRoute.js';
import periodeLogRoute from './periodeLogRoute.js';
import periodeRoute from './periodeRoute.js';
import preferenceRoute from './preferenceRoute.js';
import principalRoute from './principalRoute.js';
import provinceRoute from './provinceRoute.js';
import { salesPriceDetailRoute, salesPriceRoute } from './salesPriceRoute.js';
import { salesmanCommissionRoute, salesmanRoute } from './salesmanRoute.js';
import shippingRoute from './shippingRoute.js';
import stAutoApproveRoute from './stAutoApproveRoute.js';
import stCurrencyRateRoute from './stCurrencyRateRoute.js';
import stCurrencyRateDetailRoute from './stCurrencyRateRouteDetail.js';
import stratumRoute from './stratumRoute.js';
import {
  supplierBankRoute,
  supplierBrandRoute,
  supplierContactRoute,
  supplierGroupRoute,
  supplierPaymentRoute,
  supplierPurchaseRoute,
  supplierRegionRoute,
  supplierRoute,
  supplierSegmentationRoute,
  supplierTaxRoute,
  supplierTypeRoute
} from './supplierRoute.js';
import { taxFormRoute, taxRoute } from './taxRoute.js';
import exportSalesAdvancePaymentRoute from './tr/export/exportSalesAdvancePaymentRoute.js';
import { exportSalesInvoiceRoute } from './tr/export/exportSalesInvoiceRoute.js';
import exportSalesOrderRoute from './tr/export/exportSalesOrderRoute.js';
import exportSalesPaymentRoute from './tr/export/exportSalesPaymentRoute.js';
import exportSalesQuoteRoute from './tr/export/exportSalesQuoteRoute.js';
import exportSalesReturnRoute from './tr/export/exportSalesReturnRoute.js';
import importAdvancePaymentRoute from './tr/import/importAdvancePaymentRoute.js';
import importClearanceRoute from './tr/import/importClearanceRoute.js';

import sanitationMiddleware from '../middleware/sanitationMiddleware.js';
import districtRoute from './districtRoute.js';
import cashBankRoute from './gl/cashBankRoute.js';
import deferralJurnalRoute from './gl/deferralJurnalRoute.js';
import memoJurnalRoute from './gl/memoJurnalRoute.js';
import paymentMemoRoute from './gl/paymentMemoRoute.js';
import { coretaxCategoryRoute, coretaxCountryRoute, coretaxFacilityRoute, coretaxInfoRoute, coretaxJenisPembeliRoute, coretaxTaxRoute, coretaxTransactionCodeRoute, coretaxTypeRoute, coretaxUomRoute } from './ms/coretaxRoute.js';
import { stCoaDtRoute, stCoaRoute } from './st/stCoaRoute.js';
import subdistrictRoute from './subdistrictRoute.js';
import exportSalesPackingListRoute from './tr/export/exportSalesPackingListRoute.js';
import exportSalesPriceRoute from './tr/export/exportSalesPriceRoute.js';
import fixedAssetPaymentRoute from './tr/fixedasset/fixedAssetPaymentRoute.js';
import fixedAssetPurchaseRoute from './tr/fixedasset/fixedAssetPurchaseRoute.js';
import fixedAssetSalesRoute from './tr/fixedasset/fixedAssetSalesRoute.js';
import fixedAssetTransferRoute from './tr/fixedasset/fixedAssetTransferRoute.js';
import fixedAssetWriteOffRoute from './tr/fixedasset/fixedAssetWriteOffRoute.js';
import importCreditNoteRoute from './tr/import/importCreditNoteRoute.js';
import importDirectRoute from './tr/import/importDirectRoute.js';
import importInvoiceRoute from './tr/import/importInvoiceRoute.js';
import importOrderRoute from './tr/import/importOrderRoute.js';
import importPaymentRoute from './tr/import/importPaymentRoute.js';
import importQuoteRoute from './tr/import/importQuoteRoute.js';
import importReceiveRoute from './tr/import/importReceiveRoute.js';
import importReturnRoute from './tr/import/importReturnRoute.js';
import importStockTransferRoute from './tr/import/importStockTransferRoute.js';
import inventoryAdjustmentRoute from './tr/inventory/inventoryAdjustmentRoute.js';
import inventoryTransferRoute from './tr/inventory/inventoryTransferRoute.js';
import kasbonRoute from './tr/kasbonRoute.js';
import pembayaranSendRoute from './tr/memo/pembayaranSendRoute.js';
import offshorePurchaseCreditNoteRoute from './tr/offshore/offshorePurchaseCreditNoteRoute.js';
import offshorePurchaseAdvancedPaymentRoute from './tr/offshore/offshorePurchaseAdvancedPaymentRoute.js';
import offshorePurchaseInvoiceRoute from './tr/offshore/offshorePurchaseInvoiceRoute.js';
import offshorePurchaseOrderRoute from './tr/offshore/offshorePurchaseOrderRoute.js';
import offshorePurchasePaymentRoute from './tr/offshore/offshorePurchasePaymentRoute.js';
import offshorePurchaseReceiveRoute from './tr/offshore/offshorePurchaseReceiveRoute.js';
import offshoreSalesInvoiceRoute from './tr/offshore/offshoreSalesInvoiceRoute.js';
import purchaseAdvancePaymentRoute from './tr/purchase/purchaseAdvancePaymentRoute.js';
import purchaseInvoiceRoute from './tr/purchase/purchaseInvoiceRoute.js';
import purchaseOrderRoute from './tr/purchase/purchaseOrderRoute.js';
import purchasePaymentRoute from './tr/purchase/purchasePaymentRoute.js';
import purchaseQuoteRoute from './tr/purchase/purchaseQuoteRoute.js';
import purchaseReceiveRoute from './tr/purchase/purchaseReceiveRoute.js';
import purchaseReturnRoute from './tr/purchase/purchaseReturnRoute.js';
import salesAdvancePaymentRoute from './tr/sales/salesAdvancePaymentRoute.js';
import salesContractRoute from './tr/sales/salesContractRoute.js';
import { salesDeliveryFixedRoute, salesDeliveryNoteRoute } from './tr/sales/salesDeliveryRoute.js';
import salesDepositRoute from './tr/sales/salesDepositRoute.js';
import salesInvoiceRoute from './tr/sales/salesInvoiceRoute.js';
import { salesOrderRoute } from './tr/sales/salesOrderRoute.js';
import salesPaymentRoute from './tr/sales/salesPaymentRoute.js';
import { salesQuoteRoute } from './tr/sales/salesQuoteRoute.js';
import salesReturnRoute from './tr/sales/salesReturnRoute.js';
import { stockComboReverseRoute, stockComboRoute } from './tr/stock/stockComboRoute.js';
import stockOpnameRoute from './tr/stock/stockOpnameRoute.js';
import { trPurchaseTargetDetailRoute, trPurchaseTargetRoute } from './trPurchaseTargetRoute.js';
import trSafetyStockRoute from './trSafetyStockRoute.js';
import { trSalesTargetDtRoute, trSalesTargetRoute } from './trSalesTargetRoute.js';
import { trSalesmanTargetDtRoute, trSalesmanTargetRoute } from './trSalesmanTargetRoute.js';
import transactionRoute from './transactionRoute.js';
import {
  userAksesCompanyRoute,
  userCustomerRoute,
  userGroupAccessRoute,
  userGroupCustomerRoute,
  userGroupRoute,
  userItemRoute,
  userOtpRoute,
  userRoute,
  userSalesmanRoute,
  userSupplierRoute,
  userTableViewColumnRoute,
  userTurunanRoute
} from './userRoute.js';
import vintageRoute from './vintageRoute.js';
import { warehouseLevelRoute, warehouseRoute } from './warehouseRoute.js';
import offshoreSalesPaymentRoute from './tr/offshore/offshoreSalesPaymentRoute.js';
import whitelistMiddleware from '../middleware/whitelistMiddleware.js';
import monitorApiRoute from './monitorApiRoute.js';
import importDataRoute from './importDataRoute.js';
import fetchReportRoute from './fetchReportRoute.js';
import RouteUtil from '../util/RouteUtil.js';

const createMasterRoute = (app) => {
  const router = Router();
  const { controllers } = app.locals;

  router.use(Endpoint.CURRENCY, currencyRoute(controllers));

  router.use(Endpoint.COUNTRY, countryRoute(controllers));
  router.use(Endpoint.COUNTRY_CODE, countryCodeRoute(controllers));

  router.use(Endpoint.DEPARTMENT, departmentRoute(controllers));
  router.use(Endpoint.KASBON_POTONGAN, kasbonPotonganRoute(controllers));
  router.use(Endpoint.STRATUM, stratumRoute(controllers));
  router.use(Endpoint.LOCATION, locationRoute(controllers));

  router.use(Endpoint.TAX, taxRoute(controllers));
  router.use(Endpoint.TAX_FORM, taxFormRoute(controllers));
  router.use(Endpoint.ACCESS, accessRoute(controllers));
  router.use(Endpoint.PAYMENT_TERM, paymentTermRoute(controllers));
  router.use(Endpoint.TRANSACTION, transactionRoute(controllers));
  router.use(Endpoint.BANK, bankRoute(controllers));
  router.use(Endpoint.PROVINCE, provinceRoute(controllers));
  router.use(Endpoint.SHIPPING, shippingRoute(controllers));
  router.use(Endpoint.DISTRICT, districtRoute(controllers));
  router.use(Endpoint.SUBDISTRICT, subdistrictRoute(controllers));

  router.use(Endpoint.WAREHOUSE, warehouseRoute(controllers));
  router.use(Endpoint.WAREHOUSE_LEVEL, warehouseLevelRoute(controllers));

  router.use(Endpoint.FAKTUR_PAJAK, fakturPajakRoute(controllers));
  router.use(Endpoint.CITY, cityRoute(controllers));

  router.use(Endpoint.COA, coaRoute(controllers));
  router.use(Endpoint.COA_BANK, coaBankRoute(controllers));
  router.use(Endpoint.COA_GROUP, coaGroupRoute(controllers));
  router.use(Endpoint.COA_SUB_GROUP, coaSubGroupRoute(controllers));
  router.use(Endpoint.COA_TYPE, coaTypeRoute(controllers));

  router.use(Endpoint.FIXED_ASSET, fixedAssetRoute(controllers));
  router.use(Endpoint.FIXED_ASSET_CATEGORY, fixedAssetCategoryRoute(controllers));
  router.use(Endpoint.FIXED_ASSET_GROUP, fixedAssetGroupRoute(controllers));
  router.use(Endpoint.FIXED_DEPRECIATION, fixedDepreciationRoute(controllers));

  router.use(Endpoint.ITEM, itemRoute(controllers));
  router.use(Endpoint.ITEM_BUYING, itemBuyingRoute(controllers));
  router.use(Endpoint.ITEM_CATEGORY, itemCategoryRoute(controllers));
  router.use(Endpoint.ITEM_COMBO, itemComboRoute(controllers));
  router.use(Endpoint.ITEM_IMG, itemImgRoute(controllers));
  router.use(Endpoint.ITEM_LABEL, itemLabelRoute(controllers));
  router.use(Endpoint.ITEM_LABEL_DETAIL, itemLabelDetailRoute(controllers));
  router.use(Endpoint.ITEM_PRICE, itemPriceRoute(controllers));
  router.use(Endpoint.ITEM_SUBCATEGORY, itemCategoryRoute(controllers));
  router.use(Endpoint.ITEM_UOM, itemUomRoute(controllers));

  router.use(Endpoint.SUPPLIER, supplierRoute(controllers));
  router.use(Endpoint.SUPPLIER_BANK, supplierBankRoute(controllers));
  router.use(Endpoint.SUPPLIER_BRAND, supplierBrandRoute(controllers));
  router.use(Endpoint.SUPPLIER_CONTACT, supplierContactRoute(controllers));
  router.use(Endpoint.SUPPLIER_GROUP, supplierGroupRoute(controllers));
  router.use(Endpoint.SUPPLIER_PAYMENT, supplierPaymentRoute(controllers));
  router.use(Endpoint.SUPPLIER_PURCHASE, supplierPurchaseRoute(controllers));
  router.use(Endpoint.SUPPLIER_REGION, supplierRegionRoute(controllers));
  router.use(Endpoint.SUPPLIER_SEGMENTATION, supplierSegmentationRoute(controllers));
  router.use(Endpoint.SUPPLIER_TAX, supplierTaxRoute(controllers));
  router.use(Endpoint.SUPPLIER_TYPE, supplierTypeRoute(controllers));

  router.use(Endpoint.CUSTOMER, customerRoute(controllers));
  router.use(Endpoint.CUSTOMER_COMPANY, customerRoute(controllers));
  router.use(Endpoint.CUSTOMER_BILLING, customerBillingRoute(controllers));
  router.use(Endpoint.CUSTOMER_CART, customerCartRoute(controllers));
  router.use(Endpoint.CUSTOMER_CODE, customerCodeRoute(controllers));
  router.use(Endpoint.CUSTOMER_CONTACT, customerContactRoute(controllers));
  router.use(Endpoint.CUSTOMER_DELIVERY, customerDeliveryRoute(controllers));
  router.use(Endpoint.CUSTOMER_DOCUMENT, customerDocumentRoute(controllers));
  router.use(Endpoint.CUSTOMER_GROUP, customerGroupRoute(controllers));
  router.use(Endpoint.CUSTOMER_IMG, customerImgRoute(controllers));
  router.use(Endpoint.CUSTOMER_REGION, customerRegionRoute(controllers));
  router.use(Endpoint.CUSTOMER_SALES, customerSalesRoute(controllers));
  router.use(Endpoint.CUSTOMER_SEGMENTATION, customerSegmentationRoute(controllers));
  router.use(Endpoint.CUSTOMER_TAX, customerTaxRoute(controllers));
  router.use(Endpoint.CUSTOMER_TYPE, customerTypeRoute(controllers));

  router.use(Endpoint.VINTAGE, vintageRoute(controllers));

  router.use(Endpoint.TRANS_CODE, transCodeRoute(controllers));
  router.use(Endpoint.TRANS_CODE_GROUP, transCodeGroupRoute(controllers));

  router.use(Endpoint.PREFERENCE, preferenceRoute(controllers));

  router.use(Endpoint.USER_AKSES_COMPANY, userAksesCompanyRoute(controllers));
  router.use(Endpoint.USER_CUSTOMER, userCustomerRoute(controllers));
  router.use(Endpoint.USER_GROUP, userGroupRoute(controllers));
  router.use(Endpoint.USER_ITEM, userItemRoute(controllers));
  router.use(Endpoint.USER_OTP, userOtpRoute(controllers));
  router.use(Endpoint.USER_SALESMAN, userSalesmanRoute(controllers));
  router.use(Endpoint.USER_SUPPLIER, userSupplierRoute(controllers));
  router.use(Endpoint.USER_TABLE_VIEW_COLUMN, userTableViewColumnRoute(controllers));

  router.use(Endpoint.AUTO_CODE, autoCodeRoute(controllers));
  router.use(Endpoint.AUTO_CODE_COUNT, autoCodeCountRoute(controllers));
  router.use(Endpoint.COMPANY, companyRoute(controllers));
  router.use(Endpoint.COMPANY_BANK, companyBankRoute(controllers));

  router.use(Endpoint.LABEL, labelRoute(controllers));
  router.use(Endpoint.LABEL_SETTING_PRINT, labelSettinganPrintRoute(controllers));

  return router;
};

const createDocumentationRoute = () => {
  const router = Router();
  if (DevelopmentUtil.isTestEnvironment()) {
    return router;
  }

  router.use(Endpoint.API_DOCS, serve, setup(swaggerJSDoc(swaggerProps)));

  router.get(Endpoint.POSTMAN_DOCS, (_, response) => {
    const fileName = Constant.PostmanFilename;
    const fileContents = Buffer.from(JSON.stringify(postmanCollectionBuilder()), 'utf8');

    const readStream = new stream.PassThrough();
    readStream.end(fileContents);

    response.set('Content-disposition', 'attachment; filename=' + fileName);
    response.set('Content-Type', 'text/plain');

    readStream.pipe(response);
  });
  router.get(Endpoint.POSTMAN_DOCS + Endpoint.ENV, (_, response) => {
    const fileName = Constant.PostmanEnvironmentFilename;
    const fileContents = Buffer.from(JSON.stringify(postmanEnvironmentBuilder()), 'utf8');

    const readStream = new stream.PassThrough();
    readStream.end(fileContents);

    response.set('Content-disposition', 'attachment; filename=' + fileName);
    response.set('Content-Type', 'text/plain');

    readStream.pipe(response);
  });

  return router;
};

const createPurchaseLocalRoute = (app) => {
  const { controllers } = app.locals;
  const router = Router();

  router.use(Endpoint.PURCHASE + Endpoint.LOCAL + Endpoint.PURCHASE_QUOTE, purchaseQuoteRoute(controllers));
  router.use(Endpoint.PURCHASE + Endpoint.LOCAL + Endpoint.PURCHASE_ORDER, purchaseOrderRoute(controllers));
  router.use(Endpoint.PURCHASE + Endpoint.LOCAL + Endpoint.PURCHASE_RECEIVE, purchaseReceiveRoute(controllers));
  router.use(Endpoint.PURCHASE + Endpoint.LOCAL + Endpoint.PURCHASE_INVOICE, purchaseInvoiceRoute(controllers));
  router.use(Endpoint.PURCHASE + Endpoint.LOCAL + Endpoint.PURCHASE_INVOICE_DIRECT, purchaseInvoiceRoute(controllers));
  router.use(Endpoint.PURCHASE + Endpoint.LOCAL + Endpoint.PURCHASE_RETURN, purchaseReturnRoute(controllers));
  router.use(Endpoint.PURCHASE + Endpoint.LOCAL + Endpoint.PURCHASE_ADVANCE_PAYMENT, purchaseAdvancePaymentRoute(controllers));
  router.use(Endpoint.PURCHASE + Endpoint.LOCAL + Endpoint.PURCHASE_PAYMENT, purchasePaymentRoute(controllers));

  router.use(Endpoint.PURCHASE + Endpoint.REPORT + Endpoint.LOCAL + Endpoint.PURCHASE_QUOTE, RouteUtil.createReportRoute(controllers.purchaseQuoteController));
  router.use(Endpoint.PURCHASE + Endpoint.REPORT + Endpoint.LOCAL + Endpoint.PURCHASE_ORDER, RouteUtil.createReportRoute(controllers.purchaseOrderController));
  router.use(Endpoint.PURCHASE + Endpoint.REPORT + Endpoint.LOCAL + Endpoint.PURCHASE_RECEIVE, RouteUtil.createReportRoute(controllers.purchaseReceiveController));
  router.use(Endpoint.PURCHASE + Endpoint.REPORT + Endpoint.LOCAL + Endpoint.PURCHASE_RECEIVE_INVOICE, RouteUtil.createReportRoute(controllers.purchaseReceiveController));
  router.use(Endpoint.PURCHASE + Endpoint.REPORT + Endpoint.LOCAL + Endpoint.PURCHASE_INVOICE, RouteUtil.createReportRoute(controllers.purchaseInvoiceController));
  router.use(Endpoint.PURCHASE + Endpoint.REPORT + Endpoint.LOCAL + Endpoint.PURCHASE_INVOICE_DIRECT, RouteUtil.createReportRoute(controllers.purchaseInvoiceController));
  router.use(Endpoint.PURCHASE + Endpoint.REPORT + Endpoint.LOCAL + Endpoint.PURCHASE_ADVANCE_PAYMENT, RouteUtil.createReportRoute(controllers.purchaseAdvancePaymentController));
  router.use(Endpoint.PURCHASE + Endpoint.REPORT + Endpoint.LOCAL + Endpoint.PURCHASE_PAYMENT, RouteUtil.createReportRoute(controllers.purchasePaymentController));
  router.use(Endpoint.PURCHASE + Endpoint.REPORT + Endpoint.LOCAL + Endpoint.PURCHASE_RETURN, RouteUtil.createReportRoute(controllers.purchaseReturnController));
  router.use(Endpoint.PURCHASE + Endpoint.REPORT + Endpoint.LOCAL + Endpoint.PAYABLE, RouteUtil.createReportRoute(controllers.purchaseReturnController));
  router.use(Endpoint.PURCHASE + Endpoint.REPORT + Endpoint.LOCAL + Endpoint.PAYABLE_SUMMARY, RouteUtil.createReportRoute(controllers.purchaseReturnController));

  return router;
};

const createSalesLocalRoute = (app) => {
  const { controllers } = app.locals;
  const router = Router();

  router.use(Endpoint.SALES + Endpoint.LOCAL + Endpoint.SALES_QUOTE, salesQuoteRoute(controllers));
  router.use(Endpoint.SALES + Endpoint.LOCAL + Endpoint.SALES_ORDER, salesOrderRoute(controllers));
  router.use(Endpoint.SALES + Endpoint.LOCAL + Endpoint.SALES_DELIVERY_NOTE, salesDeliveryNoteRoute(controllers));
  router.use(Endpoint.SALES + Endpoint.LOCAL + Endpoint.SALES_DELIVERY_FIXED, salesDeliveryFixedRoute(controllers));
  router.use(Endpoint.SALES + Endpoint.LOCAL + Endpoint.SALES_INVOICE, salesInvoiceRoute(controllers));
  router.use(Endpoint.SALES + Endpoint.LOCAL + Endpoint.SALES_INVOICE_DIRECT, salesInvoiceRoute(controllers));
  router.use(Endpoint.SALES + Endpoint.LOCAL + Endpoint.SALES_RETURN, salesReturnRoute(controllers));
  router.use(Endpoint.SALES + Endpoint.LOCAL + Endpoint.SALES_ADVANCE_PAYMENT, salesAdvancePaymentRoute(controllers));
  router.use(Endpoint.SALES + Endpoint.LOCAL + Endpoint.SALES_CONTRACT, salesContractRoute(controllers));
  router.use(Endpoint.SALES + Endpoint.LOCAL + Endpoint.SALES_DEPOSIT, salesDepositRoute(controllers));
  router.use(Endpoint.SALES + Endpoint.LOCAL + Endpoint.SALES_PAYMENT, salesPaymentRoute(controllers));

  return router;
};

const createPurchaseImportRoute = (app) => {
  const { controllers } = app.locals;
  const router = Router();

  router.use(Endpoint.PURCHASE + Endpoint.IMPORT + Endpoint.IMPORT_QUOTE, importQuoteRoute(controllers));
  router.use(Endpoint.PURCHASE + Endpoint.IMPORT + Endpoint.IMPORT_ORDER, importOrderRoute(controllers));
  router.use(Endpoint.PURCHASE + Endpoint.IMPORT + Endpoint.IMPORT_RECEIVE, importReceiveRoute(controllers));
  router.use(Endpoint.PURCHASE + Endpoint.IMPORT + Endpoint.IMPORT_INVOICE, importInvoiceRoute(controllers));
  router.use(Endpoint.PURCHASE + Endpoint.IMPORT + Endpoint.IMPORT_INVOICE_DIRECT, importDirectRoute(controllers));
  router.use(Endpoint.PURCHASE + Endpoint.IMPORT + Endpoint.IMPORT_RETURN, importReturnRoute(controllers));
  router.use(Endpoint.PURCHASE + Endpoint.IMPORT + Endpoint.IMPORT_STOCK_TRANSFER, importStockTransferRoute(controllers));
  router.use(Endpoint.PURCHASE + Endpoint.IMPORT + Endpoint.IMPORT_CLEARANCE, importClearanceRoute(controllers));
  router.use(Endpoint.PURCHASE + Endpoint.IMPORT + Endpoint.IMPORT_ADVANCE_PAYMENT, importAdvancePaymentRoute(controllers));
  router.use(Endpoint.PURCHASE + Endpoint.IMPORT + Endpoint.IMPORT_CREDIT_NOTE, importCreditNoteRoute(controllers));
  router.use(Endpoint.PURCHASE + Endpoint.IMPORT + Endpoint.IMPORT_PAYMENT, importPaymentRoute(controllers));

  router.use(Endpoint.PURCHASE + Endpoint.REPORT + Endpoint.IMPORT + Endpoint.PURCHASE_QUOTE, RouteUtil.createReportRoute(controllers.importQuoteController));
  router.use(Endpoint.PURCHASE + Endpoint.REPORT + Endpoint.IMPORT + Endpoint.PURCHASE_ORDER, RouteUtil.createReportRoute(controllers.importOrderController));
  router.use(Endpoint.PURCHASE + Endpoint.REPORT + Endpoint.IMPORT + Endpoint.PURCHASE_RECEIVE, RouteUtil.createReportRoute(controllers.importReceiveController));
  router.use(Endpoint.PURCHASE + Endpoint.REPORT + Endpoint.IMPORT + Endpoint.PURCHASE_RECEIVE_INVOICE, RouteUtil.createReportRoute(controllers.importReceiveController));
  router.use(Endpoint.PURCHASE + Endpoint.REPORT + Endpoint.IMPORT + Endpoint.PURCHASE_INVOICE, RouteUtil.createReportRoute(controllers.importInvoiceController));
  router.use(Endpoint.PURCHASE + Endpoint.REPORT + Endpoint.IMPORT + Endpoint.PURCHASE_INVOICE_DIRECT, RouteUtil.createReportRoute(controllers.importInvoiceController));
  router.use(Endpoint.PURCHASE + Endpoint.REPORT + Endpoint.IMPORT + Endpoint.PURCHASE_ADVANCE_PAYMENT, RouteUtil.createReportRoute(controllers.importAdvancePaymentController));
  router.use(Endpoint.PURCHASE + Endpoint.REPORT + Endpoint.IMPORT + Endpoint.CREDIT_NOTE, RouteUtil.createReportRoute(controllers.importCreditNoteController));
  router.use(Endpoint.PURCHASE + Endpoint.REPORT + Endpoint.IMPORT + Endpoint.PURCHASE_RETURN, RouteUtil.createReportRoute(controllers.importReturnController));
  router.use(Endpoint.PURCHASE + Endpoint.REPORT + Endpoint.IMPORT + Endpoint.PURCHASE_PAYMENT, RouteUtil.createReportRoute(controllers.importPaymentController));
  router.use(Endpoint.PURCHASE + Endpoint.REPORT + Endpoint.IMPORT + Endpoint.CLEARANCE, RouteUtil.createReportRoute(controllers.importClearanceController));

  return router;
};

const createInventoryTransactionRoute = (app) => {
  const { controllers } = app.locals;
  const router = Router();

  router.use(Endpoint.INVENTORY + Endpoint.TRANSACTION + Endpoint.ADJUSTMENT, inventoryAdjustmentRoute(controllers));
  router.use(Endpoint.INVENTORY + Endpoint.TRANSACTION + Endpoint.TRANSFER, inventoryTransferRoute(controllers));
  router.use(Endpoint.INVENTORY + Endpoint.TRANSACTION + Endpoint.COMBO, stockComboRoute(controllers));
  router.use(Endpoint.INVENTORY + Endpoint.TRANSACTION + Endpoint.COMBO_REVERSE, stockComboReverseRoute(controllers));
  router.use(Endpoint.INVENTORY + Endpoint.TRANSACTION + Endpoint.STOCK_OPNAME, stockOpnameRoute(controllers));

  return router;
};

const createSalesExportRoute = (app) => {
  const { controllers } = app.locals;
  const router = Router();

  router.use(Endpoint.SALES + Endpoint.EXPORT + Endpoint.SALES_QUOTE, exportSalesQuoteRoute(controllers));
  router.use(Endpoint.SALES + Endpoint.EXPORT + Endpoint.SALES_ORDER, exportSalesOrderRoute(controllers));
  router.use(Endpoint.SALES + Endpoint.EXPORT + Endpoint.SALES_PACKING_LIST, exportSalesPackingListRoute(controllers));
  router.use(Endpoint.SALES + Endpoint.EXPORT + Endpoint.SALES_INVOICE, exportSalesInvoiceRoute(controllers));
  router.use(Endpoint.SALES + Endpoint.EXPORT + Endpoint.SALES_INVOICE_DIRECT, exportSalesInvoiceRoute(controllers));
  router.use(Endpoint.SALES + Endpoint.EXPORT + Endpoint.SALES_RETURN, exportSalesReturnRoute(controllers));
  router.use(Endpoint.SALES + Endpoint.EXPORT + Endpoint.SALES_ADVANCE_PAYMENT, exportSalesAdvancePaymentRoute(controllers));
  router.use(Endpoint.SALES + Endpoint.EXPORT + Endpoint.SALES_PAYMENT, exportSalesPaymentRoute(controllers));

  return router;
};

const createAccountRoute = (app) => {
  const { controllers } = app.locals;
  const router = Router();

  router.use(Endpoint.ACCOUNTING + Endpoint.TRANSACTION + Endpoint.BANK_TRANS, cashBankRoute(controllers));
  router.use(Endpoint.ACCOUNTING + Endpoint.TRANSACTION + Endpoint.GENERAL_JOURNAL, memoJurnalRoute(controllers));
  router.use(Endpoint.ACCOUNTING + Endpoint.TRANSACTION + Endpoint.DEFERRAL_JOURNAL, deferralJurnalRoute(controllers));
  router.use(Endpoint.ACCOUNTING + Endpoint.TRANSACTION + Endpoint.PAYMENT_MEMO, paymentMemoRoute(controllers));
  // router.use(Endpoint.ACCOUNTING + Endpoint.TRANSACTION + Endpoint.RECURRING_JOURNAL, deferralJurnalRoute(controllers));

  return router;
};

const createFixedAssetRoute = (app) => {
  const { controllers } = app.locals;
  const router = Router();

  router.use(Endpoint.FIXED_ASSET + Endpoint.TRANSACTION + Endpoint.PURCHASE, fixedAssetPurchaseRoute(controllers));
  router.use(Endpoint.FIXED_ASSET + Endpoint.TRANSACTION + Endpoint.PAYMENT_REGISTER, fixedAssetPaymentRoute(controllers));
  router.use(Endpoint.FIXED_ASSET + Endpoint.TRANSACTION + Endpoint.SALES, fixedAssetSalesRoute(controllers));
  router.use(Endpoint.FIXED_ASSET + Endpoint.TRANSACTION + Endpoint.TRANSFER, fixedAssetTransferRoute(controllers));
  router.use(Endpoint.FIXED_ASSET + Endpoint.TRANSACTION + Endpoint.WRITE_OFF, fixedAssetWriteOffRoute(controllers));

  return router;
};

const createAdministrationRoute = (app) => {
  const { controllers } = app.locals;
  const router = Router();

  router.use(Endpoint.ADMINISTRATION + Endpoint.TRANSACTION + Endpoint.PAYMENT_MEMO + Endpoint.PAYMENT_MEMO, paymentMemoRoute(controllers));
  router.use(Endpoint.ADMINISTRATION + Endpoint.TRANSACTION + Endpoint.PAYMENT_MEMO + Endpoint.SEND_MEMO, pembayaranSendRoute(controllers));
  router.use(Endpoint.ADMINISTRATION + Endpoint.TRANSACTION + Endpoint.CASH_RECEIPT, kasbonRoute(controllers));

  return router;
};

const createCoretaxRoute = (app) => {
  const { controllers } = app.locals;
  const router = Router();

  router.use(Endpoint.MASTER + Endpoint.CORETAX + Endpoint.TYPE, coretaxTypeRoute(controllers));
  router.use(Endpoint.MASTER + Endpoint.CORETAX + Endpoint.CATEGORY, coretaxCategoryRoute(controllers));
  router.use(Endpoint.MASTER + Endpoint.CORETAX + Endpoint.TRANSACTION_CODE, coretaxTransactionCodeRoute(controllers));
  router.use(Endpoint.MASTER + Endpoint.CORETAX + Endpoint.INFO, coretaxInfoRoute(controllers));
  router.use(Endpoint.MASTER + Endpoint.CORETAX + Endpoint.FACILITY, coretaxFacilityRoute(controllers));
  router.use(Endpoint.MASTER + Endpoint.CORETAX + Endpoint.UOM, coretaxUomRoute(controllers));
  router.use(Endpoint.MASTER + Endpoint.CORETAX + Endpoint.COUNTRY, coretaxCountryRoute(controllers));
  router.use(Endpoint.MASTER + Endpoint.CORETAX + Endpoint.TAX, coretaxTaxRoute(controllers));
  router.use(Endpoint.MASTER + Endpoint.CORETAX + Endpoint.BUYER_TYPE, coretaxJenisPembeliRoute(controllers));

  return router;
};

const createOffshorePurchaseRoute = (app) => {
  const { controllers } = app.locals;
  const router = Router();

  router.use(Endpoint.PURCHASE + Endpoint.OFFSHORE + Endpoint.OFFSHOREORDER, offshorePurchaseOrderRoute(controllers));
  router.use(Endpoint.PURCHASE + Endpoint.OFFSHORE + Endpoint.OFFSHORERECEIVE, offshorePurchaseReceiveRoute(controllers));
  router.use(Endpoint.PURCHASE + Endpoint.OFFSHORE + Endpoint.OFFSHOREINVOICE, offshorePurchaseInvoiceRoute(controllers));
  router.use(Endpoint.PURCHASE + Endpoint.OFFSHORE + Endpoint.OFFSHOREADVANCEPAYMENT, offshorePurchaseAdvancedPaymentRoute(controllers));
  router.use(Endpoint.PURCHASE + Endpoint.OFFSHORE + Endpoint.OFFSHOREPAYMENT, offshorePurchasePaymentRoute(controllers));
  router.use(Endpoint.PURCHASE + Endpoint.OFFSHORE + Endpoint.OFFSHORECREDITNOTE, offshorePurchaseCreditNoteRoute(controllers));

  return router;
};

const createOffshoreSalesRoute = (app) => {
  const { controllers } = app.locals;
  const router = Router();

  router.use(Endpoint.SALES + Endpoint.OFFSHORE + Endpoint.SALESOFFSHOREINVOICE, offshoreSalesInvoiceRoute(controllers));
  router.use(Endpoint.SALES + Endpoint.OFFSHORE + Endpoint.SALESOFFSHOREPAYMENT, offshoreSalesPaymentRoute(controllers));

  return router;
};

const createPusherRoute = (app) => {
  const router = new Router();
  const { pusherController } = app.locals.controllers;

  router.get(Endpoint.SUBSCRIBE_NOTIFICATION, pusherController.subscribeNotification);
  router.post(Endpoint.TRIGGER_NOTIFICATION, pusherController.triggerNotification);
  router.post(Endpoint.V1 + Endpoint.CHAT, pusherController.sendMessage);
  router.get(Endpoint.NOTIFICATION_HEALTH, pusherController.notificationHealth);

  return router;
};

const route = (app) => {
  const router = Router();
  const upload = multer();
  const { controllers } = app.locals;
  const excludedRoutes = [
    '/Auth',
    '/api-docs',
    '/postman-docs',
    '/subscribe-notification',
    '/trigger-notification',
    '/chat',
    '/notification-health',
    '/socket.io'
  ];

  app.use('/', logMiddleware, upload.any(), authenticationMiddleware(excludedRoutes), sanitationMiddleware(), whitelistMiddleware, router);
  app.use(errorMiddleware);

  router.use(Endpoint.MASTER, createMasterRoute(app));

  router.use(Endpoint.SETTING + Endpoint.SALES + Endpoint.SALESMAN_COMMISSION, salesmanCommissionRoute(controllers));
  router.use(Endpoint.SETTING + Endpoint.ACCOUNTING + Endpoint.ST_CURRENCY_RATE, stCurrencyRateRoute(controllers));
  router.use(Endpoint.SETTING + Endpoint.ACCOUNTING + Endpoint.ST_CURRENCY_RATE_DT, stCurrencyRateDetailRoute(controllers));
  router.use(Endpoint.ACCOUNTING + Endpoint.SETTING + Endpoint.PERIODE, periodeRoute(controllers));
  router.use(Endpoint.ACCOUNTING + Endpoint.SETTING + Endpoint.PERIODE_LOG, periodeLogRoute(controllers));
  router.use(Endpoint.ACCOUNTING + Endpoint.SETTING + Endpoint.ENDOFMONTH, endOfMonthRoute(controllers));
  router.use(Endpoint.ACCOUNTING + Endpoint.SETTING + Endpoint.ENDOFMONTH_LOG, endOfMonthLogRoute(controllers));
  router.use(Endpoint.ACCOUNTING + Endpoint.SETTING + Endpoint.ENDOFMONTH_SETTING, endOfMonthSettingRoute(controllers));

  //MASTER/
  router.use(Endpoint.MASTER + Endpoint.COMPANY + Endpoint.EDIT, companyRoute(controllers));
  router.use(Endpoint.MASTER + Endpoint.CURRENCY, currencyRoute(controllers));
  router.use(Endpoint.MASTER + Endpoint.DEPARTMENT, departmentRoute(controllers));
  router.use(Endpoint.MASTER + Endpoint.STRATUM, stratumRoute(controllers));
  router.use(Endpoint.MASTER + Endpoint.LOCATION, locationRoute(controllers));
  router.use(Endpoint.MASTER + Endpoint.TAX, taxRoute(controllers));
  router.use(Endpoint.MASTER + Endpoint.PAYMENT_TERM, paymentTermRoute(controllers));
  router.use(Endpoint.MASTER + Endpoint.TRANSACTION_CODE, transactionRoute(controllers));
  router.use(Endpoint.MASTER + Endpoint.FAKTUR_PAJAK, fakturPajakRoute(controllers));
  router.use(Endpoint.MASTER + Endpoint.BANK, bankRoute(controllers));
  router.use(Endpoint.MASTER + Endpoint.COUNTRY, countryRoute(controllers));
  router.use(Endpoint.MASTER + Endpoint.PROVINCE, provinceRoute(controllers));
  router.use(Endpoint.MASTER + Endpoint.SHIPPING, shippingRoute(controllers));
  router.use(Endpoint.INVENTORY + Endpoint.WAREHOUSE, warehouseRoute(controllers));

  //INVENTORY/MASTER
  router.use(Endpoint.INVENTORY + Endpoint.MASTER + Endpoint.ITEM, itemRoute(controllers));
  router.use(Endpoint.INVENTORY + Endpoint.MASTER + Endpoint.BRAND, brandRoute(controllers));
  router.use(Endpoint.INVENTORY + Endpoint.MASTER + Endpoint.ITEM_CATEGORY, itemCategoryRoute(controllers));
  router.use(Endpoint.INVENTORY + Endpoint.MASTER + Endpoint.ITEM_SUBCATEGORY, itemSubcategoryRoute(controllers));
  router.use(Endpoint.INVENTORY + Endpoint.MASTER + Endpoint.ITEM_TYPE, itemTypeRoute(controllers));
  router.use(Endpoint.INVENTORY + Endpoint.MASTER + Endpoint.ITEM_UOM, itemUomRoute(controllers));
  router.use(Endpoint.INVENTORY + Endpoint.MASTER + Endpoint.LABEL, labelRoute(controllers));
  router.use(Endpoint.INVENTORY + Endpoint.MASTER + Endpoint.PRINCIPAL, principalRoute(controllers));
  //PURCHASE/MASTER
  router.use(Endpoint.MASTER + Endpoint.MASTER + Endpoint.SUPPLIER, supplierRoute(controllers));
  router.use(Endpoint.MASTER + Endpoint.SUPPLIER + Endpoint.SUPPLIER, supplierRoute(controllers));
  router.use(Endpoint.PURCHASE + Endpoint.MASTER + Endpoint.SUPPLIER_GROUP, supplierGroupRoute(controllers));
  router.use(Endpoint.PURCHASE + Endpoint.MASTER + Endpoint.SUPPLIER_SEGMENTATION, supplierSegmentationRoute(controllers));
  router.use(Endpoint.PURCHASE + Endpoint.MASTER + Endpoint.SUPPLIER_SUBSEGMENTATION, supplierSegmentationRoute(controllers));
  router.use(Endpoint.PURCHASE + Endpoint.MASTER + Endpoint.SUPPLIER_SUBSUBSEGMENTATION, supplierSegmentationRoute(controllers));
  router.use(Endpoint.PURCHASE + Endpoint.MASTER + Endpoint.SUPPLIER_TYPE, supplierTypeRoute(controllers));
  router.use(Endpoint.PURCHASE + Endpoint.MASTER + Endpoint.SUPPLIER_REGION, supplierRegionRoute(controllers));

  //SALES/MASTER
  router.use(Endpoint.SALES + Endpoint.MASTER + Endpoint.CUSTOMER_PERSONAL, customerRoute(controllers));
  router.use(Endpoint.SALES + Endpoint.MASTER + Endpoint.CUSTOMER_COMPANY, customerRoute(controllers));
  router.use(Endpoint.SALES + Endpoint.MASTER + Endpoint.CUSTOMER_TYPE, customerTypeRoute(controllers));
  router.use(Endpoint.SALES + Endpoint.MASTER + Endpoint.CUSTOMER_REGION, customerRegionRoute(controllers));
  router.use(Endpoint.SALES + Endpoint.MASTER + Endpoint.CUSTOMER_GROUP, customerGroupRoute(controllers));
  router.use(Endpoint.SALES + Endpoint.MASTER + Endpoint.CUSTOMER_SEGMENTATION, customerSegmentationRoute(controllers));
  router.use(Endpoint.SALES + Endpoint.MASTER + Endpoint.CUSTOMER_SUB_SEGMENTATION, customerSubSegmentationRoute(controllers));
  router.use(Endpoint.SALES + Endpoint.MASTER + Endpoint.CUSTOMER_SUBSUBSEGMENTATION, customerSubSubSegmentationRoute(controllers));

  router.use(createInventoryTransactionRoute(app));
  router.use(createSalesLocalRoute(app));
  router.use(createPurchaseImportRoute(app));
  router.use(createPurchaseLocalRoute(app));
  router.use(createSalesExportRoute(app));
  router.use(createAccountRoute(app));
  router.use(createFixedAssetRoute(app));
  router.use(createAdministrationRoute(app));
  router.use(createCoretaxRoute(app));
  router.use(createOffshorePurchaseRoute(app));
  router.use(createOffshorePurchaseRoute(app));
  router.use(createOffshoreSalesRoute(app));

  //MASTER/SALESMAN/SALESMAN
  router.use(Endpoint.MASTER + Endpoint.SALESMAN + Endpoint.SALESMAN, salesmanRoute(controllers));

  //ACCOUNTING/MASTER/COA
  router.use(Endpoint.ACCOUNTING + Endpoint.MASTER + Endpoint.COA, coaRoute(controllers));
  router.use(Endpoint.ACCOUNTING + Endpoint.MASTER + Endpoint.COA_TYPE, coaTypeRoute(controllers));
  router.use(Endpoint.ACCOUNTING + Endpoint.MASTER + Endpoint.COA_GROUP, coaGroupRoute(controllers));
  router.use(Endpoint.ACCOUNTING + Endpoint.MASTER + Endpoint.COA_SUB_GROUP, coaSubGroupRoute(controllers));
  router.use(Endpoint.ACCOUNTING + Endpoint.MASTER + Endpoint.COA_SUB_LEDGER, coaSubLedgerRoute(controllers));

  //FIXEDASSET/
  router.use(Endpoint.FIXED_ASSET + Endpoint.MASTER + Endpoint.FIXED_ASSET, fixedAssetRoute(controllers));
  router.use(Endpoint.FIXED_ASSET + Endpoint.MASTER + Endpoint.FIXED_ASSET_GROUP, fixedAssetGroupRoute(controllers));
  router.use(Endpoint.FIXED_ASSET + Endpoint.MASTER + Endpoint.FIXED_ASSET_CATEGORY, fixedAssetCategoryRoute(controllers));

  //ADMINISTRATION/MASTER/KASBONPOTONGAN
  router.use(Endpoint.ADMINISTRATION + Endpoint.MASTER + Endpoint.KASBON_POTONGAN, kasbonPotonganRoute(controllers));

  //SETTINGS/INVENTORY-PURCHASE-SALES-ACCOUNTING-SYSTEM
  router.use(Endpoint.INVENTORY + Endpoint.SETTING + Endpoint.SAFETY_STOCK, trSafetyStockRoute(controllers));

  router.use(Endpoint.SETTING + Endpoint.SALES + Endpoint.SALESMAN_TARGET, trSalesmanTargetRoute(controllers));
  router.use(Endpoint.SETTING + Endpoint.SALES + Endpoint.SALESMAN_TARGET_DT, trSalesmanTargetDtRoute(controllers));
  router.use(Endpoint.SETTING + Endpoint.PURCHASE + Endpoint.BUYING_TARGET, trPurchaseTargetRoute(controllers));
  router.use(Endpoint.SETTING + Endpoint.PURCHASE + Endpoint.BUYING_TARGET_DT, trPurchaseTargetDetailRoute(controllers));
  router.use(Endpoint.ACCOUNTING + Endpoint.SETTING + Endpoint.BACKDATED, backdatedRoute(controllers));
  router.use(Endpoint.ACCOUNTING + Endpoint.SETTING + Endpoint.BACKDATED_LOGS, backdateLogsdRoute(controllers));
  router.use(Endpoint.ACCOUNTING + Endpoint.SETTING + Endpoint.BACKDATED_USER, backdatedUserRoute(controllers));
  router.use(Endpoint.SETTING + Endpoint.PURCHASE + Endpoint.BUYING_PRICE_LIST, buyingPriceListRoute(controllers));
  router.use(Endpoint.SETTING + Endpoint.SALES + Endpoint.SELLING_PRICE_LIST_EXPORT, exportSalesPriceRoute(controllers));
  router.use(Endpoint.SETTING + Endpoint.PURCHASE + Endpoint.BUYING_PRICE_LIST_IMPORT, buyingPriceListImportRoute(controllers));
  router.use(Endpoint.SETTING + Endpoint.SALES + Endpoint.SALES_PRICE, trSalesTargetRoute(controllers));
  router.use(Endpoint.SETTING + Endpoint.SALES + Endpoint.SALES_PRICE_DT, trSalesTargetDtRoute(controllers));
  router.use(Endpoint.SETTING + Endpoint.SALES + Endpoint.PRICE_LIST, salesPriceRoute(controllers));
  router.use(Endpoint.SETTING + Endpoint.SALES + Endpoint.PRICE_LIST_DETAIL, salesPriceDetailRoute(controllers));
  router.use(Endpoint.ACCOUNTING + Endpoint.SETTING + Endpoint.SETTING_COA, stCoaRoute(controllers));
  router.use(Endpoint.ACCOUNTING + Endpoint.SETTING + Endpoint.SETTING_COA, stCoaDtRoute(controllers));
  router.use(Endpoint.NOTIFICATION, notificationRoute(controllers));
  router.use(Endpoint.NOTIFICATION_DT, notificationDetailRoute(controllers));
  router.use(Endpoint.ACCOUNTING + Endpoint.SETTING + Endpoint.AUTO_JURNAL, autoJurnalRoute(controllers));
  router.use(Endpoint.SYSTEM + Endpoint.USER, userRoute(controllers));

  router.use(Endpoint.SYSTEM + Endpoint.USER_LIST, userRoute(controllers));
  router.use(Endpoint.SYSTEM + Endpoint.USER_LIST, userCustomerRoute(controllers));
  router.use(Endpoint.SYSTEM + Endpoint.USER_LIST, userSupplierRoute(controllers));
  router.use(Endpoint.SYSTEM + Endpoint.USER_LIST, userSalesmanRoute(controllers));
  router.use(Endpoint.SYSTEM + Endpoint.USER_LIST, userTurunanRoute(controllers));
  router.use(Endpoint.SYSTEM + Endpoint.USER_LIST, userItemRoute(controllers));

  router.use(Endpoint.SYSTEM + Endpoint.USER_AKSES_COMPANY, userAksesCompanyRoute(controllers));
  router.use(Endpoint.SYSTEM + Endpoint.USER_GROUP, userGroupRoute(controllers));
  router.use(Endpoint.SYSTEM + Endpoint.USER_GROUP_CUSTOMER, userGroupCustomerRoute(controllers));
  router.use(Endpoint.SYSTEM + Endpoint.USER_GROUP_ACCESS, userGroupAccessRoute(controllers));
  router.use(Endpoint.SYSTEM + Endpoint.USER_OTP, userOtpRoute(controllers));
  router.use(Endpoint.SYSTEM + Endpoint.USER_TABLE_VIEW_COLUMN, userTableViewColumnRoute(controllers));
  router.use(Endpoint.SYSTEM + Endpoint.AUTO_APPROVE, stAutoApproveRoute(controllers));
  router.use(Endpoint.SYSTEM + Endpoint.ACTION, actionRoute(controllers));
  router.use(Endpoint.SYSTEM + Endpoint.ACTION_PAGE, actionPageRoute(controllers));
  router.use(Endpoint.SYSTEM + Endpoint.PAGE_MENU, pageMenuRoute(controllers));
  router.use(Endpoint.SYSTEM + Endpoint.PAGE_MENU_TERBUKA, pageMenuTerbukaRoute(controllers));

  router.use(Endpoint.V1 + Endpoint.IMPORT_DATA, importDataRoute(controllers));
  router.use(Endpoint.V1 + Endpoint.FETCH_REPORT, fetchReportRoute(controllers));

  router.use(Endpoint.LOGIN, loginRoute(app));
  router.use(monitorApiRoute(controllers));
  router.use(createDocumentationRoute());
  router.use(createPusherRoute(app));
  router.use('*', (_, response) => {
    return response.status(StatusCodes.NOT_FOUND).json(buildResponse(StatusCodes.NOT_FOUND, Constant.NOT_FOUND));
  });
};

export default route;
