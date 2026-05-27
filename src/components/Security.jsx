import { motion } from "framer-motion";
import { FiKey, FiLock, FiShield } from "react-icons/fi";

const securityData = [
  {
    icon: FiLock,
    title: "Advanced encryption",
    desc: "Protected transaction flows with strong encryption-first messaging.",
  },
  {
    icon: FiShield,
    title: "Secure payments",
    desc: "Clear payment states, trusted UI feedback, and fraud-aware product moments.",
  },
  {
    icon: FiKey,
    title: "Data protection",
    desc: "Privacy-led interface cards that keep sensitive information visually guarded.",
  },
];

const Security = () => {
  return (
    <section
      id="security"
      className="relative overflow-hidden bg-[#050508] px-6 py-28 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(0,242,254,0.1),transparent_35%)]" />
      
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-[#f5c542]">
            protected by design
          </p>
          <h2 className="text-5xl font-black leading-[1.05] md:text-7xl">
            security you can see, feel, and trust.
          </h2>
          <p className="mt-7 max-w-xl text-lg leading-8 text-gray-400">
            Security is a major part of the CRED brand. This section makes the protection story visible through premium trust cards and guarded interface details.
          </p>

          <div className="mt-10 rounded-[28px] border border-white/5 bg-white/[0.03] p-5 shadow-[8px_8px_0_#000] backdrop-blur-xl">
            <div className="flex items-center justify-between rounded-2xl bg-black/60 p-5">
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">vault status</p>
                <p className="text-2xl font-black text-white mt-1">encrypted</p>
              </div>
              <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#00f2fe]/10">
                <span className="absolute h-full w-full rounded-full border border-[#00f2fe]/30 animate-radar" />
                <FiShield className="text-2xl text-[#00f2fe]" />
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-1">
          {securityData.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group rounded-[28px] border border-white/5 bg-white/[0.04] p-6 shadow-[8px_8px_0_#000] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:shadow-[4px_4px_0_#00f2fe]"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white text-xl text-black shadow-[4px_4px_0_#e01cd5]">
                    <Icon />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-400">{item.desc}</p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Security;

