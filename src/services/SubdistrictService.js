import City from '../models/City.js';
import { Country } from '../models/Country.js';
import District from '../models/District.js';
import Province from '../models/Province.js';
import SubDistrict from '../models/SubDistrict.js';
import ObjectUtil from '../util/ObjectUtil.js';
import StandardService from './StandardService.js';

class SubdistrictService extends StandardService {
  columnOrder = ['', 'subdistrictName', '$District.district_name$', '$City.city_name$', '$Province.province_name$', '$Country.country_name$', 'isactive'];
  columnSearch = ['subdistrictName', '$District.district_name$', '$City.city_name$', '$Province.province_name$', '$Country.country_name$'];

  constructor() {
    super(SubDistrict);
  }

  async count({ whereClause } = {}) {
    return await this.model.count({
      where: whereClause ?? null,
      include: [
        {
          model: District,
          required: false
        },
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
          model: District,
          required: false
        },
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
      const subdistrict = result.get({ plain: true });
      const district = subdistrict.District;
      const city = subdistrict.City;
      const country = subdistrict.Country;
      const province = subdistrict.Province;

      delete subdistrict.Country;
      delete subdistrict.Province;

      return {
        ...subdistrict,
        districtName: district?.districtName || '',
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
          model: District,
          required: false
        },
        {
          model: District,
          required: false
        },
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

    const subdistrict = results[0];
    const district = subdistrict.District;
    const city = subdistrict.City;
    const country = subdistrict.Country;
    const province = subdistrict.Province;

    return {
      ...ObjectUtil.toSnakeCase(subdistrict),
      ...ObjectUtil.toSnakeCase(district),
      ...ObjectUtil.toSnakeCase(city),
      ...ObjectUtil.toSnakeCase(country),
      ...ObjectUtil.toSnakeCase(province)
    };
  }
}

export default SubdistrictService;
