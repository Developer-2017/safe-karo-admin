import React from 'react';
import { Line } from 'react-chartjs-2';

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
  }[];
}

const lineChart: React.FC = () => {
  // Sample data for the chart
  const chartData: ChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
      {
        label: 'Expenses',
        data: [28, 48, 40, 19, 86, 27, 90],
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
      },
    ],
  };

  return (
    <div>
      <h2>Monthly Sales and Expenses</h2>
      <Line
        data={chartData}
        options={{
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }}
      />
    </div>
  );
};

export default lineChart;
