import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const batchMembers = [
  { name: "Yogesh", contact: "+91 9876543210", city: "Mumbai" },
  { name: "Priya", contact: "+91 9876543211", city: "Bangalore" },
  { name: "Amit", contact: "+91 9876543212", city: "Delhi" },
  { name: "Khushi", contact: "+91 9876543213", city: "Hyderabad" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Stay Connected 💬
          </motion.h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Let’s celebrate our bond beyond college. Stay in touch, have fun, and build memories together!
          </p>
        </div>

        {/* WhatsApp + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* WhatsApp + Socials */}
          <div className="lg:col-span-1 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
            <h3 className="text-3xl font-bold mb-4">Batch WhatsApp Group</h3>
            <p className="mb-6 text-white/90">Join our fun WhatsApp group! Reconnect, plan trips, and laugh together again. 🥳</p>
            <a
              href="https://chat.whatsapp.com/GkA1yi46QYZAgaHZmeYv9B"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-full font-bold hover:bg-gray-100 transition shadow-lg"
            >
              <FaWhatsapp className="mr-2" /> Join Group
            </a>

            {/* Social Links */}
            <div className="mt-10">
              <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {[FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="https://www.instagram.com/mr_devesh_sen/"
                    className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition transform hover:scale-110"
                  >
                    <Icon className="text-2xl" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Reunion Suggestion Form */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-3xl font-bold mb-4 text-gray-800">Plan a Reunion 🎉</h3>
            <p className="text-gray-600 mb-6">Got a cool idea for a trip, party, or chill session? Drop it here!</p>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700 mb-2">Reunion Idea</label>
                <textarea
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition shadow-lg w-full"
                >
                  🚀 Submit Your Suggestion
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Batch Directory */}
        <div className="mt-20 bg-white rounded-3xl shadow-xl p-8">
          <h3 className="text-3xl font-bold mb-4 text-center text-gray-800">📘 Batch Directory</h3>
          <p className="text-center text-gray-600 mb-8">Want to catch up with someone? Call them or plan a hangout! 🎈</p>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-6 text-gray-700">Name</th>
                  <th className="py-3 px-6 text-gray-700">Contact</th>
                  <th className="py-3 px-6 text-gray-700">City</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {batchMembers.map((member, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition">
                    <td className="py-3 px-6 font-medium text-gray-800">{member.name}</td>
                    <td className="py-3 px-6 text-blue-600 hover:underline">
                      <a href={`tel:${member.contact}`}>{member.contact}</a>
                    </td>
                    <td className="py-3 px-6 text-gray-700">{member.city}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* New Feature: Fun Polls */}
        <div className="mt-20 bg-gradient-to-r from-yellow-100 to-pink-100 p-8 rounded-3xl shadow-xl text-center">
          <h3 className="text-3xl font-bold mb-6">🎯 Quick Fun Poll</h3>
          <p className="mb-4 text-gray-700">Where should our next get-together be?</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Goa Beach Bash", "Manali Snow Trip", "Jaipur Heritage Tour", "Local Foodie Meetup"].map((option, idx) => (
              <button
                key={idx}
                className="bg-white px-5 py-3 rounded-full font-medium hover:bg-gray-100 transition shadow"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
