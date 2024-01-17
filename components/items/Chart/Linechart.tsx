import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

interface LineChartProps {
  Label: Array<string>;
  Value: Array<number>;
  Title: string;
}

const LineChart = ({ Label, Value, Title }: LineChartProps) => {
  const chartRef = useRef<any>(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: Label,
        datasets: [
          {
            label: Title,
            data: Value,
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 2,
            fill: false,
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: "linear", // Loại trục x
            position: "bottom",
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Xóa biểu đồ khi component bị unmount
    return () => {
      myChart.destroy();
    };
  }, [Label, Value, Title]);

  return (
    <div>
      <canvas ref={chartRef} width="400" height="400"></canvas>
    </div>
  );
};

export default LineChart;
