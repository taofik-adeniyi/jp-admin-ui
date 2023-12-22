import axios from "axios";
export const clientId =
  process.env.NEXT_PUBLIC_CLIENT_ID || "staging_japaprize";

const japa = axios.create({
  baseURL: process.env.NEXT_PUBLIC_PADF_BASE_URL,
  timeout: 120000,
  headers: {
    "client-id": clientId,
  },
});

japa.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (
      error?.response?.status === 401 &&
      error?.response?.data?.error ===
        "You are unauthorised to access this resource!!!"
    ) {
      localStorage.removeItem("auth");
      localStorage.removeItem("refresh");
      localStorage.removeItem("token");
      localStorage.removeItem("selectedProject");
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

export const jpMiddleWare = axios.create({
  baseURL: process.env.NEXT_PUBLIC_MIDDLEWARE_BASE_URL,
  timeout: 120000,
  headers: {
    "client-id": clientId,
  },
});

jpMiddleWare.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (
      error?.response?.status === 401 &&
      error?.response?.data?.error ===
        "You are unauthorised to access this resource!!!"
    ) {
      localStorage.removeItem("auth");
      localStorage.removeItem("refresh");
      localStorage.removeItem("token");
      localStorage.removeItem("selectedProject");
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

export default japa;
