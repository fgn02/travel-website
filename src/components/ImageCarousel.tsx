"use client";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function ImageCarousel({ images }: { images: string[] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="h-[500px] w-full max-w-4xl"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center h-full">
              <Image
                src={image}
                alt={`Tour Image ${index + 1}`}
                width={800}
                height={450}
                className="rounded-md object-cover"
                unoptimized
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center mb-10 mt-4">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
          className="h-24 max-w-4xl"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center h-full">
                <Image
                  src={image}
                  alt={`Thumbnail Image ${index + 1}`}
                  width={150}
                  height={100}
                  className="rounded-md object-cover"
                  unoptimized
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
