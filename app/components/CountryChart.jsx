import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";


const CountryChart = ({data}) => {
  const [countryData, setCountryData] = useState([]); // Başlangıç verisi olarak initialCountryData

  const [chartData, setChartData] = useState(null); // Başlangıçta null olarak ayarladık
  useEffect(() => {
      if (data) {
        const countryList = data.map((item) => item.country);
        setCountryData(countryList);
        console.log(countryList);
      }
    }, [data]);

  useEffect(() => {
    const countryCount = {};
    countryData.forEach((item) => {
      countryCount[item] = (countryCount[item] || 0) + 1;
    });

    setChartData({
      labels: Object.keys(countryCount),
      datasets: [
        {
          label: "Number of News",
          data: Object.values(countryCount),
          backgroundColor: [
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 99, 132, 0.2)",
          ],
          borderColor: [
            "rgba(75, 192, 192, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 99, 132, 1)",
          ],
          borderWidth: 1,
        },
      ],
    });
  }, [countryData]);



  return (
    <div className="country-chart">
      {chartData ? (
        <Bar
          data={chartData}
          options={{
                indexAxis: "y",
                scales: {
                      x: {
                            beginAtZero: true,
                        },
                  },
            }}
        />
      ) : (
        <p>Loading chart...</p>
      )}

    </div>
  );
};

export default CountryChart;
