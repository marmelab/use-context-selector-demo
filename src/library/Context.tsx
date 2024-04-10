import { Dispatch, SetStateAction } from "react";
import { createContext } from "use-context-selector";
import { initContext } from "../common/initContext";

export type ContextType = {
  value: Record<string, string>;
  setValue: Dispatch<SetStateAction<Record<string, string>>>;
};

export const Context = createContext<ContextType>({
  value: initContext(10),
  setValue: () => {},
});
