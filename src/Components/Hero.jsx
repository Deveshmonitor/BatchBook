import { motion } from "framer-motion";

const Hero = () => {
  return (
   <section className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-red-400 text-white min-h-screen flex items-center justify-center overflow-hidden">
  {/* Background Image */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: "url('/P/2.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: 0.3, // 👈 Light opacity
    }}
  ></div>

  {/* Optional Pattern Overlay */}
  <div className="absolute inset-0 opacity-10 bg-[url('/images/bg-pattern.svg')] bg-repeat z-0"></div>

  {/* Foreground Content */}
  <div className="container mx-auto mt-4 px-6 z-10 text-center">
    <motion.h1
      className="text-4xl sm:text-6xl font-extrabold leading-tight drop-shadow-lg"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Welcome to Our <span className="text-yellow-300">Batch 2025 Memories</span>
    </motion.h1>

    <motion.p
      className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto text-white/90"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
    >
      A place where every laughter, celebration, and friendship is saved forever.
    </motion.p>

    <motion.div
      className="mt-8 flex justify-center gap-4"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.6 }}
    >
      <a
        href="#gallery"
        className="px-6 py-3 rounded-full bg-yellow-300 text-purple-700 font-semibold shadow-lg hover:scale-105 transition-transform"
      >
        View Memories
      </a>
      <a
        href="#contact"
        className="px-6 py-3 rounded-full border border-white text-white font-semibold hover:bg-white hover:text-pink-600 transition-all"
      >
        Contact Us
      </a>
    </motion.div>
  </div>
</section>

  );
};

export default Hero;
