import "./SalesLineChart.css";
import React from "react";
import { Chart } from "react-google-charts";

export const options = {
  curveType: "function",
  legend: { position: "bottom" },
};

const SalesLineChart = (props) => {
  return (
    <div className="sales-chart">
      <p>SALES VALUE</p>
      <Chart
        chartType={props.type}
        width={props.width}
        height={props.height}
        data={props.data}
        options={options}
      />
    </div>
  );
};

export default SalesLineChart;
