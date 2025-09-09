import axios from "axios";
import { IHttpClient } from "../interfaces/IHttpClient";
import { ClientEnum } from "./SimpleHttpClient";

export class AxiosAdapter implements IHttpClient {
  private clientType = ClientEnum.Axios;

  async get<T>(url: string): Promise<T> {
    const response = await axios.get(url);
    const data: [] = response.data;
    return { data, client: this.clientType } as T;
  }
}
