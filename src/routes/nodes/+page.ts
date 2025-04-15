import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import {
  PUBLIC_MEMPOOLSPACE_API_URL,
  PUBLIC_MEMPOOLSPACE_ENDPOINT_LN_RANKING_CONNECTIVITY,
} from '$env/static/public';

export const load: PageLoad = async ({ fetch }) => {
  const url = `${PUBLIC_MEMPOOLSPACE_API_URL}${PUBLIC_MEMPOOLSPACE_ENDPOINT_LN_RANKING_CONNECTIVITY}`;
  // TODO: error handling
  const res = await fetch(url);
  const nodes = await res.json();
  return { nodes };
};
