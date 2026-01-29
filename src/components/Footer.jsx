import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import resume from '../data/resume.json';

const Footer = () => {
    return (
        <footer className="w-full py-8 bg-[#030014] border-t border-[#ffffff1a] mt-20">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} {resume.basics?.name || 'Your Name'}. All rights reserved.
                </p>

                <div className="flex items-center gap-6">
                    {resume.basics?.links?.github ? (
                        <a href={resume.basics.links.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <FaGithub size={20} />
                        </a>
                    ) : null}
                    {resume.basics?.links?.linkedin ? (
                        <a href={resume.basics.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <FaLinkedin size={20} />
                        </a>
                    ) : null}
                    {resume.basics?.links?.twitter ? (
                        <a href={resume.basics.links.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <FaTwitter size={20} />
                        </a>
                    ) : null}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
