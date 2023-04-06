import axios, { AxiosInstance } from "axios";
import { HttpsRepository } from "data/repositories/httpsRepository";

const HEADERS = { "X-Custom-Header": "foobar" };

export class AxiosHttps implements HttpsRepository {
  private readonly axios: AxiosInstance;

  constructor(baseURL: string) {
    this.axios = axios.create({
      baseURL,
      headers: HEADERS,
    });
  }

  async post<T, U>(url: string, data: T, config?: any): Promise<U | undefined> {
    const response = await this.axios.post<U>(url, data, config);
    return response.data;
  }

  async get<T>(
    url: string,
    config?: any,
    params?: any
  ): Promise<T | undefined> {
    const response = await this.axios.get<T>(url, { ...config, params });
    return response.data;
  }
}
