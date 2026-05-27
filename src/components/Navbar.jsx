import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["About", "Features", "Ratings", "Security"];

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false); // Close mobile menu if open
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 py-4">
      {/* Desktop & Main Navbar Bar */}
      <div className="max-w-7xl mx-auto flex justify-between items-center rounded-3xl border border-white/10 bg-black/60 px-6 py-4 shadow-[0_18px_70px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
        <a 
          href="#hero" 
          onClick={(e) => handleScroll(e, "hero")}
          className="text-2xl font-black text-white tracking-widest hover:opacity-80 transition"
        >
          CRED<span className="text-[#e01cd5]">.</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-sm font-semibold text-gray-400">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={(e) => handleScroll(e, link)}
                className="hover:text-white hover:text-glow-premium transition duration-300 relative py-1 group"
              >
                {link}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#e01cd5] to-[#00f2fe] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <button
            href="#playground"
            
            className="bg-white text-black px-6 py-2.5 rounded-2xl text-sm font-black shadow-[4px_4px_0px_#e01cd5] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#e01cd5] transition-all duration-200"
          >
            Get App
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl focus:outline-none hover:text-[#00f2fe] transition"
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-24 left-4 right-4 rounded-3xl border border-white/10 bg-black/95 p-6 shadow-2xl backdrop-blur-2xl z-40">
          <ul className="flex flex-col gap-5 text-center text-lg font-bold text-gray-300">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={(e) => handleScroll(e, link)}
                  className="block py-2 hover:text-white transition"
                >
                  {link}
                </a>
              </li>
            ))}
            <li className="mt-4">
              <a
                href="#playground"
                onClick={(e) => handleScroll(e, "playground")}
                className="inline-block w-full bg-white text-black py-3 rounded-2xl font-black shadow-[4px_4px_0px_#e01cd5]"
              >
                Try Playground
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

