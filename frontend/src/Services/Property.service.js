import MasterService from './Master.service';

class PropertyService extends MasterService {
  constructor() {
    super('/property');
  }
}

export default PropertyService;
