// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
const Banner = () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination]}
        spaceBetween={1}
        slidesPerView={1}
      >
        <SwiperSlide>
          <div>
            <div className="bg-[url('https://i.ibb.co.com/Q822wSV/pexels-fmaderebner-869258.webp')] min-h-[calc(100vh-112px)] bg-no-repeat bg-cover bg-center flex justify-center items-center relative">
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="text-center z-10">
                <h1
                  className="text-cyan-100 font-bold text-4xl md:text-8xl  mb-5"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  Discover the Peaks
                </h1>
                <p
                  className="text-slate-300 font-medium max-w-[650px] mx-auto md:px-0 px-5"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Explore towering mountain ranges and hidden trails. Witness
                  breathtaking vistas and the untouched beauty of nature. Join
                  us for unforgettable adventures where every step leads to
                  discovery and the majestic peaks await your journey.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="bg-[url('https://i.ibb.co.com/nDXNGm6/pexels-minan1398-1134188.webp')] min-h-[calc(100vh-112px)] bg-no-repeat bg-cover bg-center flex justify-center items-center relative">
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="text-center z-10">
                <h1
                  className="text-cyan-100 font-bold text-4xl md:text-8xl  mb-5"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  Unleash Your Spirit
                </h1>
                <p className="text-slate-300 font-medium max-w-[650px] mx-auto md:px-0 px-5">
                  Feel the thrill of adventure as you ascend breathtaking
                  mountains. Reconnect with nature, breathe the crisp alpine
                  air, and let the stunning landscapes inspire your soul. Every
                  path leads to freedom and a renewed spirit.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="bg-[url('https://i.ibb.co.com/qpcwtx0/pexels-pixabay-417173.webp')] min-h-[calc(100vh-112px)] bg-no-repeat bg-cover bg-center flex justify-center items-center relative">
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="text-center z-10">
                <h1 className="text-cyan-100 font-bold text-4xl md:text-8xl mb-5">
                  DisConquer the Heights
                </h1>
                <p className="text-slate-300 font-medium max-w-[650px] mx-auto md:px-0 px-5">
                  Challenge yourself to reach towering summits and experience
                  the joy of achievement. With expert guidance and awe-inspiring
                  routes, your mountain adventure awaits. Start creating
                  unforgettable memories while pushing your limits in nature's
                  grandeur.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
