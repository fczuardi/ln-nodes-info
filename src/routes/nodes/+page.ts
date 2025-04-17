import type { PageLoad } from './$types';
import {
  PUBLIC_MEMPOOLSPACE_API_URL,
  PUBLIC_MEMPOOLSPACE_ENDPOINT_LN_RANKING_CONNECTIVITY,
} from '$env/static/public';

// small utility function to have golang style error handling instead of try/catch blocks
const catchError = (promise: Promise<any>) => {
  return promise
    .then((data) => {
      return [null, data];
    })
    .catch((error) => {
      return [error, null];
    });
};

interface Node {
  channels: Number;
  alias: string;
  publicKey: string;
}
interface NodesPageData {
  nodes: Array<Node>;
  error: {
    title: null | string;
    message: null | string;
  };
}
export const load: PageLoad = async ({ fetch }): Promise<NodesPageData> => {
  const url = `${PUBLIC_MEMPOOLSPACE_API_URL}${PUBLIC_MEMPOOLSPACE_ENDPOINT_LN_RANKING_CONNECTIVITY}`; // response ok and json
  //const url = 'https://run.mocky.io/v3/048999b5-50b4-45fe-b277-cf03b852c17f'; // response ok and not json
  //const url = "https://run.mocky.io/v3/01213725-e08e-447c-8472-f35d04a8ed84" // response not ok
  // const url = 'https://run.sssssmocky.io/v3/01213725-e08e-447c-8472-f35d04a8ed84'; // failed to fetch

  let errorTitle = null;
  let errorMessage = null;

  const [fetchError, res] = await catchError(fetch(url));
  if (fetchError !== null) {
    errorTitle = `Fetch Failed`;
    errorMessage = fetchError.message;
    console.error(fetchError);
    return { error: { title: errorTitle, message: errorMessage }, nodes: [] };
  }
  if (res.ok === false) {
    errorTitle = `API Error`;
    errorMessage = `Response status ${res.status}`;
    console.error(errorMessage);
    console.error(res);
    return { error: { title: errorTitle, message: errorMessage }, nodes: [] };
  }

  const [jsonError, nodes] = await catchError(res.json());
  if (jsonError !== null) {
    errorTitle = 'API Error';
    errorMessage = 'Invalid JSON';
    console.error(errorMessage);
    console.error(jsonError);
    return { error: { title: errorTitle, message: errorMessage }, nodes: [] };
  }

  return { error: { title: errorTitle, message: errorMessage }, nodes };
};
