import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaTools, FaTrophy } from 'react-icons/fa';
import resume from '../data/resume.json';

const gradientPalette = [
    'from-purple-500 to-cyan-500',
    'from-cyan-500 to-blue-500',
    'from-blue-500 to-purple-500',
    'from-purple-500 to-pink-500',
    'from-pink-500 to-red-500',
    'from-red-500 to-orange-500'
];

const iconPalette = [FaCode, FaTools, FaTrophy];

const skillCategories = (resume.skills || []).map((item, index) => {
    const Icon = iconPalette[index % iconPalette.length];
    return {
        title: item.title,
        skills: item.items || [],
        icon: <Icon />,
        color: gradientPalette[index % gradientPalette.length]
    };
});

const Skills = () => {
    return (
        <div className="w-full py-20 px-4 z-20 relative">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-16">
                    Technical Skills
                </h2>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-[#110c2a] p-6 rounded-xl border border-[#2a0e61]"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center text-white text-xl`}>
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white">{category.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, i) => (
                                    <span key={i} className="px-3 py-1 rounded-full bg-[#2a0e61] border border-purple-500/30 text-gray-300 text-sm">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>


            </div>
        </div>
    );
};

export default Skills;
