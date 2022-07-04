import {
  createContext,
  useContext,
  useMemo,
  useReducer,
  useEffect,
} from "react";
import { AppReducer, initialState } from "./appReducer";

const CurrentInfosContext = createContext("");

export const CurrentInfosProvider = ({ children }) => {
  const { state, dispatch } = useReducer(AppReducer, initialState);

  const contextValue = useMemo(() => {
    return [state, dispatch];
  }, [state, dispatch]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("state"))) {
      //checking if there already is a state in localstorage
      dispatch({
        type: "init_stored",
        value: JSON.parse(localStorage.getItem("state")),
        //if yes, update the current state with the stored one
      });
    }
  }, []);

  useEffect(() => {
    if (state !== initialState) {
      localStorage.setItem("state", JSON.stringify(state));
      //create and/or set a new localstorage variable called "state"
    }
  }, [state]);

  return (
    <CurrentInfosContext.Provider
      value={{
        contextValue,
      }}
    >
      {children}
    </CurrentInfosContext.Provider>
  );
};
export function useAppContext() {
  return useContext(CurrentInfosProvider);
}
