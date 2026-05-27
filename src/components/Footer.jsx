import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const columns = [
    {
      title: "About",
      links: [
        { label: "Company", id: "about" },
        { label: "Members-only club", id: "about" },
        { label: "Rewards", id: "features" },
        { label: "Credit score", id: "features" },
      ],
    },
    {
      title: "Careers",
      links: [
        { label: "Open roles", id: "hero" },
        { label: "Culture", id: "hero" },
        { label: "Design", id: "hero" },
        { label: "Engineering", id: "hero" },
      ],
    },
    {
      title: "Policies",
      links: [
        { label: "Privacy Policy", id: "security" },
        { label: "Terms", id: "security" },
        { label: "Security", id: "security" },
        { label: "Responsible disclosure", id: "security" },
      ],
    },
  ];

  const socials = [FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn];

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative overflow-hidden bg-[#030305] px-6 py-20 text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-[#e01cd5]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1.85fr]">
          <div>
            <a
              href="#hero"
              onClick={(e) => handleScroll(e, "hero")}
              className="text-4xl font-black tracking-widest hover:opacity-80 transition"
            >
              CRED<span className="text-[#e01cd5]">.</span>
            </a>
            <p className="mt-6 max-w-md text-base leading-relaxed text-gray-400">
              A CRED-inspired React experience featuring custom card
              customizers, payment flows, credit gauges, and smart rewards.
            </p>
            <div className="mt-8 flex gap-4">
              {socials.map((Icon, index) => (
                <a
                  key={index}
                  href="#hero"
                  onClick={(e) => handleScroll(e, "hero")}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/5 bg-white/5 text-base transition hover:-translate-y-1 hover:bg-white hover:text-black"
                  aria-label="Social link"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="mb-5 text-lg font-black text-white">
                  {column.title}
                </h3>
                <ul className="space-y-3 text-gray-400 text-sm">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={`#${link.id}`}
                        onClick={(e) => handleScroll(e, link.id)}
                        className="transition hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/5 pt-8 text-xs text-gray-500 md:flex-row md:items-center md:justify-between">
          <span>&copy; 2026 CRED Clone. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
