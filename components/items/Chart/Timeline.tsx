import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "chartjs-adapter-date-fns";

interface TimelineChartProps {
  timeLabels: Array<string>;
  data: Array<number>;
}
const TimelineChart = ({ timeLabels, data }: TimelineChartProps) => {
  const chartRef = useRef<any>(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: timeLabels,
        datasets: [
          {
            label: "Timeline Chart",
            data: data,
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 2,
            fill: false,
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: "time",
            time: {
              unit: "day",
              displayFormats: {
                day: "MMM d", // Use 'd' instead of 'D' for days of the month
              },
            },
            title: {
              display: true,
              text: "Timeline",
            },
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      myChart.destroy();
    };
  }, [timeLabels, data]);

  return (
    <div>
      <canvas ref={chartRef} width="400" height="400"></canvas>
    </div>
  );
};

export default TimelineChart;
