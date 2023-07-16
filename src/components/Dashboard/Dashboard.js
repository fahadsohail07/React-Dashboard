import "./Dashboard.css";
import config from "../../init";
import SalesLineChart from "./SalesLineChart/SalesLineChart";
import SocialsPieChart from "./SocialsPieChart/SocialsPieChart";
import { Box, Container, Grid } from "@mui/material";
import SummaryWidget from "./SummaryWidget/SummaryWidget";
import CountriesColumnChart from "./CountriesColumnChart/CountriesColumnChart";
import TrafficWidget from "./TrafficWidget/TrafficWidget";
import Users from "./Users/Users";

const Dashboard = () => {
  const configData = config;
  const sortedConfig = configData.sort((a, b) => a.priority - b.priority);

  const renderedCharts = sortedConfig.map((widget) => {
    if (widget.type === "Summary-widget") {
      return (
        <Grid container sx={{ rowGap: "20px", columnGap: "10px" }}>
          <Grid item xs={widget.position}>
            <SummaryWidget
              amount={widget.dataSource[0].amount}
              summaryName={widget.dataSource[0].summaryName}
              color={widget.dataSource[0].color}
              height={widget.size.height}
            />
          </Grid>

          <Grid item xs={widget.position}>
            <SummaryWidget
              amount={widget.dataSource[1].amount}
              summaryName={widget.dataSource[1].summaryName}
              color={widget.dataSource[1].color}
              height={widget.size.height}
            />
          </Grid>

          <Grid item xs={widget.position}>
            <SummaryWidget
              amount={widget.dataSource[2].amount}
              summaryName={widget.dataSource[2].summaryName}
              color={widget.dataSource[2].color}
              height={widget.size.height}
            />
          </Grid>

          <Grid item xs={widget.position}>
            <SummaryWidget
              amount={widget.dataSource[3].amount}
              summaryName={widget.dataSource[3].summaryName}
              color={widget.dataSource[3].color}
              height={widget.size.height}
            />
          </Grid>
        </Grid>
      );
    } else if (widget.type === "LineChart") {
      return (
        <Grid
          item
          xs={widget.position}
          sx={{
            backgroundColor: "white",
            border: "1px solid  #D3D3D3",
            padding: "10px",
            borderRadius: "16px",
          }}
        >
          <SalesLineChart
            data={widget.dataSource}
            type={widget.type}
            width={widget.size.width}
            height={widget.size.height}
          />
        </Grid>
      );
    } else if (widget.type === "PieChart") {
      return (
        <Grid
          item
          xs={widget.position}
          sx={{
            backgroundColor: "white",
            border: "1px solid  #D3D3D3",
            padding: "10px",
            borderRadius: "16px",
          }}
        >
          <SocialsPieChart
            weekData={widget.dataSource1}
            monthData={widget.dataSource2}
            yearData={widget.dataSource3}
            type={widget.type}
            width={widget.size.width}
            height={widget.size.height}
          />
        </Grid>
      );
    } else if (widget.type === "Traffic-widget") {
      return (
        <Grid
          item
          xs={widget.position}
          sx={{
            backgroundColor: "white",
            border: "1px solid  #D3D3D3",
            paddingX: "5px",
            borderRadius: "16px",
            paddingY: "10px",
          }}
        >
          <TrafficWidget data={widget.dataSource} />
        </Grid>
      );
    } else if (widget.type === "ColumnChart") {
      return (
        <Grid
          item
          xs={widget.position}
          sx={{
            backgroundColor: "white",
            border: "1px solid  #D3D3D3",
            padding: "10px",
            borderRadius: "16px",
          }}
        >
          <CountriesColumnChart
            data={widget.dataSource}
            type={widget.type}
            width={widget.size.width}
            height={widget.size.height}
          />
        </Grid>
      );
    } else if (widget.type === "Users-widget") {
      return (
        <Grid
          item
          xs={widget.position}
          sx={{
            backgroundColor: "white",
            border: "1px solid  #D3D3D3",
            padding: "10px",
            borderRadius: "16px",
            marginBottom: "20px",
          }}
        >
          <Users data={widget.dataSource} />
        </Grid>
      );
    }
  });

  return (
    <Box>
      <Container maxWidth="xl">
        <Grid>
          <Grid item xs={12}>
            <p className="title">Hi, Welcome back</p>
          </Grid>

          <Grid container sx={{ rowGap: "20px", columnGap: "10px" }}>
            {renderedCharts}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;
