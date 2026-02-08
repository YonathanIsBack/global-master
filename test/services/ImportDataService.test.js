import DatabaseConnectionSingleton from '../../src/configs/DatabaseConnection.js';
import Currency from '../../src/models/Currency.js';
import { IxCurrency, IxCurrencyDt } from '../../src/models/ix/IxCurrency.js';
import ImportDataService from '../../src/services/ImportDataService.js';
import initTestDatabase from '../config/initTestDatabase';

describe('ImportDataService', () => {
  beforeEach(async () => {
    await initTestDatabase();
  });

  it('should import data properly', async () => {
    const ixCurrency = {
      ix_currency_id: "1",
      file_name: "SomeFilename.txt"
    }
    const ixCurrencyDt = {
      ix_currency_dt_id: "1",
      ix_currency_id: "1",
      currency_code: "IDR"
    }
    const msCurrency = {
      currency_id: 1,
      currency_code: "IDR"
    }
    const deleteMsCurrency = {
      currency_id: 2
    };
    const deleteMsCurrencyCny = {
      currency_code: "CNY"
    };
    await Currency.create({ currencyId: 1, currencyCode: "ID" });
    await Currency.create({ currencyId: 2, currencyCode: "USD" });
    await Currency.create({ currencyId: 3, currencyCode: "JPY" });
    await Currency.create({ currencyId: 4, currencyCode: "CNY" });

    const requestBody = {
      ix_currency: { insert: [ixCurrency] },
      ix_currency_dt: { insert: [ixCurrencyDt] },
      ms_currency: { insert: [msCurrency], delete: [deleteMsCurrency, deleteMsCurrencyCny, {}] },
      user_id: "123",
      user_ip: "192.168.1.1",
      creby_log: "User",
    }
    const importDataService = new ImportDataService();
    const result = await DatabaseConnectionSingleton.getConnection().transaction(async (transaction) => {
      const results = await importDataService.importData(requestBody, { transaction });
      const response = {};
      results.forEach(result => {
        Object.assign(response, result)
      })
      return { total_table: results.length, results: response };
    });

    console.log(JSON.stringify(result));
    const actualIxCurrency = await IxCurrency.findAll({ where: { ix_currency_id: 1 } });
    const actualIxCurrencyDt = await IxCurrencyDt.findAll({ where: { ix_currency_id: 1 } });
    const actualCurrency = await Currency.findAll();
    expect(actualIxCurrency.length).toEqual(1);
    expect(actualIxCurrencyDt.length).toEqual(1);
    expect(actualCurrency.length).toEqual(2);
    expect(actualIxCurrency[0].ixCurrencyId).toEqual(1);
    expect(actualIxCurrency[0].fileName).toEqual("SomeFilename.txt");
    expect(actualIxCurrencyDt[0].ixCurrencyId).toEqual(1);
    expect(actualIxCurrencyDt[0].ixCurrencyDtId).toEqual(1);
    expect(actualIxCurrencyDt[0].currencyCode).toEqual("IDR");

    expect(actualCurrency[0].currencyId).toEqual(1);
    expect(actualCurrency[0].currencyCode).toEqual("IDR");
    expect(actualCurrency[1].currencyId).toEqual(3);
    expect(actualCurrency[1].currencyCode).toEqual("JPY");
  });
});