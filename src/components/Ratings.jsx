import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { FiUsers, FiStar } from "react-icons/fi";

const stats = [
  { label: "App Store rating", value: 4.8, suffix: "/5", decimals: 1, icon: FaApple },
  { label: "Play Store rating", value: 4.7, suffix: "/5", decimals: 1, icon: FaGooglePlay },
  { label: "Premium members", value: 12, suffix: "M+", decimals: 0, icon: FiUsers },
];

const reviews = [
  {
    quote: "CRED makes paying bills feel less like a chore and more like unlocking a premium moment.",
    author: "Aditya S., CRED Member"
  },
  {
    quote: "The rewards, score visibility, and payment polish make the whole experience feel special.",
    author: "Rohan M., CRED Member"
  },
  {
    quote: "This is exactly the kind of financial UI that builds trust without becoming boring.",
    author: "Pooja K., CRED Member"
  }
];

const Counter = ({ value, suffix, decimals }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => latest.toFixed(decimals));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, { duration: 1.5, ease: "easeOut" });
    return controls.stop;
  }, [count, inView, value]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

const Ratings = () => {
  return (
    <section
      id="ratings"
      className="bg-[#0b0b10] px-6 py-28 text-white relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#00f2fe]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[#e01cd5]/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-[#00f2fe]">
            trusted by members
          </p>
          <h2 className="mx-auto max-w-4xl text-4xl font-black leading-[1.05] md:text-6xl">
            Ratings that feel as premium as the product.
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="rounded-[28px] border border-white/5 bg-white/[0.04] p-7 text-center shadow-[8px_8px_0_#000] backdrop-blur-xl hover:border-white/15 transition duration-300"
              >
                <Icon className="mx-auto mb-5 text-3xl text-[#f5c542] animate-bounce-slow" />
                <div className="text-5xl font-black tracking-tight text-white">
                  <Counter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </div>
                <p className="mt-4 text-sm text-gray-400 font-medium">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Member Quotes Grid */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {reviews.map((item, index) => (
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="rounded-[28px] border border-white/5 bg-black/40 p-8 text-base leading-relaxed text-gray-300 backdrop-blur-xl hover:border-white/10 transition duration-350 flex flex-col justify-between"
            >
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="text-xs text-[#f5c542] fill-[#f5c542]" />
                ))}
              </div>
              <p className="italic">"{item.quote}"</p>
              <footer className="mt-6 text-xs font-black uppercase tracking-[0.2em] text-white">
                {item.author}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ratings;
