import { motion as Motion } from 'framer-motion';
import { FaArrowRight, FaFlask, FaGithub } from 'react-icons/fa';
import portfolio from '../data/portfolio';

const Lab = () => (
  <div className="relative z-20 w-full px-4 py-24 md:py-32">
    <div className="mx-auto max-w-7xl">
      <div className="mb-14 grid gap-8 md:grid-cols-[1fr_0.65fr] md:items-end">
        <div>
          <p className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-400">
            <FaFlask /> The lab
          </p>
          <h2 className="text-4xl font-bold text-white md:text-6xl">Experiments, questions, and unfinished ideas.</h2>
        </div>
        <p className="text-lg leading-relaxed text-gray-400">
          Not every useful idea begins as a polished product. This is where I explore a question by building something small.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {portfolio.lab.map((item, index) => (
          <Motion.article
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.07 }}
            viewport={{ once: true }}
            className="group flex min-h-[360px] flex-col rounded-2xl border border-white/10 bg-[#0d0920]/80 p-7 transition-all hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-[#110c2a]"
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1 text-xs font-semibold text-purple-300">
                {item.status}
              </span>
              <span className="text-xs uppercase tracking-wider text-gray-500">{item.type}</span>
            </div>
            <h3 className="text-2xl font-bold text-white">{item.title}</h3>
            <p className="mt-4 leading-7 text-gray-400">{item.description}</p>
            <div className="mt-6 border-l-2 border-cyan-400/40 pl-4 text-sm italic leading-6 text-cyan-100/80">
              {item.question}
            </div>
            <div className="mt-auto flex flex-wrap gap-2 pt-8">
              {item.tags.map((tag) => (
                <span key={tag} className="text-xs text-gray-500 transition-colors group-hover:text-gray-300">{tag}</span>
              ))}
            </div>
            {item.github ? (
              <a
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-purple-300 transition-colors hover:text-white"
              >
                <FaGithub /> View repository <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
            ) : (
              <span className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">Private project · details available</span>
            )}
          </Motion.article>
        ))}
      </div>
    </div>
  </div>
);

export default Lab;
