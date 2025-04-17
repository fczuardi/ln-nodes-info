import type { PageLoad } from './$types';
import { handleLoad } from './handleLoad';
import {
  PUBLIC_MEMPOOLSPACE_API_URL,
  PUBLIC_MEMPOOLSPACE_ENDPOINT_LN_RANKING_CONNECTIVITY,
} from '$env/static/public';

interface Node {
  channels: number;
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
  return await handleLoad(url, fetch);
};
