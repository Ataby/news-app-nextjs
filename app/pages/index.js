import { useState, useEffect } from "react";
import News from "../data/news.json"
import NewsSlider from "../components/Swiper"
import CardSlider from "../components/CardSlider"
import Navbar from "../components/Navbar"

export default function Home() {
  const [source, setSource] = useState("Atabay");
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState("general");

  useEffect(() => {
    const getNews = async () => {
      setLoading(true)
      try {
      //   const res = await fetch(
      //     `https://api.mediastack.com/v1/news?access_key=2830121c27a39eb6497d9a20ee46ccdf&offset=0&limit=20`
      //   );

      //   if (!res.ok) {
      //     throw new Error("Failed to fetch news");
      //   }

      //   const data = await res.json();
      //   console.log(data.data,"data");
      //   setNews(data.data);
        setNews(News);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
        console.log(News);
      }
    };

    getNews();
    const interval = setInterval(() => {
      getNews();
    }, 900000); // Her 15 dakika yeni haberleri kontrol et

    return () => clearInterval(interval);
  }, [source]);

  return (
    <div className="indexPage">
      

      {/* {loading ? <p>Loading...</p> : error ? <p>{error}</p> : (
        <ul>
          {news.map((article, index) => (
            <li key={index}>{article.title}</li>
          ))}
        </ul>
      )}
      <select onChange={(e) => setSource(e.target.value)}>
        <option value="bbc">BBC News</option>
        <option value="cnn">CNN</option>
      </select>  
      <NewsSlider newsData={News.data} />*/}
      <h1>News from {source}</h1>
      <Navbar />
      <CardSlider newsData={News.data} />
    </div>
  );
}
