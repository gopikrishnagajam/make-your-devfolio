import { motion as Motion } from 'framer-motion';
import portfolio from '../data/portfolio';

const Principles = () => (
  <div className="relative z-20 w-full px-4 py-24 md:py-32">
    <div className="mx-auto max-w-7xl">
      <div className="mb-16 max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-purple-400">How I think</p>
        <h2 className="text-4xl font-bold text-white md:text-6xl">Principles I try to build by.</h2>
      </div>
      <div className="grid border-l border-t border-white/10 md:grid-cols-2">
        {portfolio.principles.map((principle, index) => (
          <Motion.div
            key={principle.number}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group min-h-[280px] border-b border-r border-white/10 bg-[#08051a]/70 p-8 transition-colors hover:bg-[#110c2a] md:p-10"
          >
            <span className="font-mono text-sm text-purple-400">{principle.number}</span>
            <h3 className="mt-12 text-2xl font-bold text-white md:text-3xl">{principle.title}</h3>
            <p className="mt-5 max-w-lg leading-7 text-gray-400">{principle.description}</p>
          </Motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default Principles;
