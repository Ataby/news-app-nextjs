import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Swiper stillerini içe aktar
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from 'swiper/modules';
import styles from "../styles/globals.scss"

const NewsSlider = ({ newsData }) => {
  return (
    <div>
      <Swiper
        style={{ width: '100%', height: 'auto' }} 
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        modules={[Navigation]}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        initialSlide={0}
        loop={true}
        onSlideChange={() => console.log("Slide changed")}
        onSwiper={(swiper) => console.log(swiper)}
        a11y={{
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
          firstSlideMessage: "This is the first slide",
          lastSlideMessage: "This is the last slide",
        }}
      >
        {newsData.map((article, index) => (
          <SwiperSlide key={index}>
            <div style={{maxWidth:"auto",maxHeight:"750px", textWrap:"wrap"}} >
             {article.image &&  <img src={article.image} alt={article.title} style={{maxHeight:"600px",marginLeft:"30px"}} />}
              <h2>{article.title}</h2>
              <p>{article.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewsSlider;
