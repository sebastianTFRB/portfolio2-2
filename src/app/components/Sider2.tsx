import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from 'react-i18next';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { Orange2Images, Purple2Images } from "./../constants";

const Slider2 = () => {
  const {t} = useTranslation();
  return (
    <div className="h-screen flex flex-col md:flex-row gap-5 items-center justify-center ">
      <div className="flex flex-col gap-4 ">
        <h1 className=" text-[70px] font-semibold">
          <span className="text-purple-500">{t ('tiempo_solo')}</span>
          <p className="text-[16px] max-w-[400px] text-gray-200 md:text-gray-400">
          {t ('Dtiempo_solo')}
          </p>
        </h1>
      </div>
      <div className="w-[40%] sm:w-[80%] md:w-[60%] lg:w-[60%] xl:w-[60%]">
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            700: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
        >
          <SwiperSlide className="mb-14">
            <div className="grid grid-cols-2 gap-4 px-10">
              {Purple2Images.map((image) => (
                <div className="relative group" key={image.src}>
                  <img
                    src={image.src}
                    alt="purple image"
                    className="rounded-md h-[240px] w-[240px] object-cover"
                  />
                  
                  
                </div>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide className="mb-14">
            <div className="grid grid-cols-2 gap-4 px-10">
              {Orange2Images.map((image) => (
                <div className="relative group" key={image.src}>
                  <img
                    src={image.src}
                    alt="purple image"
                    className="rounded-md h-[240px] w-[240px] object-cover"
                  />
                 
                </div>
              ))}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider2;