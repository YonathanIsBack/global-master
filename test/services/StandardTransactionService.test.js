import DatabaseConnectionSingleton from '../../src/configs/DatabaseConnection.js';
import { PurchaseQuoteDto } from '../../src/dto/tr/purchase/PurchaseQuoteDto.js';
import TrcPurchaseImportDto from '../../src/dto/trc/TrcPurchaseImportDto.js';
import TrcPurchaseLocalDto from '../../src/dto/trc/TrcPurchaseLocalDto.js';
import LogTransaksi from '../../src/models/LogTransaksi.js';
import { ImportClearance } from '../../src/models/tr/import/ImportClearance.js';
import { PurchaseQuote, PurchaseQuoteDt } from '../../src/models/tr/purchase/PurchaseQuote.js';
import TrcPurchaseImport from '../../src/models/trc/TrcPurchaseImport.js';
import TrcPurchaseLocal from '../../src/models/trc/TrcPurchaseLocal.js';
import StandardTransactionService from '../../src/services/StandardTransactionService.js';
import initTestDatabase from '../config/initTestDatabase.js';

beforeEach(async () => {
  await initTestDatabase();
});

describe('StandardTransactionService', () => {
  describe('upsertTrace', () => {
    it('should save trace log', async () => {
      const body = {
        trc_purchase_import:
          [{
            log_transaksi_id: "14113",
            id: "141",
            transaction_type: "307",
            transaction_code: "RCL/PANTJQ/25/06/00012",
            transaction_date: "2025-06-16",
            trace_id: "[]",
            page: "purchase/import/ImportClearance",
            status: "2",
            cretime: "2025-06-16 20:00:24",
            creby: "105",
            ip: "192.168.1.28",
            trc_id: "4760"
          }]
      }
      const traceDto = [new TrcPurchaseImportDto(body)];
      const standardTransactionService = new StandardTransactionService(ImportClearance);
      await DatabaseConnectionSingleton.getConnection().transaction(async transaction => {
        await standardTransactionService.upsertTrace(traceDto, transaction);
      });

      const actualResult = await TrcPurchaseImport.findAll({
        where: {
          logTransaksiId: '14113'
        }
      });
      expect(actualResult.length).toEqual(1);
      expect(actualResult[0].trcId).toEqual(4760);
      expect(actualResult[0].logTransaksiId).toEqual(14113);
      expect(actualResult[0].id).toEqual(141);
      expect(actualResult[0].transactionCode).toEqual('RCL/PANTJQ/25/06/00012');
      expect(actualResult[0].transactionDate).toEqual('2025-06-16');
      expect(actualResult[0].transactionType).toEqual(307);
      expect(actualResult[0].transactionStatusAfter).toEqual(null);
      expect(actualResult[0].transactionStatusBefore).toEqual(null);
      expect(actualResult[0].traceId).toEqual('[]');
      expect(actualResult[0].page).toEqual('purchase/import/ImportClearance');
      expect(actualResult[0].status).toEqual(2);
      expect(actualResult[0].ip).toEqual('192.168.1.28');
      // expect(actualResult[0].cretime).toEqual('2025-06-16T13:00:24000Z');
      expect(actualResult[0].creby).toEqual(105);
    });
    it('should not save trace log when no trace was found', async () => {
      const standardTransactionService = new StandardTransactionService(ImportClearance);
      await DatabaseConnectionSingleton.getConnection().transaction(async transaction => {
        await standardTransactionService.upsertTrace(null, transaction);
      });

      const actualResult = await TrcPurchaseImport.findAll({
        where: {
          logTransaksiId: '14113'
        }
      });
      expect(actualResult.length).toEqual(0);
    });
  });

  describe('insertTransaction', () => {
    const purchaseQuoteRequestBody = {
      id: 334,
      purchase_quote_id: 334,
      warehouse_id: null,
      purchase_quote_date: "2025-06-16",
      supplier_id: "498",
      payment_term_id: "44",
      shipping: "",
      shipping_date: "2025-06-16",
      trace_id: "[\"1077\"]",
      note: "",
      status: 1,
      status_next: 2,
      subtotal: "5100000.00",
      disc_persen: 0,
      disc_amount: "0.00",
      disc_persen2: "0.00",
      disc_amount2: "0.00",
      tax_persen: "1.00",
      tax_amount: "51000.00",
      total: "5100000.00",
      total_qty: 200,
      isvat: 0,
      TotalAdvpayT: 0,
      purchase_quote_code: "POQ/PANTJQ/25/06/00008",
      purchase_quote_code_temp: "",
      user_id: "30",
      user_ip: "192.168.1.19",
      no_transaction_count: [
        {
          no_transaction_count_id: "247",
          no_transaction_id: "1",
          transaction_year: "2025",
          transaction_month: "6",
          transaction_week: null,
          transaction_days: null,
          current_number: "9"
        }
      ],
      tr_purchase_quote_dt: [
        {
          purchase_quote_id: 334,
          item_id: "2556",
          item_code: "SPR07-00035",
          item_name: "1800 ANEJO",
          qty: 100,
          price: "25000.00",
          price_suggest: "25000.00",
          price2: "25000.00",
          disc_persen: "0.00",
          disc_amount: "0.00",
          disc_persen2: "0.00",
          disc_amount2: "0.00",
          disc3: 0,
          tax_persen: "1.00",
          tax_amount: "25000.00",
          total: "2500000.00",
          qty_approve: 100,
          status: 2,
          purchase_quote_dt_id: 5224
        },
        {
          purchase_quote_id: 334,
          item_id: "2557",
          item_code: "SPR07-00010",
          item_name: "1800 Anejo 35%",
          qty: 100,
          price: "26000.00",
          price_suggest: "26000.00",
          price2: "26000.00",
          disc_persen: "0.00",
          disc_amount: "0.00",
          disc_persen2: "0.00",
          disc_amount2: "0.00",
          disc3: 0,
          tax_persen: "1.00",
          tax_amount: "26000.00",
          total: "2600000.00",
          qty_approve: 100,
          status: 2,
          purchase_quote_dt_id: 5225
        }
      ],
      tr_purchase_quote_item_dt: [],
      tr_purchase_quote_advpay: [],
      log_transaksi: [
        {
          id: 334,
          transaction_type: 201,
          transaction_code: "POQ/PANTJQ/25/06/00008",
          page: "purchase/purchaseQuote",
          before: "",
          after: "{\"header\":[{\"warehouse_id\":null,\"purchase_quote_code_temp\":\"\",\"purchase_quote_code\":\"POQ\\/PANTJQ\\/25\\/06\\/00008\",\"purchase_quote_date\":\"2025-06-16\",\"trace_id\":\"[\\\"1077\\\"]\",\"supplier_id\":\"498\",\"shipping\":\"\",\"shipping_date\":\"2025-06-16\",\"payment_term_id\":\"44\",\"note\":\"\",\"status\":1,\"status_next\":2,\"total_advpay\":\"0.00\",\"subtotal\":\"5100000.00\",\"disc_amount\":\"0.00\",\"disc_persen2\":\"0.00\",\"disc_amount2\":\"0.00\",\"disc_persen3\":\"0.00\",\"disc_amount3\":\"0.00\",\"tax_persen\":\"1.00\",\"tax_amount\":\"51000.00\",\"total_qty\":200,\"total\":\"5151000.00\",\"isvat\":0,\"cretime\":\"2025-06-16 16:20:09\",\"creby\":\"30\",\"supplier_code\":\"250602495\",\"supplier_name\":\"Dummy Test\",\"payment_term_name\":\"TEST TOP\",\"total_t\":\"5100000.00\"}],\"detail\":[{\"purchase_quote_id\":334,\"item_id\":\"2556\",\"item_code\":\"SPR07-00035\",\"item_name\":\"1800 ANEJO\",\"qty\":100,\"price\":\"25000.00\",\"price_suggest\":\"25000.00\",\"price_t\":\"25000.00\",\"price_s\":\"0.00\",\"price2\":\"25000.00\",\"disc_persen\":\"0.00\",\"disc_amount\":\"0.00\",\"disc_persen2\":\"0.00\",\"disc_amount2\":\"0.00\",\"disc3\":0,\"tax_persen\":\"1.00\",\"tax_amount\":\"25000.00\",\"total\":\"2500000.00\",\"qty_approve\":100,\"status\":2},{\"purchase_quote_id\":334,\"item_id\":\"2557\",\"item_code\":\"SPR07-00010\",\"item_name\":\"1800 Anejo 35%\",\"qty\":100,\"price\":\"26000.00\",\"price_suggest\":\"26000.00\",\"price_t\":\"26000.00\",\"price_s\":\"0.00\",\"price2\":\"26000.00\",\"disc_persen\":\"0.00\",\"disc_amount\":\"0.00\",\"disc_persen2\":\"0.00\",\"disc_amount2\":\"0.00\",\"disc3\":0,\"tax_persen\":\"1.00\",\"tax_amount\":\"26000.00\",\"total\":\"2600000.00\",\"qty_approve\":100,\"status\":2}]}",
          status: 1,
          cretime: "2025-06-16 16:20:09",
          creby: "30",
          ip: "192.168.1.19",
          log_transaksi_id: 13958
        }
      ],
      trc_purchase_local: [
        {
          log_transaksi_id: 13958,
          id: 334,
          transaction_type: 201,
          transaction_code: "POQ/PANTJQ/25/06/00008",
          transaction_date: "2025-06-16",
          transaction_status_before: 1,
          transaction_status_after: 1,
          trace_id: "[\"1077\"]",
          page: "purchase/purchaseQuote",
          status: 1,
          cretime: "2025-06-16 16:20:09",
          creby: "30",
          ip: "192.168.1.19",
          trc_id: 3784
        }
      ]
    };
    it('should save data according to request body', async () => {
      const purchaseQuoteDto = new PurchaseQuoteDto(purchaseQuoteRequestBody);
      const standardTransactionService = new StandardTransactionService(PurchaseQuote);

      const actualResult = await standardTransactionService.insertTransaction(purchaseQuoteDto);

      expect(actualResult.data.purchaseQuoteId).toEqual(334);
      expect(actualResult.data.traceId).toEqual('["1077"]');
      expect(actualResult.data.companyId).toEqual(undefined);
      expect(actualResult.data.warehouseId).toEqual(null);
      expect(actualResult.data.purchaseQuoteCode).toEqual('POQ/PANTJQ/25/06/00008');
      expect(actualResult.data.purchaseQuoteCodeTemp).toEqual('');
      expect(actualResult.data.purchaseQuoteDate).toEqual('2025-06-16');
      expect(actualResult.data.supplierId).toEqual('498');
      expect(actualResult.data.currencyId).toEqual(undefined);
      expect(actualResult.data.currencyRate).toEqual(undefined);
      expect(actualResult.data.paymentTermId).toEqual('44');
      expect(actualResult.data.shipping).toEqual('');
      expect(actualResult.data.shippingDate).toEqual('2025-06-16');
      expect(actualResult.data.note).toEqual('');
      expect(actualResult.data.status).toEqual(1);
      expect(actualResult.data.statusNext).toEqual(2);
      expect(actualResult.data.isFinish).toEqual(undefined);
      expect(actualResult.data.totalQty).toEqual(200);
      expect(actualResult.data.subtotal).toEqual('5100000.00');
      expect(actualResult.data.discPersen).toEqual(0);
      expect(actualResult.data.discAmount).toEqual('0.00');
      expect(actualResult.data.discPersen2).toEqual('0.00');
      expect(actualResult.data.discAmount2).toEqual('0.00');
      expect(actualResult.data.totalAdvpay).toEqual(undefined);
      expect(actualResult.data.taxPersen).toEqual('1.00');
      expect(actualResult.data.taxAmount).toEqual('51000.00');
      expect(actualResult.data.isvat).toEqual(0);
      expect(actualResult.data.total).toEqual('5100000.00');
      expect(actualResult.data.totalPayFinish).toEqual(undefined);
      expect(actualResult.data.confirmtime).toEqual(undefined);
      expect(actualResult.data.confirmby).toEqual(undefined);
      expect(actualResult.data.confirmtimeF).toEqual(undefined);
      expect(actualResult.data.confirmbyF).toEqual(undefined);
      expect(actualResult.data.isedit).toEqual(undefined);
      expect(actualResult.data.cretime).toEqual(undefined);
      expect(actualResult.data.creby).toEqual(undefined);
      expect(actualResult.data.modtime).toEqual(undefined);
      expect(actualResult.data.modby).toEqual(undefined);

      expect(actualResult.details[0].tr_purchase_quote_dt[0].deleted.purchaseQuoteId).toEqual(334);
      expect(actualResult.details[0].tr_purchase_quote_dt[1].insert.purchaseQuoteId).toEqual(334);
      expect(actualResult.details[0].tr_purchase_quote_dt[1].insert.itemId).toEqual('2556');
      expect(actualResult.details[0].tr_purchase_quote_dt[1].insert.itemCode).toEqual('SPR07-00035');
      expect(actualResult.details[0].tr_purchase_quote_dt[1].insert.itemName).toEqual('1800 ANEJO');
      expect(actualResult.details[0].tr_purchase_quote_dt[1].insert.qty).toEqual(100);
      expect(actualResult.details[0].tr_purchase_quote_dt[1].insert.price).toEqual('25000.00');
      expect(actualResult.details[0].tr_purchase_quote_dt[1].insert.price2).toEqual('25000.00');
      expect(actualResult.details[0].tr_purchase_quote_dt[1].insert.discPersen).toEqual('0.00');
      expect(actualResult.details[0].tr_purchase_quote_dt[1].insert.discAmount).toEqual('0.00');
      expect(actualResult.details[0].tr_purchase_quote_dt[1].insert.disc3).toEqual(0);
      expect(actualResult.details[0].tr_purchase_quote_dt[1].insert.taxPersen).toEqual('1.00');
      expect(actualResult.details[0].tr_purchase_quote_dt[1].insert.taxAmount).toEqual('25000.00');
      expect(actualResult.details[0].tr_purchase_quote_dt[1].insert.total).toEqual('2500000.00');
      expect(actualResult.details[0].tr_purchase_quote_dt[1].insert.qtyApprove).toEqual(100);
      expect(actualResult.details[0].tr_purchase_quote_dt[1].insert.status).toEqual(2);
      expect(actualResult.details[0].tr_purchase_quote_dt[1].insert.purchaseQuoteDtId).toEqual(5224);

      expect(actualResult.details[0].tr_purchase_quote_dt[2].insert.purchaseQuoteId).toEqual(334);
      expect(actualResult.details[0].tr_purchase_quote_dt[2].insert.itemId).toEqual('2557');
      expect(actualResult.details[0].tr_purchase_quote_dt[2].insert.itemCode).toEqual('SPR07-00010');
      expect(actualResult.details[0].tr_purchase_quote_dt[2].insert.itemName).toEqual('1800 Anejo 35%');
      expect(actualResult.details[0].tr_purchase_quote_dt[2].insert.qty).toEqual(100);
      expect(actualResult.details[0].tr_purchase_quote_dt[2].insert.price).toEqual('26000.00');
      expect(actualResult.details[0].tr_purchase_quote_dt[2].insert.price2).toEqual('26000.00');
      expect(actualResult.details[0].tr_purchase_quote_dt[2].insert.discPersen).toEqual('0.00');
      expect(actualResult.details[0].tr_purchase_quote_dt[2].insert.discAmount).toEqual('0.00');
      expect(actualResult.details[0].tr_purchase_quote_dt[2].insert.disc3).toEqual(0);
      expect(actualResult.details[0].tr_purchase_quote_dt[2].insert.taxPersen).toEqual('1.00');
      expect(actualResult.details[0].tr_purchase_quote_dt[2].insert.taxAmount).toEqual('26000.00');
      expect(actualResult.details[0].tr_purchase_quote_dt[2].insert.total).toEqual('2600000.00');
      expect(actualResult.details[0].tr_purchase_quote_dt[2].insert.qtyApprove).toEqual(100);
      expect(actualResult.details[0].tr_purchase_quote_dt[2].insert.status).toEqual(2);
      expect(actualResult.details[0].tr_purchase_quote_dt[2].insert.purchaseQuoteDtId).toEqual(5225);

      expect(actualResult.details[1].tr_purchase_quote_item_dt[0].deleted.purchaseQuoteId).toEqual(334);
      expect(actualResult.details[2].tr_purchase_quote_advpay[0].deleted.purchaseQuoteId).toEqual(334);
    });

    it('should update data according to request body', async () => {
      await PurchaseQuote.create({ purchaseQuoteId: 334 });
      const purchaseQuoteDto = new PurchaseQuoteDto(purchaseQuoteRequestBody);
      const standardTransactionService = new StandardTransactionService(PurchaseQuote);

      const actualResult = await standardTransactionService.insertTransaction(purchaseQuoteDto);

      expect(actualResult.data.purchaseQuoteId).toEqual(334);
      expect(actualResult.data.traceId).toEqual('["1077"]');
      expect(actualResult.data.companyId).toEqual(null);
      expect(actualResult.data.warehouseId).toEqual(null);
      expect(actualResult.data.purchaseQuoteCode).toEqual('POQ/PANTJQ/25/06/00008');
      expect(actualResult.data.purchaseQuoteCodeTemp).toEqual('');
      expect(actualResult.data.purchaseQuoteDate).toEqual('2025-06-16');
      expect(actualResult.data.supplierId).toEqual(498);
      expect(actualResult.data.currencyId).toEqual(null);
      expect(actualResult.data.currencyRate).toEqual(null);
      expect(actualResult.data.paymentTermId).toEqual(44);
      expect(actualResult.data.shipping).toEqual('');
      expect(actualResult.data.shippingDate).toEqual('2025-06-16');
      expect(actualResult.data.note).toEqual('');
      expect(actualResult.data.status).toEqual(1);
      expect(actualResult.data.statusNext).toEqual(2);
      expect(actualResult.data.isFinish).toEqual(null);
      expect(actualResult.data.totalQty).toEqual(200);
      expect(actualResult.data.subtotal).toEqual(5100000.00);
      expect(actualResult.data.discPersen).toEqual(0);
      expect(actualResult.data.discAmount).toEqual(0.00);
      expect(actualResult.data.discPersen2).toEqual(0.00);
      expect(actualResult.data.discAmount2).toEqual(0.00);
      expect(actualResult.data.totalAdvpay).toEqual(null);
      expect(actualResult.data.taxPersen).toEqual(1.00);
      expect(actualResult.data.taxAmount).toEqual(51000.00);
      expect(actualResult.data.isvat).toEqual(0);
      expect(actualResult.data.total).toEqual(5100000.00);
      expect(actualResult.data.totalPayFinish).toEqual(null);
      expect(actualResult.data.confirmtime).toEqual(null);
      expect(actualResult.data.confirmby).toEqual(null);
      expect(actualResult.data.confirmtimeF).toEqual(null);
      expect(actualResult.data.confirmbyF).toEqual(null);
      expect(actualResult.data.isedit).toEqual(null);
      expect(actualResult.data.cretime).toEqual(null);
      expect(actualResult.data.creby).toEqual(null);
      expect(actualResult.data.modtime).toEqual(null);
      expect(actualResult.data.modby).toEqual(null);

      expect(actualResult.details[0].tr_purchase_quote_dt[0].deleted.purchaseQuoteId).toEqual(334);
      expect(actualResult.details[0].tr_purchase_quote_dt[1].insert.purchaseQuoteId).toEqual(334);
      expect(actualResult.details[0].tr_purchase_quote_dt[1].insert.itemId).toEqual('2556');
      expect(actualResult.details[0].tr_purchase_quote_dt[1].insert.itemCode).toEqual('SPR07-00035');
      expect(actualResult.details[0].tr_purchase_quote_dt[1].insert.itemName).toEqual('1800 ANEJO');
      expect(actualResult.details[0].tr_purchase_quote_dt[1].insert.qty).toEqual(100);
      expect(actualResult.details[0].tr_purchase_quote_dt[1].insert.price).toEqual('25000.00');
      expect(actualResult.details[0].tr_purchase_quote_dt[1].insert.price2).toEqual('25000.00');
      expect(actualResult.details[0].tr_purchase_quote_dt[1].insert.discPersen).toEqual('0.00');
      expect(actualResult.details[0].tr_purchase_quote_dt[1].insert.discAmount).toEqual('0.00');
      expect(actualResult.details[0].tr_purchase_quote_dt[1].insert.disc3).toEqual(0);
      expect(actualResult.details[0].tr_purchase_quote_dt[1].insert.taxPersen).toEqual('1.00');
      expect(actualResult.details[0].tr_purchase_quote_dt[1].insert.taxAmount).toEqual('25000.00');
      expect(actualResult.details[0].tr_purchase_quote_dt[1].insert.total).toEqual('2500000.00');
      expect(actualResult.details[0].tr_purchase_quote_dt[1].insert.qtyApprove).toEqual(100);
      expect(actualResult.details[0].tr_purchase_quote_dt[1].insert.status).toEqual(2);
      expect(actualResult.details[0].tr_purchase_quote_dt[1].insert.purchaseQuoteDtId).toEqual(5224);

      expect(actualResult.details[0].tr_purchase_quote_dt[2].insert.purchaseQuoteId).toEqual(334);
      expect(actualResult.details[0].tr_purchase_quote_dt[2].insert.itemId).toEqual('2557');
      expect(actualResult.details[0].tr_purchase_quote_dt[2].insert.itemCode).toEqual('SPR07-00010');
      expect(actualResult.details[0].tr_purchase_quote_dt[2].insert.itemName).toEqual('1800 Anejo 35%');
      expect(actualResult.details[0].tr_purchase_quote_dt[2].insert.qty).toEqual(100);
      expect(actualResult.details[0].tr_purchase_quote_dt[2].insert.price).toEqual('26000.00');
      expect(actualResult.details[0].tr_purchase_quote_dt[2].insert.price2).toEqual('26000.00');
      expect(actualResult.details[0].tr_purchase_quote_dt[2].insert.discPersen).toEqual('0.00');
      expect(actualResult.details[0].tr_purchase_quote_dt[2].insert.discAmount).toEqual('0.00');
      expect(actualResult.details[0].tr_purchase_quote_dt[2].insert.disc3).toEqual(0);
      expect(actualResult.details[0].tr_purchase_quote_dt[2].insert.taxPersen).toEqual('1.00');
      expect(actualResult.details[0].tr_purchase_quote_dt[2].insert.taxAmount).toEqual('26000.00');
      expect(actualResult.details[0].tr_purchase_quote_dt[2].insert.total).toEqual('2600000.00');
      expect(actualResult.details[0].tr_purchase_quote_dt[2].insert.qtyApprove).toEqual(100);
      expect(actualResult.details[0].tr_purchase_quote_dt[2].insert.status).toEqual(2);
      expect(actualResult.details[0].tr_purchase_quote_dt[2].insert.purchaseQuoteDtId).toEqual(5225);

      expect(actualResult.details[1].tr_purchase_quote_item_dt[0].deleted.purchaseQuoteId).toEqual(334);
      expect(actualResult.details[2].tr_purchase_quote_advpay[0].deleted.purchaseQuoteId).toEqual(334);
    });
  });

  describe('changeStatus', () => {
    it('should run change status properly', async () => {
      const purchaseQuoteDt = {
        purchase_quote_dt_id: 1,
        purchase_quote_id: 1
      }
      const logTransaksi = {
        logTransaksiId: 1,
        toModel: () => ({
          logTransaksiId: 1
        })
      }
      const trcPurchaseLocal = {
        trc_id: 1
      }
      const purchaseQuote = {
        purchaseQuoteId: 1,
        toModel: () => ({
          purchase_quote_id: 1,
        }),
        detailsData: {
          tr_purchase_quote_dt: [purchaseQuoteDt]
        },
        logTransaksi,
        traceDtos: [new TrcPurchaseLocalDto({ trc_purchase_local: [trcPurchaseLocal] })],
        deleteDetailsData: {}
      };

      const standardTransactionService = new StandardTransactionService(PurchaseQuote);
      const actualResult = await standardTransactionService.changeStatus(purchaseQuote);

      expect(actualResult.data.purchaseQuoteId).toEqual(1);
      expect(actualResult.details[0].tr_purchase_quote_dt[0].insert.purchaseQuoteId).toEqual(1);
      expect(actualResult.details[0].tr_purchase_quote_dt[0].insert.purchaseQuoteDtId).toEqual(1);
      const actualTrace = await TrcPurchaseLocal.findAll({ where: { trcId: 1 } });
      expect(actualTrace.length).toEqual(1);
      expect(actualTrace[0].trcId).toEqual(1);
      const actualLog = await LogTransaksi.findAll({ where: { logTransaksiId: 1 } });
      expect(actualLog.length).toEqual(1)
      expect(actualLog[0].logTransaksiId).toEqual(1)
    });

    it('should run update when executing change status properly', async () => {
      const purchaseQuoteDt = {
        purchase_quote_dt_id: 1,
        purchase_quote_id: 1
      }
      const logTransaksi = {
        logTransaksiId: 1,
        toModel: () => ({
          logTransaksiId: 1
        })
      }
      const trcPurchaseLocal = {
        trc_id: 1
      }
      const purchaseQuote = {
        purchaseQuoteId: 1,
        toModel: () => ({
          purchaseQuoteId: 1,
          purchaseQuoteCode: "SOME//CODE"
        }),
        detailsData: {
          tr_purchase_quote_dt: [purchaseQuoteDt]
        },
        logTransaksi,
        traceDtos: [new TrcPurchaseLocalDto({ trc_purchase_local: [trcPurchaseLocal] })],
        deleteDetailsData: {}
      };
      await PurchaseQuote.create({ purchaseQuoteId: 1, purchaseQuoteCode: "ANO//THER/CODE" });

      const standardTransactionService = new StandardTransactionService(PurchaseQuote);
      const actualResult = await standardTransactionService.changeStatus(purchaseQuote);

      expect(actualResult.data.purchaseQuoteId).toEqual(1);
      expect(actualResult.details[0].tr_purchase_quote_dt[0].insert.purchaseQuoteId).toEqual(1);
      expect(actualResult.details[0].tr_purchase_quote_dt[0].insert.purchaseQuoteDtId).toEqual(1);
      expect(actualResult.data.purchaseQuoteCode).toEqual("SOME//CODE");
      const actualTrace = await TrcPurchaseLocal.findAll({ where: { trcId: 1 } });
      expect(actualTrace.length).toEqual(1);
      expect(actualTrace[0].trcId).toEqual(1);
      const actualLog = await LogTransaksi.findAll({ where: { logTransaksiId: 1 } });
      expect(actualLog.length).toEqual(1)
      expect(actualLog[0].logTransaksiId).toEqual(1)
    });
  });


  describe('changeStatusRequest', () => {
    it('should run change status request properly', async () => {
      const purchaseQuoteDt = {
        purchase_quote_dt_id: 1,
        purchase_quote_id: 1
      }
      const logTransaksi = {
        logTransaksiId: 1,
        toModel: () => ({
          logTransaksiId: 1
        })
      }
      const trcPurchaseLocal = {
        trc_id: 1
      }
      const purchaseQuote = {
        purchaseQuoteId: 1,
        toModel: () => ({
          purchase_quote_id: 1,
        }),
        detailsData: {
          tr_purchase_quote_dt: [purchaseQuoteDt]
        },
        logTransaksi,
        traceDtos: [new TrcPurchaseLocalDto({ trc_purchase_local: [trcPurchaseLocal] })],
        deleteDetailsData: {}
      };

      const standardTransactionService = new StandardTransactionService(PurchaseQuote);
      const actualResult = await standardTransactionService.changeStatusRequest(purchaseQuote);

      expect(actualResult.data.purchaseQuoteId).toEqual(1);
      expect(actualResult.details[0].tr_purchase_quote_dt[0].insert.purchaseQuoteId).toEqual(1);
      expect(actualResult.details[0].tr_purchase_quote_dt[0].insert.purchaseQuoteDtId).toEqual(1);
      const actualTrace = await TrcPurchaseLocal.findAll({ where: { trcId: 1 } });
      expect(actualTrace.length).toEqual(1);
      expect(actualTrace[0].trcId).toEqual(1);
      const actualLog = await LogTransaksi.findAll({ where: { logTransaksiId: 1 } });
      expect(actualLog.length).toEqual(1)
      expect(actualLog[0].logTransaksiId).toEqual(1)
    });

    it('should run update when executing change status request properly', async () => {
      const purchaseQuoteDt = {
        purchase_quote_dt_id: 1,
        purchase_quote_id: 1
      }
      const logTransaksi = {
        logTransaksiId: 1,
        toModel: () => ({
          logTransaksiId: 1
        })
      }
      const trcPurchaseLocal = {
        trc_id: 1
      }
      const purchaseQuote = {
        purchaseQuoteId: 1,
        toModel: () => ({
          purchaseQuoteId: 1,
          purchaseQuoteCode: "SOME//CODE"
        }),
        detailsData: {
          tr_purchase_quote_dt: [purchaseQuoteDt]
        },
        logTransaksi,
        traceDtos: [new TrcPurchaseLocalDto({ trc_purchase_local: [trcPurchaseLocal] })],
        deleteDetailsData: {}
      };
      await PurchaseQuote.create({ purchaseQuoteId: 1, purchaseQuoteCode: "ANO//THER/CODE" });

      const standardTransactionService = new StandardTransactionService(PurchaseQuote);
      const actualResult = await standardTransactionService.changeStatusRequest(purchaseQuote);

      expect(actualResult.data.purchaseQuoteId).toEqual(1);
      expect(actualResult.details[0].tr_purchase_quote_dt[0].insert.purchaseQuoteId).toEqual(1);
      expect(actualResult.details[0].tr_purchase_quote_dt[0].insert.purchaseQuoteDtId).toEqual(1);
      expect(actualResult.data.purchaseQuoteCode).toEqual("SOME//CODE");
      const actualTrace = await TrcPurchaseLocal.findAll({ where: { trcId: 1 } });
      expect(actualTrace.length).toEqual(1);
      expect(actualTrace[0].trcId).toEqual(1);
      const actualLog = await LogTransaksi.findAll({ where: { logTransaksiId: 1 } });
      expect(actualLog.length).toEqual(1)
      expect(actualLog[0].logTransaksiId).toEqual(1)
    });
  });
});