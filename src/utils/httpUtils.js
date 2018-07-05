import axios from 'axios';
import { cacheAdapterEnhancer } from 'axios-extensions';

import { GITHUB_API } from 'config/urls';

const http = axios.create({
  baseURL: GITHUB_API,
  headers: {
    Accept: 'application/vnd.github.mercy-preview+json',
  },
  timeout: 10000,
  adapter: cacheAdapterEnhancer(axios.defaults.adapter),
});

export default http;
