// small utility function to have golang style error handling instead of try/catch blocks
const catchError = (promise: Promise<Response | JSON>) => {
  return promise
    .then((data) => {
      return [null, data];
    })
    .catch((error) => {
      return [error, null];
    });
};

type SvelteOrVitestFetch = typeof fetch;
export const handleLoad = async (url: string, fetch: SvelteOrVitestFetch) => {
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
