import { Bar } from 'react-chartjs-2';

const NewsChart = ({ articles }) => {
  const hours = articles.map(article => new Date(article.publishedAt).getHours());
  const data = {
    labels: [...new Set(hours)],
    datasets: [{
      label: 'News published by hour',
      data: hours.reduce((acc, hour) => {
        acc[hour] = (acc[hour] || 0) + 1;
        return acc;
      }, {}),
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    }],
  };

  return <Bar data={data} />;
};

export default NewsChart;
