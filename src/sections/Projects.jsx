import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaServer, FaShoppingCart, FaRobot } from 'react-icons/fa';
import resume from '../data/resume.json';

const gradientPalette = [
    'from-purple-500 to-cyan-500',
    'from-blue-500 to-cyan-500',
    'from-green-500 to-emerald-500',
    'from-cyan-500 to-blue-500',
    'from-purple-500 to-pink-500'
];

const projectIcons = [FaServer, FaShoppingCart, FaRobot];

const projects = (resume.projects || []).map((item, index) => {
    const Icon = projectIcons[index % projectIcons.length];
    return {
        ...item,
        icon: <Icon />,
        color: gradientPalette[index % gradientPalette.length]
    };
});

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group relative bg-[#110c2a] rounded-xl overflow-hidden border border-[#2a0e61] hover:border-purple-500/50 transition-colors duration-300 h-full"
        >
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

            <div className="p-8 relative z-10 flex flex-col h-full">
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center text-2xl text-white mb-6 shadow-lg`}>
                    {project.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all">
                    {project.title}
                </h3>

                {project.category ? (
                    <p className="text-purple-400 text-sm font-semibold mb-4 uppercase tracking-wider">
                        {project.category}
                    </p>
                ) : null}

                <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                    {project.description}
                </p>

                {(project.links?.github || project.links?.live) ? (
                    <div className="flex gap-4 mb-4">
                        {project.links?.github ? (
                            <a
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 text-sm"
                            >
                                <FaGithub /> Code
                            </a>
                        ) : null}
                        {project.links?.live ? (
                            <a
                                href={project.links.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 text-sm"
                            >
                                <FaExternalLinkAlt /> Live
                            </a>
                        ) : null}
                    </div>
                ) : null}

                <div className="flex flex-wrap gap-2">
                    {(project.tags || []).map((tag, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-[#2a0e61]/50 border border-[#2a0e61] text-gray-300 text-xs">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <div className="w-full py-20 px-4 z-20 relative">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-16"
                >
                    Featured Projects
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
