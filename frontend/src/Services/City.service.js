import MasterService from './Master.service';

class CityService extends MasterService {
  constructor() {
    super('/city');
  }
}

export default CityService;
