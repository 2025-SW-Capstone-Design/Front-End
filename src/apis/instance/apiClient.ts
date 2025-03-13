import axios from 'axios';
import { REISSUE } from '../../constants/endPoint';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || 'http://localhost:8080',
});

apiClient.interceptors.request.use((config) => {
  const accessToken = sessionStorage.getItem('accessToken');
  if (!accessToken) {
    config.headers['accessToken'] = null;
  } else {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }
  return config;
});

apiClient.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (err) {
    const originalConfig = err.config;
    const reissueRequestDto = {
      accessToken: sessionStorage.getItem('accessToken'),
      refreshToken: sessionStorage.getItem('refreshToken'),
    };
    if (
      err.response.data.status === 401 &&
      err.response.data.message === '유효하지 않은 토큰입니다.'
    ) {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_ENDPOINT}${REISSUE}` ||
            `http://localhost:8080${REISSUE}`,
          reissueRequestDto,
        );
        if (response) {
          sessionStorage.setItem('accessToken', response.data.data.accessToken);
          sessionStorage.setItem(
            'refreshToken',
            response.data.data.refreshToken,
          );

          return await apiClient.request(originalConfig);
        }
      } catch (err) {
        console.error(err);
        redirectToLogin();
      }
      return Promise.reject(err);
    } else if (err.response.data.status === 401) {
      sessionStorage.clear();
      redirectToLogin();
    }
    return Promise.reject(err);
  },
);

function redirectToLogin() {
  window.location.href = '/';
}

export default apiClient;
