import { useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

// import required modules
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules'

// 範例出處
// https://swiperjs.com/demos#thumbs-gallery
// https://codesandbox.io/s/k3cyyc
export default function Carousel() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Autoplay, FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img
            src="/images/product/638348807730300000 (1).jfif"
            className="mx-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/product/638348807730300000 (2).jfif"
            className="mx-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/product/638348807730300000 (3).jfif"
            className="mx-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/product/638348807730300000.jfif"
            className="mx-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/product/638394484323270000.jpg"
            className="mx-auto"
          />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="/images/product/638348807730300000 (1).jfif"
            className="mx-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/product/638348807730300000 (2).jfif"
            className="mx-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/product/638348807730300000 (3).jfif"
            className="mx-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/product/638348807730300000.jfif"
            className="mx-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/product/638394484323270000.jpg"
            className="mx-auto"
          />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
