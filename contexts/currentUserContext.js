import axios from "axios";
import { signOut, useSession } from "next-auth/react";
import { createContext, useState, useEffect } from "react";

export const CurrentUserContext = createContext();

export const CurrentUserContextProvider = ({ children }) => {
  const { data, status } = useSession();
  const [profile, setProfile] = useState(null);
  console.log(data, status);
  useEffect(() => {
    if (status === "authenticated") {
      axios
        .get("/api/profile")
        .then(({ data }) => {
          setProfile(data);
        })
        .catch(() => {
          // when we have a stale cookie, disconnect
          signOut();
        });
    }
    console.log(status);
  }, [status]);
  return (
    <CurrentUserContext.Provider
      value={{
        profile,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserContextProvider;
