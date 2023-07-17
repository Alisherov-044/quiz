import axios from 'axios'
import { baseUrl } from '../utils/urls'

export function Axios(method, url, data = {}) {
    return axios({
      method: method,
      url: `${baseUrl}/${url}`,
      data: data,
    })
      .then((response) => response)
      .catch((error) => error.response);
  };