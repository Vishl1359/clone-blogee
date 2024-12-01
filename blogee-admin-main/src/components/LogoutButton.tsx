import React from "react";
import { useRouter } from "next/navigation";
import { logout } from "../utils/api";
import { useAuth } from "@/context/AuthContext";

interface LogoutButtonProps {
  onLogout: () => void;
}
const LogoutButton: React.FC<LogoutButtonProps> = ({ onLogout }) => {
  const router = useRouter();
  const { logoutUser } = useAuth();
  const handleLogout = async () => {
    const token = localStorage.getItem("authToken");
    if (token) {
      await logout(token);
      localStorage.removeItem("authToken"); // Clear the token from localStorage
      onLogout();
      logoutUser();
      router.push("/login"); // Redirect to login page after logout
    } else {
      console.error("No token found. User might already be logged out.");
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
