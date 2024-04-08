const BASEURL = "/api";

const createRequest = async (
  method: string,
  url: string,
  option?: Record<string, any>,
) => {
  try {
    const res = await fetch(`${BASEURL}${url}`, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      ...option,
    });
    return (await res.json()) as Promise<unknown>;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const get = async (url: string, option?: Record<string, any>) => {
  return createRequest("GET", url, option);
};

export const post = async (url: string, option: Record<string, any>) => {
  return createRequest("POST", url, option);
};
