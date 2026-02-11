import Location from '../models/Location.js';
import StandardService from './StandardService.js';

class LocationService extends StandardService {
  columnOrder = ["", "location_code", "location_name", "isactive"];
  columnSearch = ["cretime", "location_code", "location_name"];

  constructor() {
    super(Location);
  }
}

export default LocationService;
