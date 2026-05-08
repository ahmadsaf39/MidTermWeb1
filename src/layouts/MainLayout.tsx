import {
  Outlet,
  NavLink,
  useNavigate,
} from "react-router-dom";

import {
  Button,
  Avatar,
  Typography,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";

import PersonIcon from "@mui/icons-material/Person";

import SettingsIcon from "@mui/icons-material/Settings";

import LogoutIcon from "@mui/icons-material/Logout";

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

  const navLinkClass = ({
    isActive,
  }: {
    isActive: boolean;
  }) =>
    isActive
      ? "bg-blue-500 text-white px-4 py-3 rounded-lg font-semibold flex items-center gap-3"
      : "hover:bg-gray-200 px-4 py-3 rounded-lg flex items-center gap-3";

  return (
    <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-5 flex flex-col justify-between">

        <div>

          {/* Logo */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              marginBottom: 4,
            }}
          >
            My App
          </Typography>

          {/* Navigation */}
          <nav className="flex flex-col gap-3">

            <NavLink
              to="/dashboard"
              className={navLinkClass}
            >

              <DashboardIcon />

              Dashboard

            </NavLink>

            <NavLink
              to="/profile"
              className={navLinkClass}
            >

              <PersonIcon />

              Profile

            </NavLink>

            <NavLink
              to="/settings"
              className={navLinkClass}
            >

              <SettingsIcon />

              Settings

            </NavLink>

          </nav>

        </div>

        {/* User Section */}
        <div className="flex flex-col gap-4">

          <div className="flex items-center gap-3">

            <Avatar>
              A
            </Avatar>

            <div>

              <Typography
                sx={{
                  fontWeight: "bold",
                }}
              >
                Ahmad
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
              >
                admin@gmail.com
              </Typography>

            </div>

          </div>

          <Button
            variant="contained"
            color="error"
            fullWidth
            startIcon={<LogoutIcon />}
            onClick={handleLogout}
          >
            Logout
          </Button>

        </div>

      </aside>

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">

        {/* Header */}
        <header className="bg-white shadow-md p-4">

          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
            }}
          >
            Welcome Back
          </Typography>

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