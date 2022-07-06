import { createContext, useState } from "react";

export const infosUserContext = createContext();

export const InfosUserContextProvider = ({ children }) => {
  const [selectDate, setSelectDate] = useState(() => {});
  const [selectLocalisation, setSelectLocalisation] = useState();

  return (
    <infosUserContext.Provider
      value={{
        selectDate,
        setSelectDate,
        selectLocalisation,
        setSelectLocalisation,
      }}
    >
      {children}
    </infosUserContext.Provider>
  );
};
