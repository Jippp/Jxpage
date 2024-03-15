const BASEURL = "/api";

const createRequest = (
  method: string,
  url: string,
  option?: Record<string, any>,
) =>
  fetch(`${BASEURL}${url}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    ...option,
  });

export const get = async (url: string, option?: Record<string, any>) =>
  createRequest("GET", url, option);
// {
// try {
//   const res = await createRequest('GET', url, option)
//   return Promise.resolve(res)
// } catch (error) {
//   return Promise.reject(error)
// }
// }

export const post = async (url: string, option: Record<string, any>) =>
  createRequest("POST", url, option);
// {
//   try {
//     const res = await createRequest('POST', url, option)
//     return Promise.resolve(res)
//   } catch (error) {
//     return Promise.reject(error)
//   }
// }
