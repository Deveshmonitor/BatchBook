import { motion } from "framer-motion";

const videos = [
  {
    title: "Farewell Bash 2024",
    url: "https://www.youtube.com/embed/Oz0v9BPzxwE?si=fbkVcXThfQcnlxob",
  },
  {
    title: "Dance Reels",
    url: "https://www.youtube.com/embed/Gos9Y2He-T0?si=r8GA6LRsq9Jm89Ia",
  },
  {
    title: "Batch Picnic Moments",
    url: "https://www.youtube.com/embed/lZQIf3wIYRA?si=0UROK9FG_5yQ7Xhb",
  },
  {
    title: "College Blog",
    url: "https://www.youtube.com/embed/bi2jCZILq4A?si=qLurXbMtoN5aLuaD",
  },
];

const videoAnimation = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.2 },
  }),
};

const VideoGallery = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-10" id="videos">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🎥 Golden Moments Captured Ye Change ho Jayega Blog Ane ke Bad
        </motion.h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Watch our unforgettable memories, full of laughter, celebration, and friendship.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
        {videos.map((video, idx) => (
          <motion.div
            key={idx}
            className="rounded-xl overflow-hidden shadow-lg bg-white"
            variants={videoAnimation}
            initial="hidden"
            whileInView="visible"
            custom={idx}
            viewport={{ once: true }}
          >
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full"
                src={video.url}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <div className="p-4 text-left">
              <h3 className="text-lg font-semibold text-gray-800">{video.title}</h3>
              <p className="text-sm text-gray-600">
                A special moment from our journey together, forever captured.
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default VideoGallery;
