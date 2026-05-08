import { useState } from "react";
import type { ReactNode } from "react";

import { AuthContext } from "./auth-context";

type AuthProviderProps = {
  children: ReactNode;
};

const AuthProvider = ({
  children,
}: AuthProviderProps) => {

  const [isAuthenticated, setIsAuthenticated] =
    useState<boolean>(
      !!localStorage.getItem("token")
    );

  const login = () => {
    localStorage.setItem("token", "loggedIn");

    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("token");

    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;