import axios from 'axios';

class MasterService {
  constructor(url) {
    const base_url = `${process.env.REACT_APP_BASE_URL}${url}`;
    this.axios = axios.create({
      baseURL: base_url,
    });
  }

  get() {
    return this.axios.get();
  }

  post(body) {
    return this.axios.post('', body);
  }

  put() {
    return this.axios.put();
  }
}

export default MasterService;
