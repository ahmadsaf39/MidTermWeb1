import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

      <Card>
        <CardContent>

          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
            }}
          >
            Users
          </Typography>

          <Typography variant="h4">
            120
          </Typography>

        </CardContent>
      </Card>

      <Card>
        <CardContent>

          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
            }}
          >
            Sales
          </Typography>

          <Typography variant="h4">
            $3,500
          </Typography>

        </CardContent>
      </Card>

      <Card>
        <CardContent>

          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
            }}
          >
            Orders
          </Typography>

          <Typography variant="h4">
            89
          </Typography>

        </CardContent>
      </Card>

    </div>
  );
};

export default Dashboard;