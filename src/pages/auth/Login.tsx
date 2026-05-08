import { useState } from "react";

import {
  TextField,
  Button,
  Typography,
  CircularProgress,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import useAuth from "@/hooks/useAuth";

import { toastService } from "@/services/toastService";

const Login = () => {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [email, setEmail] = useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
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
    <div className="flex flex-col gap-5">

      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Login
      </Typography>

      <TextField
        label="Email"
        type="email"
        fullWidth
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <TextField
        label="Password"
        type="password"
        fullWidth
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <Button
        variant="contained"
        size="large"
        onClick={handleLogin}
        disabled={loading}
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

    </div>
  );
};

export default Login;