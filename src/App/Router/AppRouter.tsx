import { Routes, Route, Navigate } from "react-router-dom";

import AuthLayout from "@/layouts/AuthLayout";
import MainLayout from "@/layouts/MainLayout";

import Login from "@/pages/auth/Login";
import Signup from "@/pages/auth/Signup";

import Dashboard from "@/pages/main/Dashboard";
import Profile from "@/pages/main/Profile";
import Settings from "@/pages/main/Settings";

import useAuth from "@/hooks/useAuth";

const AppRouter = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>

      {/* Auth Routes */}
      <Route
        element={
          !isAuthenticated ? (
            <AuthLayout />
          ) : (
            <Navigate to="/dashboard" />
          )
        }
      >
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>

      {/* Protected Routes */}
      <Route
        element={
          isAuthenticated ? (
            <MainLayout />
          ) : (
            <Navigate to="/login" />
          )
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Route>

      {/* Default Redirect */}
      <Route
        path="*"
        element={
          <Navigate
            to={isAuthenticated ? "/dashboard" : "/login"}
          />
        }
      />

    </Routes>
  );
};

export default AppRouter;