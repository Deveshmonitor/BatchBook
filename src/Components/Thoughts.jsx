"use client";
import { motion } from "framer-motion";
import { FaLaughWink, FaUserAstronaut, FaGhost, FaPaw } from "react-icons/fa";
import { MdEmojiEmotions, MdFace, MdSportsHandball } from "react-icons/md";

const avatars = [
  <FaLaughWink className="text-yellow-500 text-3xl" />,
  <FaUserAstronaut className="text-purple-500 text-3xl" />,
  <FaGhost className="text-pink-400 text-3xl" />,
  <MdEmojiEmotions className="text-blue-500 text-3xl" />,
  <MdFace className="text-green-500 text-3xl" />,
  <MdSportsHandball className="text-orange-400 text-3xl" />,
  <FaPaw className="text-rose-500 text-3xl" />,
];

const funnyNicknames = [
  "Biryani Lover 🍗",
  "The Backbencher 🤫",
  "Hostel Hacker 💻",
  "Maggie Chef 🍜",
  "Sleeps in Class 😴",
  "Secret Singer 🎤",
  "Chai Addict ☕",
  "Party Planner 🎉",
];

const thoughts = [
  "Remember when we all got locked out during the fresher party? 😂",
  "Canteen samosas were better than any lecture!",
  "The group project where only memes got shared... iconic!",
  "Who else still has nightmares about viva days?",
  "Raise your hand if you bunked for pani puri 😎",
  "Farewell tears + filter coffee = emotions overloaded 💔",
  "Still waiting for that one guy to return my pen from 1st year.",
  "Group chat is more alive than any of our assignments ever were.",
];

const getRandom = (list) => list[Math.floor(Math.random() * list.length)];

const ThoughtBubbles = () => {
  return (
    <section id="thought-bubbles" className="bg-gradient-to-b from-white via-blue-50 to-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-800">🧠 Thought Bubbles</h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Anonymous, hilarious, and heartfelt moments shared by our batchmates 😄
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {thoughts.map((thought, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 border-t-4 border-blue-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-center mb-3 gap-3">
              <div className="avatar">{getRandom(avatars)}</div>
              <span className="text-sm font-semibold text-gray-700">
                {getRandom(funnyNicknames)}
              </span>
            </div>
            <p className="text-gray-600 italic">“{thought}”</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ThoughtBubbles;
