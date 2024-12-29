import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";

const Category = () => {
  const ww = window.innerWidth;

  return (
    <>
      <SectionTitle
        title="order online"
        subTitle="From 11:00am to 10:00pm"
        borderColor="border-gray-300"
      />

      <Swiper
        slidesPerView={ww <= 500 ? 1 : ww <= 750 ? 2 : ww <= 1000 ? 3 : 4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper mt-14"
      >
        <SwiperSlide>
          <img className="w-full" src={img1} alt="" />
          <p className="uppercase text-xl font-semibold text-white text-center -mt-16 mb-9">
            salad
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={img2} alt="" />
          <p className="uppercase text-xl font-semibold text-white text-center -mt-16 mb-9">
            pizza
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={img3} alt="" />
          <p className="uppercase text-xl font-semibold text-white text-center -mt-16 mb-9">
            soup
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={img4} alt="" />
          <p className="uppercase text-xl font-semibold text-white text-center -mt-16 mb-9">
            desert
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={img5} alt="" />
          <p className="uppercase text-xl font-semibold text-white text-center -mt-16 mb-9">
            salad
          </p>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Category;
