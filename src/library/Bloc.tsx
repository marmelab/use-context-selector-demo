import { useContextSelector } from "use-context-selector";
import { InnerBlock } from "../common/InnerBlock";
import { Context } from "./Context";

export const Bloc = ({ selectedKey }: { selectedKey: string }) => {
  const value = useContextSelector(Context, (v) => {
    return v.value[selectedKey];
  });
  return <InnerBlock value={value} />;
};
