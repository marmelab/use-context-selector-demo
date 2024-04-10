import { useConfig } from "../useConfig";
import { Bloc } from "./Bloc";

export const Wall = () => {
  const config = useConfig();
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {new Array(config.cellsCount).fill(0).map((_, i) => (
        <Bloc key={i} selectedKey={`${i}`} />
      ))}
    </div>
  );
};
