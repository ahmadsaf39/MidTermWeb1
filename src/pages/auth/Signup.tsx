import { useState } from "react";

import {
  TextField,
  Button,
  Typography,
} from "@mui/material";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import { toastService } from "@/services/toastService";

const Signup = () => {

  const navigate = useNavigate();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] =
    useState("");

  const handleSignup = () => {

    if (!name || !email || !password) {

      toastService.warning(
        "Please fill all fields"
      );

      return;
    }

    toastService.success(
      "Account created successfully"
    );

    navigate("/login");
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
        Signup
      </Typography>

      <TextField
        label="Name"
        fullWidth
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

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
        onClick={handleSignup}
      >
        Signup
      </Button>

      <Typography
        sx={{
          textAlign: "center",
        }}
      >

        Already have an account?{" "}

        <Link
          to="/login"
          className="text-blue-500 font-semibold"
        >
          Login
        </Link>

      </Typography>

    </div>
  );
};

export default Signup;