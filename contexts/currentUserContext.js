import axios from "axios";
import { signOut, useSession } from "next-auth/react";
import { createContext, useState, useEffect } from "react";

export const CurrentUserContext = createContext();

export const CurrentUserContextProvider = ({ children }) => {
  const { status } = useSession();
  const [currentUserProfile, setCurrentUserProfile] = useState(null);
  const [updateUser, setUpdateUser] = useState({});

  const currentUserIsAdmin = currentUserProfile?.role === "admin";

  useEffect(() => {
    if (status === "authenticated") {
      axios
        .get("/api/currentUserProfile")
        .then(({ data }) => {
          setCurrentUserProfile(data);
        })
        .catch(() => {
          // when we have a stale cookie, disconnect
          signOut();
        });
    }
  }, [status]);

  return (
    <CurrentUserContext.Provider
      value={{
        currentUserProfile,
        currentUserIsAdmin,
        updateUser,
        setUpdateUser,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserContextProvider;
