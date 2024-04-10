import { randomColor } from "./randomColor";

export const initContext = (size: number) => {
  const obj: Record<string, string> = {};
  for (let i = 0; i < size; i++) {
    obj[`${i}`] = randomColor();
  }
  return obj;
};
