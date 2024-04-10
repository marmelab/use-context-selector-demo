import { Dispatch, SetStateAction, createContext } from "react";
import { initContext } from "../common/initContext";

export type ContextType = {
  value: Record<string, string>;
  setValue: Dispatch<SetStateAction<Record<string, string>>>;
};

export const Context = createContext<ContextType>({
  value: initContext(100),
  setValue: () => {},
});
