import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/use_auth";

const PublicRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  if (isLoggedIn) return <Navigate to={"/"} />;

  return children;
};

export default PublicRoute;
