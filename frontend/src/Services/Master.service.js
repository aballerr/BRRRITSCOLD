import axios from 'axios';

class MasterService {
  constructor() {
    const base_url = `${process.env.REACT_APP_BASE_URL}${url}`;
    this.axios = axios.create({
      baseURL: base_url,
    });
  }

  get() {
    return this.axios.get();
  }

  post() {
    return this.axios.post();
  }

  put() {
    return this.axios.put();
  }
}

export default MasterService;
