import axios from "axios";
import { useContextValue } from "./useContextValue";
import { useNavigate } from "react-router-dom";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_LINK,
});

const useSecureAPI = () => {
  const { user, signOutUser } = useContextValue();
  const navigate = useNavigate();

  // add request interceptor to add access token to the header
  instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("access_token");
      if (token) config.headers.authorization = `Bearer ${token}`;
      if (user?.email) config.headers.userEmail = user.email;
      return config;
    },
    (error) => Promise.reject(error)
  );

  // add response interceptor to handle errors
  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const { status } = error.response;
      if (status === 401 || status === 403) {
        await signOutUser();
        navigate("/login", { replace: true });
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

export default useSecureAPI;
