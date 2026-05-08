import {
  Card,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";

const Dashboard = () => {
  return (
    <div className="space-y-6">

      {/* Page Title */}
      <div>

        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
          }}
        >
          Dashboard
        </Typography>

        <Typography color="text.secondary">
          Welcome back to your dashboard
        </Typography>

      </div>

      {/* Statistics Cards */}
      <Grid container spacing={3}>

        <Grid
          item
          xs={12}
          md={4}
        >

          <Card className="shadow-md">

            <CardContent>

              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                }}
              >
                Users
              </Typography>

              <Typography
                variant="h4"
                color="primary"
              >
                120
              </Typography>

            </CardContent>

          </Card>

        </Grid>

        <Grid
          item
          xs={12}
          md={4}
        >

          <Card className="shadow-md">

            <CardContent>

              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                }}
              >
                Sales
              </Typography>

              <Typography
                variant="h4"
                color="success.main"
              >
                $3,500
              </Typography>

            </CardContent>

          </Card>

        </Grid>

        <Grid
          item
          xs={12}
          md={4}
        >

          <Card className="shadow-md">

            <CardContent>

              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                }}
              >
                Orders
              </Typography>

              <Typography
                variant="h4"
                color="warning.main"
              >
                89
              </Typography>

            </CardContent>

          </Card>

        </Grid>

      </Grid>

      {/* Recent Activity */}
      <Card className="shadow-md">

        <CardContent>

          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              marginBottom: 2,
            }}
          >
            Recent Activity
          </Typography>

          <div className="flex flex-col gap-3">

            <div className="p-3 bg-gray-100 rounded-lg">
              New user registered
            </div>

            <div className="p-3 bg-gray-100 rounded-lg">
              Order #1024 completed
            </div>

            <div className="p-3 bg-gray-100 rounded-lg">
              Payment received
            </div>

          </div>

        </CardContent>

      </Card>

    </div>
  );
};

export default Dashboard;