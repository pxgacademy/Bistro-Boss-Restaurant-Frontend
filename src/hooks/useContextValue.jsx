import { useContext } from "react";
import {
  AuthContextProvider,
  ContextProvider,
} from "../context/ContextProvider";

const useContextValue = () => {
  const value = useContext(ContextProvider);
  return value;
};

const useAuthContextValue = () => {
  const value = useContext(AuthContextProvider);
  return value;
};

export { useContextValue, useAuthContextValue };
