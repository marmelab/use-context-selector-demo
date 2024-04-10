import { useContext } from "react";
import { Context } from "./Context";
import { randomColor } from "../common/randomColor";

export const ChangeOneButton = () => {
  const { value, setValue } = useContext(Context);

  return (
    <div className="card">
      <button
        onClick={() => {
          const randomKey =
            Object.keys(value)[
              Math.floor(Math.random() * Object.keys(value).length)
            ];
          setValue((prev) => {
            return { ...prev, [randomKey]: randomColor() };
          });
        }}
        style={{
          marginBottom: "10px",
        }}
      >
        Change one random color
      </button>
    </div>
  );
};
