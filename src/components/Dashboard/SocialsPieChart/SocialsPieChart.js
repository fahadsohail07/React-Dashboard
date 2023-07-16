import "./SocialsPieChart.css";
import React, { useState } from "react";
import { Chart } from "react-google-charts";

const SocialsPieChart = (props) => {
  const [selectedPeriod, setSelectedPeriod] = useState("Last week");

  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
  };

  const getDataForPeriod = () => {
    switch (selectedPeriod) {
      case "Last week":
        return props.weekData;
      case "Last month":
        return props.monthData;
      case "Last year":
        return props.yearData;
      default:
        return [];
    }
  };

  return (
    <div className="pie-chart">
      <p>HOW DID YOU HEAR ABOUT US?</p>
      <button
        onClick={() => handlePeriodChange("Last week")}
        className={selectedPeriod === "Last week" ? "selected" : "not-selected"}
      >
        Last week
      </button>
      <button
        onClick={() => handlePeriodChange("Last month")}
        className={
          selectedPeriod === "Last month" ? "selected" : "not-selected"
        }
      >
        Last month
      </button>
      <button
        onClick={() => handlePeriodChange("Last year")}
        className={selectedPeriod === "Last year" ? "selected" : "not-selected"}
      >
        Last year
      </button>
      <Chart
        chartType={props.type}
        data={getDataForPeriod()}
        options={{
          backgroundColor: "white",
          titleTextStyle: {
            color: "#A9A9A9",
            fontName: "Arial",
            fontSize: 16,
          },
          legend: {
            position: "bottom",
            textStyle: {
              color: "black",
              fontName: "Arial",
              fontSize: 14,
            },
          },
        }}
        width={props.width}
        height={props.height}
      />
    </div>
  );
};

export default SocialsPieChart;
