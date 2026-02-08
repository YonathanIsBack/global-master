import Location from '../models/Location.js';
import StandardService from './StandardService.js';

class LocationService extends StandardService {
  constructor() {
    super(Location);
  }
}

export default LocationService;
