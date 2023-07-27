export class HttpClientMethods {
  public get = async (url: string): Promise<Response> => {
    return await fetch(url, {});
  };

  public post = async <T>(url: string, body: T): Promise<Response> => {
    return await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  };

  public patch = async (url: string, abortSignal?: AbortSignal): Promise<Response> => {
    return await fetch(url, {
      ...(abortSignal && { signal: abortSignal }),
      method: 'PATCH',
    });
  };

  public put = async <T>(url: string, body: T): Promise<Response> => {
    return await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  };

  public delete = async (url: string): Promise<Response> => {
    return await fetch(url, {
      method: 'DELETE',
    });
  };
}

export const HttpClient = new HttpClientMethods();
