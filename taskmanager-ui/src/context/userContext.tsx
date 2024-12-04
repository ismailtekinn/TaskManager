import React, { createContext, useContext, useEffect, useState } from "react";
import { User } from "../types/userType";


interface AuthContextProps {
  userData?: User | null;
  token?: string | null;
  handleLogin: (user: User) => void;
  handleLogout: () => void;
  handleToken: (token: string) => void;
  setUserData: React.Dispatch<React.SetStateAction<User | undefined>>;
}

const UserContext = createContext<AuthContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userData, setUserData] = useState<User | undefined>();
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(JSON.parse(storedToken));
    }
    setIsLoading(false);
  }, []);

  const handleLogin = (user: User) => {
    setUserData(user);
    console.log("user: ", user);
    localStorage.setItem("userData", JSON.stringify(user));
  };

  const handleToken = (token: string) => {
    setToken(token);
    localStorage.setItem("token", JSON.stringify(token));
  };

  const handleLogout = () => {
    setUserData(undefined);
    setToken(null);
    localStorage.removeItem("token");
  };
  if (isLoading) {
    return <div>Loading...</div>; 
  }
  return (
    <UserContext.Provider
      value={{
        userData,
        token,
        handleLogin,
        handleLogout,
        setUserData,
        handleToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
