import { useState } from "react";

import {
  Card,
  CardContent,
  Typography,
  Switch,
  FormControlLabel,
} from "@mui/material";

import { toastService } from "@/services/toastService";

const Settings = () => {

  const [darkMode, setDarkMode] =
    useState(false);

  const handleToggle = () => {

    setDarkMode(!darkMode);

    toastService.success(
      `Dark mode ${
        !darkMode ? "enabled" : "disabled"
      }`
    );
  };

  return (
    <div className="flex justify-center">

      <Card className="w-full max-w-md">

        <CardContent className="flex flex-col gap-5">

          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
            }}
          >
            Settings
          </Typography>

          <FormControlLabel
            control={
              <Switch
                checked={darkMode}
                onChange={handleToggle}
              />
            }
            label="Dark Mode"
          />

        </CardContent>

      </Card>

    </div>
  );
};

export default Settings;