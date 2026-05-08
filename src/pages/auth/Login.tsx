import { useState } from "react";

import {
  TextField,
  Button,
  Typography,
} from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] =
    useState("");

  return (
    <div className="flex flex-col gap-5">

      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
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
      >
        Login
      </Button>

    </div>
  );
};

export default Login;