import { IHttpClient } from "../interfaces/IHttpClient";

export enum ClientEnum {
  Axios = "axios",
  Fetch = "fetch",
}

export interface Data {
  userId: number;
  id: number;
  title: string;
  body: string;
  client: ClientEnum;
}

export class SimpleHttpClient {
  private adapter: IHttpClient;

  constructor(adapter: IHttpClient) {
    this.adapter = adapter;
  }

  setHttpClient(adapter: IHttpClient): void {
    this.adapter = adapter;
  }

  async getPosts(): Promise<Data[]> {
    const url = "https://jsonplaceholder.typicode.com/posts?_limit=1";
    return this.adapter.get<Data[]>(url);
  }
}
