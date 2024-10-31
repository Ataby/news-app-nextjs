import { useState, useEffect, useContext, useRef } from "react";
import { MyContext } from "../context/FilterContext";
import News from "../data/news.json";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import CardSlidersss from "../components/CardSlidersss";
import { fetcher } from "../services/axios";
import useSWR from "swr";
import CountryChart from "../components/CountryChart";
import DateChart from "../components/DateChart";
import MainNews from "../components/MainNews";

export default function Home() {
  const {
    fromWhere,
    category,
    language,
  } = useContext(MyContext);
  const [news, setNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const isFirstRender = useRef(true);

  const { data, error, isLoading } = useSWR("news-api", fetcher, {
    onSuccess: (data) => {
      if(isFirstRender.current){
        isFirstRender.current = false;
        return;
      }
      window.alert("Yeni haber var!");
    },
    onError: (error) => {
      console.error("An error occurred while fetching data:", error);
    },
    onLoading: (isLoading) => {
      return <div>loading...</div>;
    },
  });

  useEffect(() => {
    if (data?.data) setNews(data.data);
  }, [data?.data]);

  useEffect(() => {
    let filtered = news;

    if (language) {
      filtered = filtered?.filter((item) => item.language === language);
    }

    if (category) {
      filtered = filtered?.filter((item) => item.category === category);
    }

    if (fromWhere) {
      filtered = filtered?.filter((item) => item.country === fromWhere);
    }
    setFilteredNews(filtered);
  }, [language, category, fromWhere]);

  useEffect(() => {
    setFilteredNews(news);
  }, [news]);

  return (
    <div className="outerIndex">
      <Header />
      <Navbar />

      <div className="indexPage">
        <div className="main-news">
          {filteredNews && filteredNews.length > 0 ? (
            <MainNews data={filteredNews[0]} />
          ) : (
            <p>Bulunamadı.</p>
          )}
          <div className="charts">
            <DateChart data={filteredNews} />
            <CountryChart data={filteredNews} />
          </div>
        </div>

        {/* <CardSlidersss newsData={news} /> */}
        <CardSlidersss newsData={filteredNews.slice(1)} />
      </div>
    </div>
  );
}