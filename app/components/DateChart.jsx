import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Gerekli bileşenleri kaydet
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DateChart = ({ data }) => {
  const [hours, setHours] = useState([]);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (data) {
      const extractedHours = data.map((item) => item.published_at);
      setHours(extractedHours);
    }
  }, [data]);

  useEffect(() => {
    if (hours.length > 0) {
      const countByHourMinute = {};

      hours.forEach((dateString) => {
        const date = new Date(dateString);
        const hourMinute = date.toISOString().substring(11, 16); // 'HH:mm' formatında al

        if (countByHourMinute[hourMinute]) {
          countByHourMinute[hourMinute]++;
        } else {
          countByHourMinute[hourMinute] = 1;
        }
      });

      const labels = Object.keys(countByHourMinute);
      const dataValues = Object.values(countByHourMinute);

      setChartData({
        labels: labels,
        datasets: [
          {
            label: "Hours:Minutes",
            data: dataValues,
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      });
    }
  }, [hours]);
  const options = {
    indexAxis: 'y', // Grafiği yatay yapmak için
    scales: {
      x: {
        title: {
          display: true,
          text: 'Sayım',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Saat ve Dakika',
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="date-chart">
      {chartData ? (
        <Bar
          data={chartData}
          options={options}
        />
      ) : (
        <p>Loading chart...</p>
      )}
    </div>
  );
};

export default DateChart;
