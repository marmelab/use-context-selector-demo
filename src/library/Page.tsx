import { ChangeOneButton } from "./ChangeOneButton";
import { ContextProvider } from "./ContextProvider";
import { Wall } from "./Wall";

export const Page = () => {
  return (
    <ContextProvider>
      <ChangeOneButton />
      <Wall />
    </ContextProvider>
  );
};
