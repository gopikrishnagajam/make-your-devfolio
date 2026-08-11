import { motion as Motion } from 'framer-motion';
import { FaArrowRight, FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import portfolio from '../data/portfolio';

const Contact = () => {
  const { identity, contact } = portfolio;

  return (
    <div className="relative z-20 w-full px-4 py-24 md:py-36">
      <Motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-purple-400/20 bg-gradient-to-br from-[#160d35] via-[#0d0920] to-[#071622] p-8 md:p-14 lg:p-20"
      >
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-cyan-500/10 blur-[100px]" />
        <div className="relative grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-400">Start a conversation</p>
            <h2 className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">{contact.heading}</h2>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-gray-300">{contact.message}</p>
            <a href={`mailto:${identity.email}`} className="group mt-9 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 font-semibold text-[#080518] transition-transform hover:-translate-y-0.5">
              <FaEnvelope /> {identity.email} <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/10 p-6 backdrop-blur">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-purple-300">Good reasons to reach out</p>
            <ul className="space-y-3 text-gray-300">
              {contact.prompts.map((prompt) => <li key={prompt} className="border-b border-white/10 pb-3">{prompt}</li>)}
            </ul>
            <p className="mt-6 flex items-center gap-2 text-sm text-gray-500"><FaMapMarkerAlt /> {identity.location}</p>
            <div className="mt-5 flex gap-3">
              <a href={identity.links.github} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-300 transition-colors hover:border-purple-400/40 hover:text-white" aria-label="GitHub profile">
                <FaGithub />
              </a>
              <a href={identity.links.linkedin} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-300 transition-colors hover:border-cyan-400/40 hover:text-white" aria-label="LinkedIn profile">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </Motion.div>
    </div>
  );
};

export default Contact;
