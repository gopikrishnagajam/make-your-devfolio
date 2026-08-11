import { motion as Motion } from 'framer-motion';
import portfolio from '../data/portfolio';

const Capabilities = () => (
  <div className="relative z-20 w-full px-4 py-20 md:py-28">
    <div className="mx-auto max-w-7xl">
      <div className="mb-14 grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-purple-400">Where I work</p>
          <h2 className="text-4xl font-bold text-white md:text-5xl">Across the system, not inside one title.</h2>
        </div>
        <p className="max-w-2xl text-lg leading-8 text-gray-400 md:justify-self-end">
          The roles may have different names, but the work connects: trustworthy data, intelligent behavior, reliable services, and infrastructure that can carry them into production.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {portfolio.capabilities.map((capability, index) => (
          <Motion.article
            key={capability.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-[#0c081e]/85 p-7 transition-colors hover:border-purple-400/30 md:p-9"
          >
            <div className="flex items-start justify-between gap-6">
              <h3 className="text-2xl font-bold text-white md:text-3xl">{capability.title}</h3>
              <span className="font-mono text-sm text-cyan-400/70">{capability.number}</span>
            </div>
            <p className="mt-5 max-w-xl leading-7 text-gray-400">{capability.description}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {capability.skills.map((skill) => (
                <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-300">{skill}</span>
              ))}
            </div>
          </Motion.article>
        ))}
      </div>
    </div>
  </div>
);

export default Capabilities;
