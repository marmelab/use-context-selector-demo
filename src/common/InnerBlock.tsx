import { useEffect, useState } from "react";
import { useConfig } from "../useConfig";

export const InnerBlock = ({ value }: { value: string }) => {
  const config = useConfig();
  if (!config.slowMode) {
    return <FinalInnerBlock value={value} />;
  }
  return <SubInnerBlock value={value} depth={1} maxDepth={config.slowCount} />;
};

const FinalInnerBlock = ({ value }: { value: string }) => {
  return (
    <div
      className="card"
      style={{
        backgroundColor: value,
        color: value,
        height: "100px",
        width: "100px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          mixBlendMode: "difference",
        }}
      >
        {value}
      </div>
    </div>
  );
};

const SubInnerBlock = ({
  value,
  depth,
  maxDepth,
}: {
  value: string;
  depth: number;
  maxDepth: number;
}) => {
  const [rendered, setRendered] = useState(false);
  useEffect(() => {
    setRendered(true);
  }, []);
  if (!rendered) {
    return null;
  }

  if (depth === maxDepth) {
    return <FinalInnerBlock value={value} />;
  }

  return (
    <div
      style={{
        height: "100px",
        width: "100px",
      }}
    >
      <SubInnerBlock value={value} depth={depth + 1} maxDepth={maxDepth} />
    </div>
  );
};
