import {
  Outlet,
  NavLink,
  useNavigate,
} from "react-router-dom";

import {
  Avatar,
  Typography,
  Button,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";

import PersonIcon from "@mui/icons-material/Person";

import SettingsIcon from "@mui/icons-material/Settings";

import LogoutIcon from "@mui/icons-material/Logout";

import MenuIcon from "@mui/icons-material/Menu";

import NotificationsIcon from "@mui/icons-material/Notifications";

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
      ? "bg-blue-500 text-white flex items-center gap-3 px-4 py-3 rounded-xl font-semibold shadow-md transition-all"
      : "flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-100 transition-all";

  return (
    <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <aside className="w-72 bg-white shadow-2xl flex flex-col justify-between p-5">

        <div>

          {/* Logo */}
          <div className="flex items-center gap-3 mb-10">

            <div className="bg-blue-500 text-white p-3 rounded-xl">

              <MenuIcon />

            </div>

            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
              }}
            >
              Admin Panel
            </Typography>

          </div>

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

        {/* Bottom Section */}
        <div className="border-t pt-5">

          {/* User */}
          <div className="flex items-center gap-3 mb-5">

            <Avatar
              sx={{
                bgcolor: "#2563eb",
              }}
            >
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

          {/* Logout */}
          <Button
            variant="contained"
            color="error"
            fullWidth
            startIcon={<LogoutIcon />}
            onClick={handleLogout}
            sx={{
              borderRadius: 3,
              paddingY: 1.2,
              fontWeight: "bold",
            }}
          >
            Logout
          </Button>

        </div>

      </aside>

      {/* Main Section */}
      <div className="flex flex-col flex-1 overflow-hidden">

        {/* Navbar */}
        <header className="bg-white shadow-md px-8 py-4 flex items-center justify-between">

          <div>

            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
              }}
            >
              Welcome Back 👋
            </Typography>

            <Typography color="text.secondary">
              Manage your dashboard easily
            </Typography>

          </div>

          {/* Right Side */}
          <div className="flex items-center gap-5">

            <div className="bg-gray-100 p-3 rounded-full cursor-pointer hover:bg-gray-200 transition-all">

              <NotificationsIcon />

            </div>

            <Avatar
              sx={{
                bgcolor: "#2563eb",
                width: 45,
                height: 45,
              }}
            >
              A
            </Avatar>

          </div>

        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-8">

          <Outlet />

        </main>

      </div>

    </div>
  );
};

export default MainLayout;