import { useContext } from "react";
import { InnerBlock } from "../common/InnerBlock";
import { Context } from "./Context";

export const Bloc = ({ selectedKey }: { selectedKey: string }) => {
  const { value } = useContext(Context);
  return <InnerBlock value={value[selectedKey]} />;
};
