import React from "react";
import { Typography, Paper } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import LogoutButton from "../components/LogoutButton";
import "../style/ProfilePage.css";

const ProfilePage: React.FC = () => {
  const { user, isAuthenticated } = useAuth();

  // Redirect to login page if user is not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="profile-container">
      <div className="profile-paper">
        <Typography variant="h4" component="h1" gutterBottom>
          Profile
        </Typography>
        <Typography variant="h6">Welcome, {user?.username}!</Typography>
        <div className="logout-button">
          <LogoutButton />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
