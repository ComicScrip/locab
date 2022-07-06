import axios from "axios";
import { signOut, useSession } from "next-auth/react";
import { createContext, useCallback, useState, useEffect } from "react";

export const CurrentUserContext = createContext();

export const CurrentUserContextProvider = ({ children }) => {
  const { status } = useSession();
  const [currentUserProfile, setCurrentUserProfile] = useState(null);
  const [updateUser, setUpdateUser] = useState({});

  const currentUserIsAdmin = currentUserProfile?.role === "admin";

  const updateProfileOnAPI = useCallback((data, onSuccess) => {
    axios.patch("/api/currentUserProfile", data).then(({ data }) => {
      setCurrentUserProfile(data);
      onSuccess(data);
    });
  }, []);

  const getProfile = useCallback(() => {
    axios
      .get("/api/currentUserProfile")
      .then(({ data }) => {
        setCurrentUserProfile(data);
      })
      .catch(() => {
        // when we have a stale cookie, disconnect
        signOut();
      });
  }, []);

  useEffect(() => {
    if (status === "authenticated") {
      getProfile();
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
  }, [status, getProfile]);

  return (
    <CurrentUserContext.Provider
      value={{
        currentUserProfile,
        setCurrentUserProfile,
        updateProfileOnAPI,
        currentUserIsAdmin,
        getProfile,
        updateUser,
        setUpdateUser,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserContextProvider;
