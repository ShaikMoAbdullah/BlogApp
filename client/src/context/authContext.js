import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const login = async (inputs) => {
    const res = await axios.post(
      "https://blogapp-r2c7.onrender.com/api/auth/login",
      inputs
    );
    setCurrentUser(res.data);
    document.cookie = `accessToken=${res.data.accessToken}; path=/; max-age=${
      7 * 24 * 60 * 60
    }`;
  };

  const logout = async (inputs) => {
    await axios.post("https://blogapp-r2c7.onrender.com/api/auth/logout");
    setCurrentUser(null);
    document.cookie = "accessToken=; path=/; max-age=0";
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
