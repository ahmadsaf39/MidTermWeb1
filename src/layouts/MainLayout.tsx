import {
  Outlet,
  Link,
  useNavigate,
} from "react-router-dom";

import { Button } from "@mui/material";

import useAuth from "@/hooks/useAuth";

import { toastService } from "@/services/toastService";

const MainLayout = () => {

  const navigate = useNavigate();

  const { logout } = useAuth();

  const handleLogout = () => {

    logout();

    toastService.success(
      "Logged out successfully"
    );

    navigate("/login");
  };

  return (
    <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4">

        <h1 className="text-2xl font-bold mb-6">
          My App
        </h1>

        <nav className="flex flex-col gap-3">

          <Link
            to="/dashboard"
            className="hover:text-blue-500"
          >
            Dashboard
          </Link>

          <Link
            to="/profile"
            className="hover:text-blue-500"
          >
            Profile
          </Link>

          <Link
            to="/settings"
            className="hover:text-blue-500"
          >
            Settings
          </Link>

        </nav>

        <Button
          variant="contained"
          color="error"
          fullWidth
          sx={{
            marginTop: 4,
          }}
          onClick={handleLogout}
        >
          Logout
        </Button>

      </aside>

      {/* Main Content */}
      <div className="flex flex-col flex-1">

        {/* Header */}
        <header className="bg-white shadow-md p-4">
          <h2 className="text-xl font-semibold">
            Welcome
          </h2>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default MainLayout;