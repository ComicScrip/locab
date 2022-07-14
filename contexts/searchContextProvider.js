import { createContext, useState } from "react";

export const infosUserContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const [userStartDate, setUserStartDate] = useState(() => {});
  const [userEndDate, setUserEndDate] = useState(() => {});
  const [selectLocalisation, setSelectLocalisation] = useState();

  return (
    <SearchContextProvider.Provider
      value={{
        userStartDate,
        setUserStartDate,
        userEndDate,
        setUserEndDate,
        selectLocalisation,
        setSelectLocalisation,
      }}
    >
      {children}
    </SearchContextProvider.Provider>
  );
};
