import {
  Card,
  CardContent,
  Typography,
  Avatar,
} from "@mui/material";

const Profile = () => {
  return (
    <div className="flex justify-center">

      <Card className="w-full max-w-md">

        <CardContent className="flex flex-col items-center gap-4">

          <Avatar
            sx={{
              width: 80,
              height: 80,
            }}
          >
            A
          </Avatar>

          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
            }}
          >
            Ahmad
          </Typography>

          <Typography color="text.secondary">
            admin@gmail.com
          </Typography>

        </CardContent>

      </Card>

    </div>
  );
};

export default Profile;