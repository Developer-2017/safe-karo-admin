import React from "react";
import { Bar } from "react-chartjs-2";

const barChart = () => {
  // Data for the chart
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Sales",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  // Options for the chart
  const options = {
    title: {
      display: true,
      text: "Sales by Month",
      fontSize: 20,
    },
  };

  return (
    <div>
      <h2>Monthly Sales and Expenses</h2>
      <Bar
        data={data}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
};

export default barChart;
