import type {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

import axios from 'axios';
import { server } from 'constants/server';

if (!server.baseApiUrl) {
  throw new Error('Please set VITE_API_URL in .env file');
}

const api = axios.create({
  baseURL: server.baseApiUrl,
});

api.interceptors.request.use((config: InternalAxiosRequestConfig) => config);

api.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  (error: AxiosError<any>) => {
    // eslint-disable-next-line
    console.error(error);
    return Promise.reject(error);
  }
);

export default api;
