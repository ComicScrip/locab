import axios from "axios";
import { signOut, useSession } from "next-auth/react";
import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const CurrentUserContext = createContext();

export const CurrentUserContextProvider = ({ children }) => {
  const { status } = useSession();
  const [currentUserProfile, setCurrentUserProfile] = useState(null);
  const currentUserIsAdmin = currentUserProfile?.role === "admin";

  const updateProfileOnAPI = (data) => {
    axios.patch("/api/currentUserProfile", data).then(({ data }) => {
      setCurrentUserProfile(data);
      toast.success("Votre profil a bien été enregistré");
    });
  };

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
        setCurrentUserProfile,
        currentUserIsAdmin,
        updateProfileOnAPI,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserContextProvider;
