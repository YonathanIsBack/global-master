import DatabaseConnectionSingleton from "../../../configs/DatabaseConnection.js";
import StandardService from "../../StandardService.js";

class ExportSalesPriceService extends StandardService {
  constructor(model) {
    super(model);
  }
}

class ExportSalesPriceDtService extends StandardService {
  constructor(model) {
    super(model);
  }

  async delete(dto) {
    return DatabaseConnectionSingleton.getConnection().transaction(async (transaction) => {
      const { exportSalesPriceId, itemId } = dto.toModel();
      await this.model.destroy({ where: { itemId, exportSalesPriceId }, transaction });
    });
  }
}

export { ExportSalesPriceDtService, ExportSalesPriceService };

