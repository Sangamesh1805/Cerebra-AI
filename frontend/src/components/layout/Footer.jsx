import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-400">Cerebra</h2>

            <p className="mt-3 text-slate-400 max-w-md">
              AI-powered brain tumor segmentation and interactive 3D
              visualization platform.
            </p>
          </div>

          <div className="flex gap-5 mt-8 md:mt-0">
            <a
              href="https://github.com/Sangamesh1805"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://linkedin.com/in/sangamesh-hudgikar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin size={24} />
            </a>

            <a
              href="mailto:sangameshhudgikar1805@gmail.com"
              className="hover:text-blue-400 transition"
            >
              <MdEmail size={24} />
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500">
          © {new Date().getFullYear()} Cerebra. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
