import { useState } from "react";
import { Config, ConfigContext } from "./Config";

export const ConfigProvider = ({ children }: { children: React.ReactNode }) => {
  const [config, setConfig] = useState<Config>({
    useLibrary: false,
    cellsCount: 10,
    slowMode: false,
    slowCount: 1_000,
  });
  return (
    <ConfigContext.Provider
      value={{
        config,
        setConfig,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};
