import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import resume from '../data/resume.json';

const gradientPalette = [
    'from-purple-500 to-cyan-500',
    'from-cyan-500 to-blue-500',
    'from-blue-500 to-purple-500',
    'from-purple-500 to-pink-500'
];

const education = (resume.education || []).map((item, index) => ({
    ...item,
    color: gradientPalette[index % gradientPalette.length]
}));

const EducationCard = ({ edu, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
        >
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white/20 bg-[#030014] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shadow-[0_0_20px_rgba(112,66,248,0.5)]">
                <div className="text-white text-lg"><FaGraduationCap /></div>
            </div>

            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#110c2a] p-6 rounded-xl border border-[#2a0e61] shadow-lg hover:shadow-[0_0_30px_rgba(42,14,97,0.5)] transition-shadow duration-300">
                <div className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-r ${edu.color} blur-[50px] opacity-20 rounded-full pointer-events-none`}></div>
                <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                <p className="text-purple-300 font-semibold">{edu.school}</p>
                <p className="text-gray-400 text-sm mb-4">{edu.date}</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                    {edu.details}
                </p>
            </div>
        </motion.div>
    );
};

const Education = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full py-20 z-20 relative">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-16">
                Education
            </h2>

            <div className="relative w-full max-w-4xl px-4 flex flex-col gap-12">
                <div className="absolute left-9 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500 md:-translate-x-1/2 h-full"></div>

                {education.map((edu, index) => (
                    <EducationCard key={index} edu={edu} index={index} />
                ))}
            </div>
        </div>
    );
};

export default Education;
