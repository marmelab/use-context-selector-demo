import { createContext } from "react";

export type Config = {
  useLibrary: boolean;
  cellsCount: number;
  slowMode: boolean;
  slowCount: number;
};

export type ConfigContext = {
  config: Config;
  setConfig: (config: Config) => void;
};

export const ConfigContext = createContext<ConfigContext>({
  config: {
    useLibrary: false,
    cellsCount: 10,
    slowMode: false,
    slowCount: 1_000,
  },
  setConfig: () => {},
});
