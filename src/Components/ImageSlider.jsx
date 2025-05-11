import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const slides = [
  {
    src: "/Images1/15.jpg",
    title: "Bhojpur Trip Bash 🎉",
  },
  {
    src: "Images1/28.jpg",
    title: "Dal Bati Programm 🌙",
  },
  {
    src: "/Images1/48.jpg",
    title: "Shiv Dharsan Selfi 📸",
  },
  {
    src: "/Images1/25.jpg",
    title: "After Ice Cream Vibes ✨",
  },
  {
    src: "/Images1/42.jpg",
    title: "Random Selfi Vibes ✨",
  },
  {
    src: "/Images1/61.jpg",
    title: "Main Mandir At Bhojpur ✨",
  },
  {
    src: "/Images1/65.jpg",
    title: "Shiv Garbgrah Poojan ✨",
  },
  {
    src: "/Images1/66.jpg",
    title: "Selfi Vibes ✨",
  },
  {
    src: "/Images1/69.jpg",
    title: "Parbati Mandir darsan ✨",
  },
  {
    src: "/Images1/78.jpg",
    title: "Selfi Vibes ✨",
  },
];

const ImageSlider = () => {
  return (
    <section className="bg-black py-10">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-center text-white text-4xl font-bold mb-6 drop-shadow-md"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Moments Captured in Time 📷
        </motion.h2>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="rounded-2xl overflow-hidden shadow-2xl"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative w-full h-[400px] sm:h-[500px]">
                <img
                  src={slide.src}
                  alt={slide.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end">
                  <div className="p-6">
                    <motion.h3
                      className="text-white text-2xl sm:text-3xl font-bold drop-shadow-lg"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7 }}
                    >
                      {slide.title}
                    </motion.h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ImageSlider;
