import "./CountriesColumnChart.css";
import React from "react";
import { Chart } from "react-google-charts";

const CountriesColumnChart = (props) => {
  return (
    <div className="countries-chart">
      <p>PERCENTAGE OF CURRENT VISITS FROM DIFFERENT CONTINENTS</p>
      <Chart
        chartType={props.type}
        width={props.width}
        height={props.height}
        data={props.data}
      />
    </div>
  );
};

export default CountriesColumnChart;
