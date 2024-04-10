import { useEffect, useState } from "react";
import { initContext } from "../common/initContext";
import { Context } from "./Context";
import { useConfig } from "../useConfig";

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const config = useConfig();
  const [value, setValue] = useState(() => initContext(config.cellsCount));
  useEffect(() => {
    setValue(initContext(config.cellsCount));
  }, [config.cellsCount]);

  return (
    <Context.Provider value={{ value, setValue }}>{children}</Context.Provider>
  );
};
