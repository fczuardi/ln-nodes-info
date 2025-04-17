import { beforeAll, afterEach, afterAll, describe, test, expect } from 'vitest';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { handleLoad } from './handleLoad';
import {
  PUBLIC_MEMPOOLSPACE_API_URL,
  PUBLIC_MEMPOOLSPACE_ENDPOINT_LN_RANKING_CONNECTIVITY,
} from '$env/static/public';

const url = `${PUBLIC_MEMPOOLSPACE_API_URL}${PUBLIC_MEMPOOLSPACE_ENDPOINT_LN_RANKING_CONNECTIVITY}`;
const mockedSuccessResponse = [{ alias: 'Mocked Node 1' }, { alias: 'Mocked Node 2' }];
const server = setupServer(...[http.get(url, () => HttpResponse.json(mockedSuccessResponse))]);

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('/nodes/+page.ts', () => {
  test('should return nodes list on successful GET', async () => {
    const pageData = await handleLoad(url, fetch);
    expect(pageData.nodes).toEqual(mockedSuccessResponse);
  });
  test('should error on not ok status', async () => {
    server.use(http.get(url, () => new HttpResponse('oh no!', { status: 429 })));
    const pageData = await handleLoad(url, fetch);
    expect(pageData.error.title).not.toBeNull();
    expect(pageData.error.message).not.toBeNull();
    expect(pageData.nodes).toEqual([]);
  });
  test('should error on not JSON response', async () => {
    server.use(http.get(url, () => new HttpResponse('not JSON, text')));
    const pageData = await handleLoad(url, fetch);
    expect(pageData.error.title).not.toBeNull();
    expect(pageData.error.message).not.toBeNull();
    expect(pageData.nodes).toEqual([]);
  });
  test('should error on fetch fail', async () => {
    server.use(http.get(url, () => HttpResponse.error()));
    const pageData = await handleLoad(url, fetch);
    expect(pageData.error.title).not.toBeNull();
    expect(pageData.error.message).not.toBeNull();
    expect(pageData.nodes).toEqual([]);
  });
});
