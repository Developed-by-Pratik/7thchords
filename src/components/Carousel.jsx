import React, { useEffect, useState } from "react";

const Carousel = () => {
  // Import all images from folder
  const allImages = Object.values(
    import.meta.glob("/src/assets/images/*.{jpg,jpeg,png,webp}", {
      eager: true,
    })
  ).map((img) => img.default);

  const [images, setImages] = useState([]);

  // Shuffle function
  const shuffleArray = (array) => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  useEffect(() => {
    // Shuffle images on every reload
    setImages(shuffleArray(allImages));

    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="relative w-full min-w-[375px] h-auto py-16 bg-gray-50">
      <style>{`
        swiper-container {
          width: 100%;
          height: 100%;
        }
        swiper-slide {
          background-position: center;
          background-size: cover;
          width: 80%;
          aspect-ratio: 16 / 9;
          max-width: 700px;
          border-radius: 16px;
          overflow: hidden;
          opacity: 0.4;
          filter: blur(4px);
          transform: scale(0.85);
          transition: all 0.6s ease;
        }
        swiper-slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        swiper-slide.swiper-slide-active {
          opacity: 1;
          filter: blur(0);
          transform: scale(1);
          z-index: 10;
        }
        .swiper-button-next,
        .swiper-button-prev {
          color: #fff;
          background-color: rgba(0, 0, 0, 0.4);
          border-radius: 9999px;
          width: 20px;
          height: 20px;
        }
        @media (min-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            width: 44px;
            height: 44px;
          }
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 1.25rem;
          font-weight: bold;
        }
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5);
        }
        .swiper-pagination-bullet-active {
          background: #fff;
        }
      `}</style>

      <swiper-container
        style={{
          "--swiper-navigation-color": "rgb(242,240,239,0.5)",
          "--swiper-navigation-size": "35px",
        }}
        class="swiper"
        effect="coverflow"
        grab-cursor="true"
        centered-slides="true"
        slides-per-view="auto"
        loop="true"
        autoplay-delay="2500"
        autoplay-disable-on-interaction="false"
        coverflow-effect-rotate="0"
        coverflow-effect-stretch="-100"
        coverflow-effect-depth="150"
        coverflow-effect-scale="0.9"
        coverflow-effect-modifier="1"
        coverflow-effect-slide-shadows="false"
        navigation="true"
        pagination="true"
      >
        {images.map((src, index) => (
          <swiper-slide key={index} class="shadow-lg">
            <img src={src} alt={`Slide ${index + 1}`} />
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
};

export default Carousel;