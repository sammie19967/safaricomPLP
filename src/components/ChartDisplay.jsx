import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register the necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartDisplay = ({ data }) => {
  // Example of processing data for the bar chart
  const categories = ["Tuition", "Housing", "Food", "Transportation"];
  const expenseData = categories.map((category) =>
    data.reduce((total, row) => total + (row[category.toLowerCase()] || 0), 0)
  );

  const chartData = {
    labels: categories,
    datasets: [
      {
        label: "Total Expenses by Category",
        data: expenseData,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="chart-display">
      <h2>Student Expenses by Category</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default ChartDisplay;
