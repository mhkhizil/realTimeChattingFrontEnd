import React from "react";
import NavBar from "@/components/NavBar";
import { Box } from "@mui/material"; // For consistent theme styling
import Auth from "@/components/Auth/Auth";

interface LayoutProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ darkMode, toggleDarkMode, children }) => {
  return (
    <>
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Box component="main" sx={{ minHeight: "100vh", bgcolor: "background.default", color: "text.primary" }}>
        
        {children}
      </Box>
    </>
  );
};

export default Layout;
