import { useSession } from "next-auth/react";
import { createContext } from "react";

export const CurrentUserContext = createContext();

export const CurrentUserContextProvider = ({ children }) => {
  const { data, status } = useSession();
  console.log(data, status);
  return (
    <CurrentUserContext.Provider
      value={{
        name: "toto à la plage",
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserContextProvider;
