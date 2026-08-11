import { motion as Motion } from 'framer-motion';
import { FaArrowRight, FaCheck, FaCodeBranch, FaGithub, FaLightbulb } from 'react-icons/fa';
import portfolio from '../data/portfolio';

const DetailList = ({ title, icon, items }) => (
  <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
    <div className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
      {icon}
      {title}
    </div>
    <ul className="space-y-4 text-sm leading-relaxed text-gray-300">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <FaCheck className="mt-1 shrink-0 text-purple-400" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const FeaturedWork = () => (
  <div className="relative z-20 w-full px-4 py-24 md:py-32">
    <div className="mx-auto max-w-7xl">
      <div className="mb-16 max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-400">Selected work</p>
        <h2 className="text-4xl font-bold text-white md:text-6xl">Projects are decisions, not screenshots.</h2>
        <p className="mt-6 text-lg leading-relaxed text-gray-400">
          A closer look at the problems, trade-offs, and lessons behind the systems I build.
        </p>
      </div>

      <div className="space-y-24">
        {portfolio.featuredProjects.map((project, index) => (
          <Motion.article
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-80px' }}
            className="overflow-hidden rounded-[2rem] border border-purple-500/20 bg-[#0b071d]/90 shadow-[0_30px_100px_rgba(42,14,97,0.28)]"
          >
            <div className="grid border-b border-white/10 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative overflow-hidden p-8 md:p-12">
                <div className={`absolute inset-0 opacity-20 ${index % 2 ? 'bg-[radial-gradient(circle_at_top_left,#00d4ff,transparent_55%)]' : 'bg-[radial-gradient(circle_at_top_left,#7042f8,transparent_55%)]'}`} />
                <div className="relative">
                  <div className="mb-12 flex items-center justify-between">
                    <span className="font-mono text-4xl text-white/20">{project.number}</span>
                    <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-300">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-4xl font-bold text-white md:text-6xl">{project.title}</h3>
                  <p className="mt-5 text-xl leading-relaxed text-purple-200">{project.tagline}</p>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.links.github ? (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                    >
                      <FaGithub /> View source
                    </a>
                  ) : null}
                </div>
              </div>

              <div className="p-8 md:p-12">
                <p className="text-lg leading-8 text-gray-300">{project.overview}</p>
                <div className="mt-10 grid gap-8 md:grid-cols-2">
                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">The problem</p>
                    <p className="text-sm leading-7 text-gray-400">{project.problem}</p>
                  </div>
                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">The approach</p>
                    <p className="text-sm leading-7 text-gray-400">{project.approach}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-white/10 p-8 md:p-12">
              <div className="mb-8 flex items-center gap-3">
                <FaCodeBranch className="text-cyan-400" />
                <h4 className="font-semibold text-white">System flow</h4>
              </div>
              <div className="grid gap-3 md:grid-cols-5">
                {project.architecture.map((step, stepIndex) => (
                  <div key={step} className="flex items-center gap-3 md:gap-0">
                    <div className="w-full rounded-xl border border-purple-500/20 bg-[#110c2a] px-4 py-4 text-center text-sm text-gray-200">
                      {step}
                    </div>
                    {stepIndex < project.architecture.length - 1 ? <FaArrowRight className="shrink-0 text-purple-500 md:mx-2" /> : null}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 p-8 md:grid-cols-2 md:p-12">
              <DetailList title="Key decisions" icon={<FaLightbulb />} items={project.decisions} />
              <DetailList title="What changed" icon={<FaCheck />} items={project.outcomes} />
            </div>

            <div className="grid gap-8 border-t border-white/10 bg-white/[0.02] p-8 md:grid-cols-2 md:p-12">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">What I learned</p>
                <p className="leading-7 text-gray-300">{project.reflection}</p>
              </div>
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">What comes next</p>
                <p className="leading-7 text-gray-300">{project.next}</p>
              </div>
            </div>
          </Motion.article>
        ))}
      </div>
    </div>
  </div>
);

export default FeaturedWork;
