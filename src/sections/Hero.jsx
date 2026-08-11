import { motion as Motion } from 'framer-motion';
import { FaArrowDown, FaArrowRight, FaCircle } from 'react-icons/fa';
import portfolio from '../data/portfolio';

const profileImage = `${import.meta.env.BASE_URL}profile.jpg`;

const Hero = () => {
  const { identity, now, highlights } = portfolio;

  return (
    <div className="relative flex min-h-screen w-full items-center overflow-hidden px-4 pb-16 pt-28">
      <div className="absolute left-1/2 top-1/3 -z-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-purple-700/10 blur-[120px]" />
      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <Motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur">
            <FaCircle className="text-[8px] text-emerald-400 shadow-[0_0_12px_#34d399]" />
            {identity.availability}
          </div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-400">{identity.eyebrow}</p>
          <h1 className="max-w-5xl text-5xl font-bold leading-[1.04] tracking-tight text-white md:text-7xl lg:text-[5.4rem]">
            {identity.headline}
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400 md:text-xl">{identity.intro}</p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#work" className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 px-7 py-3.5 font-semibold text-white transition-transform hover:-translate-y-0.5">
              Explore my work <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#journey" className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-semibold text-gray-200 transition-colors hover:bg-white/10">
              More about me <FaArrowDown />
            </a>
          </div>

          <div className="mt-14 grid max-w-2xl grid-cols-3 gap-3 border-t border-white/10 pt-8">
            {highlights.map((item) => (
              <div key={item.label}>
                <p className="text-2xl font-bold text-white md:text-3xl">{item.value}</p>
                <p className="mt-1 text-xs leading-5 text-gray-500 md:text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </Motion.div>

        <Motion.aside
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative overflow-hidden rounded-[2rem] border border-purple-400/20 bg-[#0d0920]/90 p-5 shadow-[0_30px_100px_rgba(42,14,97,0.45)] backdrop-blur md:p-6"
        >
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-purple-500/20 to-cyan-500/10 p-2">
            <img
              src={profileImage}
              alt="Gopi Krishna Gajam"
              width="386"
              height="386"
              loading="eager"
              fetchPriority="high"
              className="aspect-square w-full rounded-[1.15rem] object-cover"
            />
            <div className="absolute inset-x-2 bottom-2 rounded-b-[1.15rem] bg-gradient-to-t from-[#080518] via-[#080518]/70 to-transparent px-5 pb-5 pt-16">
              <p className="text-xl font-bold text-white">{identity.name}</p>
              <p className="mt-1 text-sm text-gray-300">{identity.role} · {identity.location}</p>
            </div>
          </div>
          <div className="px-2 pb-2 pt-7">
            <div className="mb-5 flex items-center justify-between">
              <p className="text-sm font-semibold text-cyan-400">{now.label}</p>
              <div className="flex gap-1.5"><span className="h-2 w-2 rounded-full bg-purple-500" /><span className="h-2 w-2 rounded-full bg-cyan-400" /></div>
            </div>
            <h2 className="text-2xl font-bold leading-tight text-white">{now.title}</h2>
            <p className="mt-4 text-sm leading-6 text-gray-400">{now.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {now.topics.map((topic) => (
                <span key={topic} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-300">{topic}</span>
              ))}
            </div>
            <div className="mt-7 border-t border-white/10 pt-5">
              <p className="text-xs leading-5 text-gray-500">{identity.contentNote}</p>
            </div>
          </div>
        </Motion.aside>
      </div>
    </div>
  );
};

export default Hero;
