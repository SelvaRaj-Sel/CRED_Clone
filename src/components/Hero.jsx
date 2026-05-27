import { motion } from "framer-motion";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { FiArrowUpRight, FiShield } from "react-icons/fi";

const Hero = () => {
  const handleScrollToPlayground = (e) => {
    e.preventDefault();
    const element = document.getElementById("playground");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#040407] px-6 pt-32 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(224,28,213,0.2),transparent_35%),radial-gradient(circle_at_80%_15%,rgba(0,242,254,0.15),transparent_30%),linear-gradient(145deg,#050508_0%,#0e0d16_52%,#050508_100%)]" />
      

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-gray-300 backdrop-blur-xl">
            <FiShield className="text-[#00f2fe] animate-pulse" />
            Members-only credit club
          </div>

          <h1 className="max-w-5xl text-4xl font-black leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
            Pay credit bills.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f5c542] to-[#00f2fe] text-glow-premium">
              Earn like royalty.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400 md:text-xl">
            A premium CRED experience for high-trust payments, interactive credit card builders, credit score trackers, and unlocked rewards.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <button
              className="group inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 font-black text-black shadow-[6px_6px_0_#e01cd5] transition-all duration-300 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_#e01cd5] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
            >
              Get App
              <FiArrowUpRight className="transition group-hover:rotate-45" />
            </button>
            <div className="flex gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-xl backdrop-blur-xl hover:bg-white/10 hover:text-[#00f2fe] transition cursor-pointer">
                <FaApple />
              </span>
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-xl backdrop-blur-xl hover:bg-white/10 hover:text-[#00f2fe] transition cursor-pointer">
                <FaGooglePlay />
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.93, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative mx-auto w-full max-w-[440px]"
        >
          <div className="absolute -inset-8 rounded-full bg-gradient-to-tr from-[#e01cd5]/20 via-[#7b2ff7]/5 to-[#00f2fe]/15 blur-3xl" />
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative rounded-[32px] border border-white/15 bg-white/[0.06] p-5 shadow-[0_35px_120px_rgba(0,0,0,0.7)] backdrop-blur-2xl"
          >
            <div className="rounded-[26px] bg-[#0c0c10] p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
              <div className="mb-14 flex items-center justify-between">
                <span className="text-xs font-black tracking-[0.3em] text-gray-400">CRED BLACK</span>
                <span className="rounded-full bg-white px-3 py-1 text-[10px] font-black text-black">ELITE</span>
              </div>
              <div className="mb-8 h-14 w-20 rounded-xl bg-gradient-to-br from-[#f5c542] via-[#fff4a8] to-[#b98620] shadow-[5px_5px_0_#000] border border-white/5" />
              <p className="text-[10px] uppercase tracking-[0.25em] text-gray-500">available limit</p>
              <div className="mt-1 text-3xl font-black tracking-tight">₹8,42,000</div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4">
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">coins</p>
                  <p className="text-xl font-black text-[#f5c542] mt-0.5">24,800</p>
                </div>
                <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4">
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">score</p>
                  <p className="text-xl font-black text-[#00f2fe] mt-0.5">811</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

