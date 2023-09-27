import React from "react";

import { Outlet, Navigate } from "react-router-dom";
const ProtectedRoutes = ({ username }) => {
  if (username) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <Outlet />
    </>
  );
};

export default ProtectedRoutes;
