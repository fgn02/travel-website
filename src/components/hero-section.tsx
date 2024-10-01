"use client";
import Image from "next/image";
import SearchForm from "@/components/search-form";
import { Container } from "@/components/container";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const images = [
  { src: "/hero.jpg", alt: "Mountain View" },
  { src: "/phuket.jpg", alt: "Phuket Beach" },
  { src: "/rome.jpg", alt: "Rome City" },
];

export function HeroSection() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Container className="p-10">
      <div className="py-10 md:py-16 relative text-center">
        <p className="text-pink-500 font-semibold ml-1 text-lg">
          Book With Us!
        </p>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-4 text-balance font-heading">
          Discover Your Next Adventure
        </h1>
        <p className="text-lg text-slate-600 mb-4">
          Discover amazing places at exclusive deals. Eat, Shop, Visit
          interesting places around the world.
        </p>
      </div>

      <div className="flex justify-center mb-5">
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
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={450}
                  className="rounded-md object-cover"
                  unoptimized
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex justify-center mb-10">
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
                  src={image.src}
                  alt={image.alt}
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

      <div className="p-4 md:p-10 bg-white rounded-md mx-auto max-w-6xl mt-5">
        <SearchForm />
      </div>
    </Container>
  );
}
