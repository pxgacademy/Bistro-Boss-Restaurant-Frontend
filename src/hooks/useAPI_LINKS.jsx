import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_LINK,
});

const useAPI_LINK = () => {
  return instance;
};

//
//

const secureInstance = axios.create({
  baseURL: import.meta.env.VITE_SECURE_API_LINK,
  withCredentials: true,
});

const useSECURE_API_LINK = () => {
  return secureInstance;
};

export { useAPI_LINK, useSECURE_API_LINK };
