import React from "react";
import "./Dashboard.css";
import { Bar, Line, Pie } from "react-chartjs-2";
import CountUp from "react-countup";


import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement, // Ensure PointElement is registered
    ArcElement,
    Title,
    Tooltip,
    Legend
);


const Dashboard = ({ data }) => {
    if (!data || data.length === 0) {
        return <p>Loading or no data available...</p>;
    }

    // Sample calculations for charts
    const categories = [
        "tuition",
        "housing",
        "food",
        "transportation",
        "books_supplies",
        "entertainment",
        "personal_care",
        "technology",
        "health_wellness",
        "miscellaneous",
    ];

    const barChartData = {
        labels: categories,
        datasets: [
            {
                label: "Total Expenses by Category",
                data: categories.map((category) =>
                    data.reduce((sum, item) => sum + (item[category] || 0), 0)
                ),
                backgroundColor: "rgba(75, 192, 192, 0.6)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
            },
        ],
    };

    const pieChartData = {
        labels: categories,
        datasets: [
            {
                label: "Expense Distribution",
                data: categories.map((category) =>
                    data.reduce((sum, item) => sum + (item[category] || 0), 0)
                ),
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#4BC0C0",
                    "#9966FF",
                    "#FF9F40",
                    "#E7E9ED",
                    "#50C878",
                    "#FFD700",
                    "#FA8072",
                ],
                hoverOffset: 4,
            },
        ],
    };

    const lineChartData = {
        labels: data.map((item) => item.major),
        datasets: [
            {
                label: "Monthly Income",
                data: data.map((item) => item.monthly_income || 0),
                borderColor: "#36A2EB",
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                tension: 0.4,
            },
        ],
    };

    const totalExpenses = data.reduce(
        (sum, item) =>
            sum +
            categories.reduce((catSum, category) => catSum + (item[category] || 0), 0),
        0
    );

    const averageIncome =
        data.reduce((sum, item) => sum + (item.monthly_income || 0), 0) /
        data.length;

    return (
        <div className="dashboard-container">
            <h1>Student Expense Dashboard</h1>
            <div className="card-container">
                <div className="card">
                    <h2>Total Expenses</h2>
                    <p>
                     <CountUp
                            start={0}
                            end={totalExpenses}
                            duration={2.5}
                            separator=","
                        />
                        </p>
                </div>
                <div className="card">
                    <h2>Average Monthly Income</h2>
                    <p>$ 
                     <CountUp
                            start={0}
                            end={totalExpenses}
                            duration={2.5}
                            separator=","
                        />
                        </p>
                </div>
                <div className="card">
                    <h2>Total Students</h2>
                    <p><CountUp
                            start={0}
                            end={data.length}
                            duration={2.5}
                            separator=","
                        /></p>
                </div>
            </div>
            <div className="charts-container">
                <div className="chart">
                    <h3>Expenses by Category (Bar Graph)</h3>
                    <Bar data={barChartData} />
                </div>
                <div className="chart">
                    <h3>Expense Distribution (Pie Chart)</h3>
                    <Pie data={pieChartData} />
                </div>
                <div className="chart">
                    <h3>Monthly Income by Major (Line Graph)</h3>
                    <Line data={lineChartData} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
