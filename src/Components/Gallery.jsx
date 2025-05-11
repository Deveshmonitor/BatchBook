import { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const images = [
  {
    src: "/Images2/2.jpg",
    name: "Squard Group",
    desc: "Always smiling, always there!",
  },
  {
    src: "/Images2/4.jpg",
    name: "Snap Queen 👸",
    desc: "The life of every celebration!",
  },
  {
    src: "/Documents/0.jpg",
    name: "Wouder injoyment",
    desc: "The life of every celebration!",
  },
  { src: "/Documents/1.jpg", name: "The Vibe Machine 😎", desc: "Turns every dull moment into a blockbuster memory!" },
  { src: "/Documents/9.jpg", name: "Laughing Legend 😂", desc: "Jokes that echo in every corridor!" },
  { src: "/Documents/3.jpg", name: "Party Commander 🕺", desc: "When they dance, the world stops!" },
  { src: "/Documents/4.jpg", name: "Queen of Chaos 👑", desc: "Their smile has its own fanbase!" },
  { src: "/Documents/5.jpg", name: "Selfie Sultan 🤳", desc: "Never says no to masti!" },
  { src: "/Documents/6.jpg", name: "Smiles Unlimited 😊", desc: "Photos, fun, and full-on drama!" },
  { src: "/Documents/7.jpg", name: "The Silent Rock 🤐", desc: "Can turn a lecture into laughter!" },
  { src: "/Documents/8.jpg", name: "Biryani Lover 🍗", desc: "Missing in class, viral in reels!" },
  { src: "/Documents/9.jpg", name: "Dance Ka Baap 💃", desc: "Cooler than your air conditioner!" },
  { src: "/Documents/10.jpg", name: "Giggle Factory 😄", desc: "Friends forever, fun forever!" },
  { src: "/Documents/11.jpg", name: "Master of Memes 🖼️", desc: "Has the answers to all attendance calls!" },
  { src: "/Documents/12.jpg", name: "Insta King 📸", desc: "The heartbeat of every hangout!" },
  { src: "/Documents/13.jpg", name: "Snap Queen 👸", desc: "Says less, means more!" },
  { src: "/Documents/14.jpg", name: "Always Late ⏰", desc: "Serious face, meme mind!" },
  { src: "/Documents/15.jpg", name: "Drama Queen 🎭", desc: "Their vibe? Unmatchable!" },
  { src: "/Documents/16.jpg", name: "Bunk Master 😜", desc: "Fun-sized package of madness!" },
  { src: "/Documents/17.jpg", name: "Coffee Addict ☕", desc: "Silently running the show!" },
  { src: "/Documents/18.jpg", name: "Masti Queen 😍", desc: "Group ka livewire!" },
  { src: "/Documents/19.jpg", name: "Style Icon 👟", desc: "Always the first to plan the party!" },
  { src: "/Documents/20.jpg", name: "Mood Swinger 🎢", desc: "College ka GPS - always knows what's happening!" },
  { src: "/Documents/21.jpg", name: "The Invisible One 👻", desc: "One liner specialist!" },
  { src: "/Documents/22.jpg", name: "Viva Fighter 🥊", desc: "Their mood decides the plan!" },
  { src: "/Documents/23.jpg", name: "Assignment Hacker 💻", desc: "Energy = Infinite!" },
  { src: "/Documents/24.jpg", name: "Note Supplier 📚", desc: "The peaceful powerhouse!" },
  { src: "/Documents/25.jpg", name: "Exam Warrior 🧠", desc: "Drama + Dedication = Them!" },
  { src: "/Documents/26.jpg", name: "Group Captain 🧑‍✈️", desc: "Fresher’s favorite!" },
  { src: "/Documents/27.jpg", name: "Thand Rakh Guy ❄️", desc: "Rehearsed in jokes, unrehearsed in life!" },
  { src: "/Documents/28.jpg", name: "Ultimate Bakchod 🗣️", desc: "Even professors remember them!" },
  { src: "/Documents/29.jpg", name: "Joke Bomb 💣", desc: "Their dance breaks floors!" },
  { src: "/Documents/30.jpg", name: "Sanskari Rebel 🕉️", desc: "Mood booster of the squad!" },
  { src: "/Documents/31.jpg", name: "Voice of Reason 🧘", desc: "Moves like magic, talks like fire!" },
  { src: "/Documents/32.jpg", name: "Cricket Fanatic 🏏", desc: "Living proof of fun and flair!" },
  { src: "/Documents/33.jpg", name: "Chai Lover 🍵", desc: "Wears simplicity, radiates coolness!" },
  { src: "/Documents/34.jpg", name: "Midnight Owl 🌙", desc: "Friendship goals redefined!" },
  { src: "/Documents/35.jpg", name: "Tandoori Star 🔥", desc: "Cool, calm, and crazy at times!" },
  { src: "/Documents/36.jpg", name: "The Listener 👂", desc: "Talk less, shock more!" },
  { src: "/Documents/37.jpg", name: "Dance Diva 🌟", desc: "A walking festival!" },
  { src: "/Documents/38.jpg", name: "Bhaigiri Expert 😎", desc: "Memory creator on duty!" },
  { src: "/Documents/39.jpg", name: "Cool Calculator 🧊", desc: "Unfiltered, unstoppable!" },
  {
    src: "/Images2/5.jpg",
    name: "Amit Joshi",
    desc: "Coder by brain, fun by heart!",
  },
  {
    src: "/Images2/8.jpg",
    name: "Priya Singh",
    desc: "Laughter queen & photo freak!",
  },
  {
    src: "/Images2/9.jpg",
    name: "Priya Singh",
    desc: "Laughter queen & photo freak!",
  },
  {
    src: "/Images2/23.jpg",
    name: "Priya Singh",
    desc: "Laughter queen & photo freak!",
  },
  {
    src: "/Images2/34.jpg",
    name: "Priya Singh",
    desc: "Laughter queen & photo freak!",
  },
  {
    src: "/Images2/98.jpg",
    name: "Priya Singh",
    desc: "Laughter queen & photo freak!",
  },
  {
    src: "/Images2/109.jpg",
    name: "Priya Singh",
    desc: "Laughter queen & photo freak!",
  },
  {
    src: "/Images2/110.jpg",
    name: "Priya Singh",
    desc: "Laughter queen & photo freak!",
  },
  {
    src: "/Images2/112.jpg",
    name: "Priya Singh",
    desc: "Laughter queen & photo freak!",
  },
];


const Gallery = () => {
  const [likes, setLikes] = useState(Array(images.length).fill(100));
  const [zoomImg, setZoomImg] = useState(null);
  const [visibleCount, setVisibleCount] = useState(8); // 👈 load only 12 at first

  const handleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index]++;
    setLikes(newLikes);
  };

  const handleZoom = (img) => {
    setZoomImg(img);
  };

  const closeZoom = () => {
    setZoomImg(null);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 8); // 👈 load 12 more on click
  };

  const visibleImages = images.slice(0, visibleCount);

  return (
    <section id="gallery" className="bg-gray-50 py-16 px-4 sm:px-10">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-2"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Golden Memories ✨
        </motion.h2>
        <p className="text-gray-600 text-lg">
          Every photo tells a story worth remembering.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {visibleImages.map((img, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden relative group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="relative overflow-hidden">
              <img
                src={img.src}
                alt={img.name}
                loading="lazy"
                className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500 cursor-pointer"
                onClick={() => handleZoom(img)}
              />
              <motion.button
                whileTap={{ scale: 1.2 }}
                onClick={() => handleLike(index)}
                className="absolute top-3 right-3 bg-white/80 backdrop-blur p-2 rounded-full shadow hover:bg-pink-200"
              >
                <Heart className="w-5 h-5 text-pink-600" />
              </motion.button>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{img.name}</h3>
              <p className="text-gray-500 text-sm">{img.desc}</p>
              <p className="mt-2 text-sm text-pink-600 font-medium">
                ❤️ {likes[index]} Likes
              </p>
              <a
                href={img.src}
                download
                className="inline-block mt-2 text-blue-600 hover:text-blue-800 text-sm font-semibold"
              >
                ⬇️ Download Photo
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < images.length && (
        <div className="mt-10 text-center">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition"
          >
            Load More Memories
          </button>
        </div>
      )}

      {/* Zoom Modal */}
      {zoomImg && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
          onClick={closeZoom}
        >
          <div className="relative max-w-3xl w-full px-4">
            <img
              src={zoomImg.src}
              alt={zoomImg.name}
              className="w-full h-auto rounded-lg shadow-xl border-4 border-white"
            />
            <p className="text-white text-lg mt-3 text-center">
              {zoomImg.name} - {zoomImg.desc}
            </p>
            <button
              onClick={closeZoom}
              className="absolute top-3 right-3 text-white text-2xl bg-black/50 rounded-full px-3"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;