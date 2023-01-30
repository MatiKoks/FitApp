const BASE_URL = 'http://172.20.10.2:4000';

export const APP_API = {
  AUTH: {
    LOGIN: `${BASE_URL}/auth/login`,
    REGISTRATION: `${BASE_URL}/auth/registration`,
  },
  USER: {
    GET_BY_ID: id => `${BASE_URL}/user/${id}`,
    CHANGE_PASSWORD: id => `${BASE_URL}/user/${id}/change-password`,
    //UPDATE_IMAGE: id => `${BASE_URL}/user/${id}/update-image`,
  },
  PRODUCT: {
    GET_ALL: `${BASE_URL}/product/all`,
  },
  USER_PRODUCTS: {
    INSERT_PRODUCT: id => `${BASE_URL}/user-products/${id}`,
    GET_USER_PRODUCTS: id => `${BASE_URL}/user-products/${id}/daily`,
    DELETE_USER_PRODUCT: `${BASE_URL}/user-products`

  }
};
