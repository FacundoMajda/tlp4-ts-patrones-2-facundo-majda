import { IHttpClient } from "../interfaces/IHttpClient";
import { ClientEnum } from "./SimpleHttpClient";

export class FetchAdapter implements IHttpClient {
  private clientType = ClientEnum.Fetch;

  async get<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return { data, client: this.clientType } as T;
  }
}
