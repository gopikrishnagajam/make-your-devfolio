import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="relative flex flex-col h-screen w-full items-center justify-center z-10">
            <div className="flex flex-col items-center justify-center w-full h-full max-w-[1200px] mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex flex-col items-center justify-center text-center"
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        Gopi Krishna Gajam
                    </h1>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                            Full-Stack Software Engineer
                        </span>
                    </h2>

                    <p className="text-gray-400 text-lg md:text-xl max-w-[800px] mb-10">
                        Full-stack software engineer with expertise in Node.js, Django, PostgreSQL, and AWS. Built 3 production applications with multi-tenant architecture, real-time messaging, CI/CD automation, and cloud deployment—handling 10K+ daily transactions with 99.9% uptime. Strong in backend development, system design, and DevOps practices.
                    </p>

                    <div className="flex gap-4">
                        <a
                            href="#projects"
                            className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold hover:opacity-90 transition-opacity"
                        >
                            View Work
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 rounded-full border border-purple-500 text-purple-400 font-semibold hover:bg-purple-500/10 transition-colors"
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
