import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import AuthLayout from "@/layouts/AuthLayout";
import MainLayout from "@/layouts/MainLayout";

import Login from "@/pages/auth/Login";
import Signup from "@/pages/auth/Signup";

import Dashboard from "@/pages/main/Dashboard";
import Profile from "@/pages/main/Profile";
import Settings from "@/pages/main/Settings";

import ProtectedRoute from "@/components/common/ProtectedRoute";

import useAuth from "@/hooks/useAuth";

export default function AppRouter() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {!isAuthenticated ? (
        <Route path="/" element={<AuthLayout />}>
          <Route
            index
            element={<Navigate to="/login" />}
          />

          <Route path="login" element={<Login />} />

          <Route path="signup" element={<Signup />} />
        </Route>
      ) : (
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route
            index
            element={<Navigate to="/dashboard" />}
          />

          <Route
            path="dashboard"
            element={<Dashboard />}
          />

          <Route
            path="profile"
            element={<Profile />}
          />

          <Route
            path="settings"
            element={<Settings />}
          />
        </Route>
      )}

      <Route
        path="*"
        element={<Navigate to="/" />}
      />
    </Routes>
  );
}