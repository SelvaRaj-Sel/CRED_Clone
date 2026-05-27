import { motion } from "framer-motion";
import { FiCheckCircle, FiLock, FiStar } from "react-icons/fi";

const About = () => {
  const points = [
    "Curated for members who value trust, status, and better money rituals.",
    "Premium reward drops, bill reminders, and spending clarity in one place.",
    "Built around secure payments and an experience that feels invitation-only.",
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#08080d] px-6 py-28 text-white"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[42px] bg-gradient-to-br from-[#e01cd5]/10 via-transparent to-[#00f2fe]/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-[32px] border border-white/5 bg-white/5 p-5 shadow-[12px_12px_0_#000] backdrop-blur-2xl">
            <img
              src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?q=80&w=1200&auto=format&fit=crop"
              alt="Premium members using digital payments"
              className="h-[440px] w-full rounded-[24px] object-cover filter brightness-90 contrast-[1.05]"
            />
            <div className="absolute bottom-10 left-10 rounded-3xl border border-white/10 bg-black/85 p-5 backdrop-blur-xl">
              <FiStar className="mb-3 text-3xl text-[#f5c542] animate-spin-hover" />
              <p className="text-[10px] uppercase tracking-[0.25em] text-gray-500 font-bold">club access</p>
              <p className="mt-1 text-2xl font-black">members only</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-[#00f2fe]">
            about the experience
          </p>
          <h2 className="max-w-3xl text-3xl font-black leading-[1.05] md:text-5xl">
            Not just payments.
            <span className="block text-gray-550">A private club for credit.</span>
          </h2>
          <p className="mt-7 max-w-2xl text-xl leading-8 text-gray-400">
            CRED focuses on trust, exclusivity, and premium experiences. This page mirrors that world with cinematic transitions, glass layouts, bold NeoPOP shadows, and interactive moments that feel rewarding.
          </p>

          <div className="mt-10 space-y-4">
            {points.map((point, index) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.55 }}
                className="flex gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-5 backdrop-blur-xl hover:border-white/15 transition-all duration-300"
              >
                {index === 2 ? (
                  <FiLock className="mt-1 shrink-0 text-xl text-[#f5c542]" />
                ) : (
                  <FiCheckCircle className="mt-1 shrink-0 text-xl text-[#00f2fe]" />
                )}
                <p className="text-gray-300 text-base leading-relaxed">{point}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

