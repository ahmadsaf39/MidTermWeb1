import {
  createContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type AuthContextType = {
  isAuthenticated: boolean;

  login: () => void;

  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(
  null
);

type Props = {
  children: ReactNode;
};

export default function AuthProvider({ children }: Props) {
  const [isAuthenticated, setIsAuthenticated] =
    useState(false);

  useEffect(() => {
    const auth =
      localStorage.getItem("isAuthenticated") === "true";

    setIsAuthenticated(auth);
  }, []);

  const login = () => {
    localStorage.setItem("isAuthenticated", "true");

    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("isAuthenticated");

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
}