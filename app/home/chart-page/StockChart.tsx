"use client";

import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const StockChart = () => {
    const chartRef = useRef(null);
    const data = [5, 15, 10, 20, 0, 20];

    useEffect(() => {
        const chart = new Chart(chartRef.current, {
            type: "line",
            data: {
                labels: data.map((_, index) =>
                    index % 2 == 0 ? "buy" : "sell"
                ),
                datasets: [
                    {
                        data: data,
                        borderColor: "rgb(239, 68, 68)",
                        fill: false,
                        tension: 0.4,
                        borderWidth: 6,
                    },
                ],
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        display: false,
                    },
                    y: {
                        display: false,
                    },
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        enabled: false,
                    },
                },
                animation: {
                    duration: 1500,
                    easing: "easeInOutQuart",
                },
            },
        });

        return () => {
            chart.destroy();
        };
    }, []);

    return <canvas ref={chartRef} />;
};

export default StockChart;
