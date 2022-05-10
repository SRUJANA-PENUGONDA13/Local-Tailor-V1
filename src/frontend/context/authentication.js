import { useContext, createContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticationStatus] = useState(false);
  useEffect(() => {
    setAuthenticationStatus(!!localStorage.getItem("token"));
  });
  return (
    <AuthContext.Provider value={{ isAuthenticated, setAuthenticationStatus }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
