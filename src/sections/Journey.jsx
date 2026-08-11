import { motion as Motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import portfolio from '../data/portfolio';

const Journey = () => (
  <div className="relative z-20 w-full px-4 py-24 md:py-32">
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-400">Beyond the stack</p>
          <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">{portfolio.about.headline}</h2>
          <div className="mt-8 space-y-5 text-lg leading-8 text-gray-400">
            {portfolio.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {portfolio.about.interests.map((interest) => (
              <span key={interest} className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-100">
                {interest}
              </span>
            ))}
          </div>
          <div className="mt-12 rounded-2xl border border-purple-500/20 bg-purple-500/5 p-7">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-purple-300">How I like to work</p>
            <ul className="space-y-4">
              {portfolio.about.workingStyle.map((item) => (
                <li key={item} className="flex gap-3 leading-7 text-gray-300">
                  <FaArrowRight className="mt-1.5 shrink-0 text-purple-400" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <p className="mb-8 text-sm font-semibold uppercase tracking-[0.28em] text-purple-400">The short version</p>
          <div className="relative border-l border-white/10 pl-8">
            {portfolio.journey.map((item, index) => (
              <Motion.article
                key={`${item.period}-${item.title}`}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pb-12"
              >
                <div className="absolute -left-[2.45rem] top-1 h-3 w-3 rounded-full border-2 border-[#030014] bg-cyan-400 shadow-[0_0_16px_#00d4ff]" />
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">{item.period}</p>
                <h3 className="mt-3 text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-1 text-purple-300">{item.place}</p>
                <p className="mt-4 leading-7 text-gray-400">{item.summary}</p>
              </Motion.article>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Journey;
