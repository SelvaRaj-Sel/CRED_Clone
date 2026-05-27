import { motion } from "framer-motion";
import {
  FiAward,
  FiCreditCard,
  FiGift,
  FiPercent,
  FiRepeat,
  FiTrendingUp,
} from "react-icons/fi";

const features = [
  {
    icon: FiCreditCard,
    title: "Credit card bill payments",
    copy: "Pay cards in a premium dashboard with reminders, statements, and satisfying completion states.",
    color: "from-[#f5c542] to-[#ff7a18]",
  },
  {
    icon: FiGift,
    title: "Rewards",
    copy: "Unlock curated drops, lifestyle benefits, and surprise rewards after every smart payment.",
    color: "from-[#e01cd5] to-[#7b2ff7]",
  },
  {
    icon: FiTrendingUp,
    title: "Credit score tracking",
    copy: "Track score health with simple signals and clean visual feedback built for quick decisions.",
    color: "from-[#00f2fe] to-[#4facfe]",
  },
  {
    icon: FiRepeat,
    title: "UPI payments",
    copy: "Move money with fast UPI flows while the interface keeps every action clear and confident.",
    color: "from-[#8cff7a] to-[#00d084]",
  },
  {
    icon: FiAward,
    title: "CRED Coins",
    copy: "Earn coins on payments and redeem them through an energetic, game-like rewards surface.",
    color: "from-[#fff4a8] to-[#f5c542]",
  },
  {
    icon: FiPercent,
    title: "Cashback",
    copy: "Reveal cashback moments with animated wins, premium cards, and bold NeoPOP feedback.",
    color: "from-[#ff4ecd] to-[#ff7a90]",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-[#050508] px-6 py-28 text-white"
    >
      <div className="absolute left-0 top-1/4 h-80 w-80 rounded-full bg-[#7b2ff7]/10 blur-3xl pointer-events-none" />
      <div className="absolute right-0 bottom-1/4 h-80 w-80 rounded-full bg-[#00f2fe]/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-[#f5c542]">
              feature universe
            </p>
            <h2 className="max-w-4xl text-4xl font-black leading-[1.05] md:text-6xl">
              Everything credit deserves, styled like a reward.
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-gray-400">
            Glass panels, 3D depth, animated hover states, and product cards inspired by the premium CRED experience.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="group min-h-[300px] rounded-[28px] border border-white/5 bg-white/[0.04] p-7 shadow-[8px_8px_0_#000] backdrop-blur-xl transition-all duration-300 hover:border-white/15 hover:shadow-[4px_4px_0_#e01cd5] hover:-translate-y-1"
              >
                <div
                  className={`mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} text-xl text-black shadow-[4px_4px_0_#000]`}
                >
                  <Icon />
                </div>
                <h3 className="text-xl font-black text-white">{feature.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-gray-400">
                  {feature.copy}
                </p>
                <div className="mt-8 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div
                    className={`h-full w-2/3 rounded-full bg-gradient-to-r ${feature.color} transition-all duration-500 group-hover:w-full`}
                  />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;

