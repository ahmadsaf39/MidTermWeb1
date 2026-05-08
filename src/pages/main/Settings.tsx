import {
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

import { toastService } from "@/services/toastService";

const Settings = () => {

  const changeTheme = (
    primary: string,
    background: string,
    sidebar: string,
    text: string
  ) => {

    document.documentElement.style.setProperty(
      "--primary-color",
      primary
    );

    document.documentElement.style.setProperty(
      "--background-color",
      background
    );

    document.documentElement.style.setProperty(
      "--sidebar-color",
      sidebar
    );

    document.documentElement.style.setProperty(
      "--text-color",
      text
    );

    toastService.success(
      "Theme updated"
    );
  };

  return (
    <div className="flex justify-center">

      <Card className="w-full max-w-lg shadow-xl rounded-3xl">

        <CardContent className="flex flex-col gap-6">

          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
            }}
          >
            Theme Settings
          </Typography>

          {/* Blue Theme */}
          <Button
            variant="contained"
            onClick={() =>
              changeTheme(
                "#2563eb",
                "#f3f4f6",
                "#ffffff",
                "#111827"
              )
            }
            sx={{
              backgroundColor: "#2563eb",
              paddingY: 1.5,
              borderRadius: 3,
            }}
          >
            Blue Theme
          </Button>

          {/* Dark Theme */}
          <Button
            variant="contained"
            onClick={() =>
              changeTheme(
                "#111827",
                "#1f2937",
                "#111827",
                "#ffffff"
              )
            }
            sx={{
              backgroundColor: "#111827",
              paddingY: 1.5,
              borderRadius: 3,
            }}
          >
            Dark Theme
          </Button>

          {/* Purple Theme */}
          <Button
            variant="contained"
            onClick={() =>
              changeTheme(
                "#7c3aed",
                "#f5f3ff",
                "#ffffff",
                "#111827"
              )
            }
            sx={{
              backgroundColor: "#7c3aed",
              paddingY: 1.5,
              borderRadius: 3,
            }}
          >
            Purple Theme
          </Button>

        </CardContent>

      </Card>

    </div>
  );
};

export default Settings;