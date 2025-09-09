import { AxiosAdapter } from "./clases/AxiosAdapter";
import { FetchAdapter } from "./clases/FetchAdapter";
import { SimpleHttpClient } from "./clases/SimpleHttpClient";
import { IHttpClient } from "./interfaces/IHttpClient";

const runAdapter = async () => {
  const fetchAdapter: IHttpClient = new FetchAdapter();
  const axiosAdapter: IHttpClient = new AxiosAdapter();

  console.log(
    "====================ADAPTER: FETCH & AXIOS ===================="
  );

  const simpleHttpClient = new SimpleHttpClient(fetchAdapter);
  const posts = await simpleHttpClient.getPosts();
  console.log(`USANDO FETCH = ${JSON.stringify(posts, null, 2)}`);

  simpleHttpClient.setHttpClient(axiosAdapter);
  const posts2 = await simpleHttpClient.getPosts();
  console.log(`USANDO AXIOS = ${JSON.stringify(posts2, null, 2)}`);

  console.log("====================");
};

export { runAdapter };
