"use client";

import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const StockChart = () => {
    const chartRef = useRef(null);
    const data = [5, 15, 10, 20, 0, 20];

    useEffect(() => {
        if (chartRef.current != null) {
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
                    animation: false,
                },
            });

            return () => {
                chart.destroy();
            };
        }
    }, []);

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="h-[200px] w-[400px] lg:h-[280px] lg:w-[580px] xl:h-[360px] xl:w-[720px] 2xl:h-[480px] 2xl:w-[960px] flex justify-center items-center">
                <canvas ref={chartRef} />
            </div>
            <p className="text-green-400 font-black lg:text-6xl md:text-5xl text-4xl">
                +9,999.99%
            </p>
        </div>
    );
};

export default StockChart;
