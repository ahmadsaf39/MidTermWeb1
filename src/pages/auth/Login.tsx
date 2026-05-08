import { useState } from "react";

import {
  TextField,
  Button,
  Typography,
  CircularProgress,
} from "@mui/material";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import useAuth from "@/hooks/useAuth";

import { toastService } from "@/services/toastService";

import ConfirmDialog from "@/components/common/ConfirmDialog";

const Login = () => {

  const navigate = useNavigate();

  const { login } = useAuth();

  const [email, setEmail] = useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [openDialog, setOpenDialog] =
    useState(false);

  const handleLogin = () => {

    if (!email || !password) {

      toastService.warning(
        "Please fill all fields"
      );

      return;
    }

    setLoading(true);

    setTimeout(() => {

      if (
        email === "admin@gmail.com" &&
        password === "123456"
      ) {

        login();

        toastService.success(
          "Login successful"
        );

        navigate("/dashboard");

      } else {

        toastService.error(
          "Invalid email or password"
        );

      }

      setLoading(false);

    }, 3000);
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-3xl p-8 flex flex-col gap-6">

      {/* Icon */}
      <div className="flex justify-center">

        <div className="bg-white text-blue-600 p-4 rounded-full shadow-lg">

          <LockOutlinedIcon fontSize="large" />

        </div>

      </div>

      {/* Title */}
      <div className="text-center">

        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "white",
          }}
        >
          Welcome Back
        </Typography>

        <Typography
          sx={{
            color: "rgba(255,255,255,0.8)",
          }}
        >
          Login to continue
        </Typography>

      </div>

      {/* Email */}
      <TextField
        label="Email"
        type="email"
        fullWidth
        variant="outlined"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
        sx={{
          backgroundColor: "white",
          borderRadius: 3,
        }}
      />

      {/* Password */}
      <TextField
        label="Password"
        type="password"
        fullWidth
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
        sx={{
          backgroundColor: "white",
          borderRadius: 3,
        }}
      />

      {/* Login Button */}
      <Button
        variant="contained"
        size="large"
        onClick={() =>
          setOpenDialog(true)
        }
        disabled={loading}
        sx={{
          paddingY: 1.5,
          borderRadius: 3,
          fontWeight: "bold",
          backgroundColor: "#2563eb",
        }}
      >

        {loading ? (
          <CircularProgress
            size={24}
            sx={{
              color: "white",
            }}
          />
        ) : (
          "Login"
        )}

      </Button>

      {/* Signup Link */}
      <Typography
        sx={{
          textAlign: "center",
          color: "white",
        }}
      >

        Don’t have an account?{" "}

        <Link
          to="/signup"
          className="font-semibold text-yellow-300 hover:underline"
        >
          Signup
        </Link>

      </Typography>

      {/* Dialog */}
      <ConfirmDialog
        open={openDialog}
        title="Login Confirmation"
        message="Are you sure you want to log in?"
        onClose={() =>
          setOpenDialog(false)
        }
        onConfirm={() => {

          setOpenDialog(false);

          handleLogin();
        }}
      />

    </div>
  );
};

export default Login;