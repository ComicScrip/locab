import axios from "axios";
import { signOut, useSession } from "next-auth/react";
import { createContext, useState, useEffect } from "react";

export const CurrentUserContext = createContext();

export const CurrentUserContextProvider = ({ children }) => {
  const { status } = useSession();
  const [profile, setProfile] = useState(null);

  const currentUserIsAdmin = profile?.role === "admin";

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
        currentUserIsAdmin,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserContextProvider;
