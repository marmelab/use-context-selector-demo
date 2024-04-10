import { useContext } from "react";
import { ConfigContext } from "./Config";

export const useConfig = () => {
  const { config } = useContext(ConfigContext);
  return config;
};
