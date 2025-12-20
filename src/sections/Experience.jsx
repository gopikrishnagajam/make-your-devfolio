import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCode, FaRobot } from 'react-icons/fa';

const experiences = [
    {
        title: "Software Developer Intern (DUSSAP)",
        company: "DUSSAP",
        date: "June 2025 – Present",
        description: "Architected and deployed 3 full-stack applications using Node.js, Django, PostgreSQL, and React Native. Designed 20+ database schemas with Sequelize and Django ORM. Built 100+ REST API endpoints handling authentication, real-time messaging, e-commerce checkout, and document management workflows. Implemented cloud infrastructure on AWS with Docker containerization and Kubernetes orchestration. Automated CI/CD pipelines using GitHub Actions achieving 40% faster deployment cycles. Integrated EC2, RDS, and S3 services with auto-scaling for 3x traffic handling capacity. Developed secure authentication systems with JWT tokens, role-based access control, and session management. Implemented OTP verification, CSRF protection, and password hashing reducing unauthorized access attempts by 95%. Built WebSocket-based messaging serving 500+ concurrent connections. Implemented Redis caching reducing database queries by 60%. Developed spatial indexing decreasing geolocation query latency by 45% with sub-200ms average response times.",
        tech: "Node.js, Django, PostgreSQL, React Native, AWS, Docker, Kubernetes, GitHub Actions, JWT, WebSockets, Redis",
        icon: <FaBriefcase />,
        color: "from-purple-500 to-cyan-500"
    }
];

const ExperienceCard = ({ experience, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
        >
            {/* Timeline Line */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white/20 bg-[#030014] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shadow-[0_0_20px_rgba(112,66,248,0.5)]">
                <div className="text-white text-lg">{experience.icon}</div>
            </div>

            {/* Content Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#110c2a] p-6 rounded-xl border border-[#2a0e61] shadow-lg hover:shadow-[0_0_30px_rgba(42,14,97,0.5)] transition-shadow duration-300">
                <div className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-r ${experience.color} blur-[50px] opacity-20 rounded-full pointer-events-none`}></div>
                <h3 className="text-xl font-bold text-white">{experience.title}</h3>
                <p className="text-purple-300 font-semibold">{experience.company}</p>
                <p className="text-gray-400 text-sm mb-4">{experience.date}</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                    {experience.description}
                </p>
            </div>
        </motion.div >
    );
};

const Experience = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full py-20 z-20 relative">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-16">
                Experience
            </h2>

            <div className="relative w-full max-w-4xl px-4 flex flex-col gap-12">
                {/* Central Line */}
                <div className="absolute left-9 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500 md:-translate-x-1/2 h-full"></div>

                {experiences.map((exp, index) => (
                    <ExperienceCard key={index} experience={exp} index={index} />
                ))}
            </div>
        </div>
    );
};

export default Experience;
