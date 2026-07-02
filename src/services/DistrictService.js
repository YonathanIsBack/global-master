import City from '../models/City.js';
import { Country } from '../models/Country.js';
import District from '../models/District.js';
import Province from '../models/Province.js';
import ObjectUtil from '../util/ObjectUtil.js';
import StandardService from './StandardService.js';

class DistrictService extends StandardService {
  columnOrder = ['', 'districtName', '$City.city_name$', '$Province.province_name$', '$Country.country_name$', 'isactive'];
  columnSearch = ['districtName', '$City.city_name$', '$Province.province_name$', '$Country.country_name$'];

  constructor() {
    super(District);
  }

  async count({ whereClause } = {}) {
    return await this.model.count({
      where: whereClause ?? null,
      include: [
        {
          model: City,
          required: false
        },
        {
          model: Country,
          required: false
        },
        {
          model: Province,
          required: false
        }
      ]
    });
  }

  async getAll(params) {
    const { whereClause, limit = 1, offset = 0, orderIndex, orderDirection } = params;

    const results = await this.model.findAll({
      where: whereClause,
      nest: true,
      raw: false,
      limit: Number(limit),
      offset: Number(offset),
      order: this.buildOrderClause(orderIndex, orderDirection),
      include: [
        {
          model: City,
          required: false
        },
        {
          model: Country,
          required: false
        },
        {
          model: Province,
          required: false
        }
      ]
    });

    return results.map((result) => {
      const district = result.get({ plain: true });
      const city = district.City;
      const country = district.Country;
      const province = district.Province;

      delete district.Country;
      delete district.Province;

      return {
        ...district,
        cityName: city?.cityName || '',
        countryName: country?.countryName || '',
        provinceName: province?.provinceName || ''
      };
    });
  }

  async getDataApi(params) {
    const { whereClause, limit = 1, offset = 0, orderIndex, orderDirection } = params;

    const results = await this.model.findAll({
      where: whereClause,
      raw: true,
      limit: Number(limit),
      offset: Number(offset),
      order: this.buildOrderClause(orderIndex, orderDirection),
      nest: true,
      include: [
        {
          model: City,
          required: false
        },
        {
          model: Country,
          required: false
        },
        {
          model: Province,
          required: false
        }
      ]
    });

    const district = results[0];
    const city = district.City;
    const country = district.Country;
    const province = district.Province;

    return {
      ...ObjectUtil.toSnakeCase(district),
      ...ObjectUtil.toSnakeCase(city),
      ...ObjectUtil.toSnakeCase(country),
      ...ObjectUtil.toSnakeCase(province)
    };
  }
}

export default DistrictService;
