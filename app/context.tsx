import { createContext } from "react";

interface ContextValue {
  channel: string;
  updateChannel: (value: string) => void;
}

export const GlobalStates = createContext<ContextValue>({
  channel: "",
  updateChannel: () => {},
});
