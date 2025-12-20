import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaPhone } from 'react-icons/fa';

const Contact = () => {
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
                        I'm currently open to new opportunities and collaborations.
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="flex flex-col gap-6 mb-8">
                        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                            <a href="mailto:gopikrishnagajam@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                                <div className="w-10 h-10 rounded-full bg-[#2a0e61] flex items-center justify-center text-cyan-400">
                                    <FaEnvelope />
                                </div>
                                <span>gopikrishnagajam@gmail.com</span>
                            </a>
                            <a href="tel:+14694344746" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                                <div className="w-10 h-10 rounded-full bg-[#2a0e61] flex items-center justify-center text-purple-400">
                                    <FaPhone />
                                </div>
                                <span>+1 (469) 434-4746</span>
                            </a>
                        </div>
                        <div className="flex gap-4 justify-center mt-4">
                            <a href="https://github.com/gopikrishnagajam" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#2a0e61] flex items-center justify-center text-white hover:bg-purple-600 transition-colors">
                                <FaGithub size={20} />
                            </a>
                            <a href="https://linkedin.com/in/gopikrishnagajam" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#2a0e61] flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                                <FaLinkedin size={20} />
                            </a>
                        </div>
                    </div>

                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full bg-[#030014] border border-[#2a0e61] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full bg-[#030014] border border-[#2a0e61] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                        />
                        <textarea
                            rows="4"
                            placeholder="Your Message"
                            className="w-full bg-[#030014] border border-[#2a0e61] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
                        ></textarea>
                        <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity">
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
