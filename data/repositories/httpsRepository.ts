export interface HttpsRepository {
  post<T, U>(url: string, data: T, config?: any): Promise<U | undefined>;
  get<T>(url: string, config?: any, params?: any): Promise<T | undefined>;
}
