import { createContext } from "react";
import useLocalStorage from "use-local-storage";

const CurrentInfosContext = createContext("");

export const CurrentInfosProvider = ({ children }) => {
  const [time, setTime] = useLocalStorage("");
  const [localisation, setLocalisation] = useLocalStorage("");

  return (
    <CurrentInfosContext.Provider
      value={{
        time,
        setTime,
        localisation,
        setLocalisation,
      }}
    >
      {children}
    </CurrentInfosContext.Provider>
  );
};
