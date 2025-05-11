import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Logo & Quote */}
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight">🎓 BatchVibe 2025</h2>
          <p className="mt-2 text-sm">"Once batchmates, always troublemakers! 😄"</p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xl font-bold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#memories" className="hover:underline">Memories</a></li>
            <li><a href="#contact" className="hover:underline">Connect</a></li>
            <li><a href="#reunion" className="hover:underline">Reunion Plan</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-bold mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            {[FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn].map((Icon, idx) => (
              <a
                key={idx}
                href="https://www.instagram.com/mr_devesh_sen/"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition"
              >
                <Icon className="text-lg" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom note */}
      <div className="text-center mt-10 text-sm text-white/80">
        © {new Date().getFullYear()} BatchVibe. Made with ❤️ & laughter.
      </div>
    </footer>
  );
};

export default Footer;
