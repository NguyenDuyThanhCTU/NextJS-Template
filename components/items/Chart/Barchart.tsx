import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

interface BarchartProps {
  Label: Array<string>;
  Value: Array<number>;
  Title: string;
}

const Barchart = ({ Label, Value, Title }: BarchartProps) => {
  const chartRef = useRef<any>(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const myChart = new Chart(ctx, {
      type: "bar",

      data: {
        labels: Label,

        datasets: [
          {
            label: `${Title}`,
            data: Value,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      myChart.destroy();
    };
  }, [Label, Value, Title]);

  return (
    <div>
      <canvas ref={chartRef} width="100" height="100"></canvas>
    </div>
  );
};

export default Barchart;
