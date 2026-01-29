import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaPhone } from 'react-icons/fa';
import resume from '../data/resume.json';

const Contact = () => {
    const { basics = {}, cta = {} } = resume;
    const links = basics.links || {};

    return (
        <div className="w-full py-20 px-4 z-20 relative">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-16">
                    Get In Touch
                </h2>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="w-full max-w-2xl mx-auto bg-[#110c2a] p-8 rounded-2xl border border-[#2a0e61]"
                >
                    <p className="text-gray-400 mb-8 text-center">
                        {cta.availability || "I'm currently open to new opportunities and collaborations."}
                        {cta.message ? ` ${cta.message}` : ''}
                    </p>

                    <div className="flex flex-col gap-6 mb-8">
                        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                            <a href={`mailto:${basics.email || ''}`} className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                                <div className="w-10 h-10 rounded-full bg-[#2a0e61] flex items-center justify-center text-cyan-400">
                                    <FaEnvelope />
                                </div>
                                <span>{basics.email || 'you@email.com'}</span>
                            </a>
                            <a href={`tel:${basics.phone || ''}`} className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                                <div className="w-10 h-10 rounded-full bg-[#2a0e61] flex items-center justify-center text-purple-400">
                                    <FaPhone />
                                </div>
                                <span>{basics.phone || '+1 (000) 000-0000'}</span>
                            </a>
                        </div>
                        {basics.location ? (
                            <p className="text-center text-gray-400 text-sm">
                                {basics.location}
                            </p>
                        ) : null}
                        <div className="flex gap-4 justify-center mt-4">
                            {links.github ? (
                                <a href={links.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#2a0e61] flex items-center justify-center text-white hover:bg-purple-600 transition-colors">
                                    <FaGithub size={20} />
                                </a>
                            ) : null}
                            {links.linkedin ? (
                                <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#2a0e61] flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                                    <FaLinkedin size={20} />
                                </a>
                            ) : null}
                            {links.twitter ? (
                                <a href={links.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#2a0e61] flex items-center justify-center text-white hover:bg-sky-500 transition-colors">
                                    <FaTwitter size={20} />
                                </a>
                            ) : null}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
