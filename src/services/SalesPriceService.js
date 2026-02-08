import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
import LogEvent from '../constants/LogEvent.js';
import { ItemPrice } from '../models/Item.js';
import { SalesPriceDt } from '../models/tr/sales/SalesPrice.js';
import LoggerUtilSingleton from '../util/LoggerUtils.js';
import StandardService from './StandardService.js';

class SalesPriceService extends StandardService {
  constructor(model) {
    super(model);
  }

  async createOrUpdate(modelDto) {
    return DatabaseConnectionSingleton.getConnection().transaction(async (transaction) => {
      const salesPrice = await this.model.findByPk(this.getPrimaryKeyValue(modelDto), {
        transaction
      });
      // if (salesPrice != null) {
      //   await this.#deleteDetails(salesPrice.dataValues, transaction);
      // }

      return super.createOrUpdate(modelDto, { transaction });
    });
  }

  async #deleteDetails(salesPrice, transaction) {
    const salesPriceDetails = await SalesPriceDt.findAll(
      {
        where: { salesPriceId: salesPrice.salesPriceId },
        transaction
      },
    );

    const deleteItemPrice = salesPriceDetails.map(async (salesPriceDetail) => {
      const { itemId } = salesPriceDetail.dataValues;
      return new Promise(async (resolve, reject) => {
        await ItemPrice.destroy({ where: { itemId }, transaction });
        resolve();
      }).then((result) => LoggerUtilSingleton.info(LogEvent.API, { ...result }));
    });

    await Promise.all(deleteItemPrice);

    await SalesPriceDt.destroy({ where: { salesPriceId: salesPrice.salesPriceId }, transaction });
  }

  async delete(dto) {
    return DatabaseConnectionSingleton.getConnection().transaction(async (transaction) => {
      const salesPrice = await this.model.findByPk(this.getPrimaryKeyValue(dto), { transaction });
      const itemPriceIds = dto.ms_item_price;
      const deleted = [];

      if (itemPriceIds != null) {
        const deleteItemPrice = itemPriceIds.map(async (itemPriceId) => {
          return new Promise(async (resolve, reject) => {
            const deleted = await ItemPrice.destroy({ where: { itemPriceId }, transaction });
            resolve(deleted);
          }).then((result) => {
            deleted.push(`${itemPriceId} : ${result === 1 ? 'Deleted' : 'Not Deleted / Found'}`);
          });
        });

        await Promise.all(deleteItemPrice);
      }

      salesPrice.delete();

      const deletedData = await this.update(salesPrice.dataValues, transaction);
      return { data: { header: deletedData, details: deleted } };
    });
  }
}

class SalesPriceDtService extends StandardService {
  constructor(model) {
    super(model);
  }

  async delete(dto) {
    return DatabaseConnectionSingleton.getConnection().transaction(async (transaction) => {
      const { salesPriceId, itemId } = dto.toModel();
      await this.model.destroy({ where: { itemId, salesPriceId }, transaction });
    });
  }
}

export { SalesPriceService, SalesPriceDtService };
