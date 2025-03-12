import apiClient from '../instance/apiClient';

export const apiBuilder = <T>(
  method: 'get' | 'post' | 'put' | 'delete',
  url: string,
  data?: unknown,
) => {
  return apiClient
    .request<T>({
      method,
      url,
      data,
    })
    .then((res) => res.data);
};
