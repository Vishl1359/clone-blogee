"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface AuthContextType {
  isLoggedIn: boolean;
  isopenSidebar:boolean;
  togglesidebar:()=>void;
  loginUser: (token: string) => void;
  logoutUser: () => void;
  
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isopenSidebar,setSidebar]=useState(false)

  


  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token);
    console.log(token) // Set isLoggedIn based on the presence of the token
  }, []);

  const togglesidebar =()=>{
    setSidebar((prev)=>!prev)
  }

 

  const loginUser = (token: string) => {
    localStorage.setItem("authToken", token);
    setIsLoggedIn(true);
  };

  const logoutUser = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, loginUser, logoutUser,isopenSidebar,togglesidebar }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
