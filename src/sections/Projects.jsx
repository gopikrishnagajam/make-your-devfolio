import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaServer, FaShoppingCart, FaRobot } from 'react-icons/fa';

const projects = [
    {
        title: "Vakalat",
        category: "Multi-tenant Law Firm Management SaaS Platform",
        description: "Architected multi-tenant SaaS platform with JWT authentication, role-based access control, and session management. Supports law firms with case tracking, client management, and document handling. Designed 20+ database schemas using Sequelize ORM. Built RESTful API with 50+ endpoints handling India-specific legal workflows including case management, court hierarchies, and hearing schedules. Developed collaborative features: discussions, task diaries, document repository with file uploads, and email notifications. Containerized application using Docker for deployment.",
        tags: ["Node.js", "PostgreSQL", "Docker", "React.js", "JWT", "Sequelize"],
        icon: <FaServer />,
        color: "from-purple-500 to-cyan-500"
    },
    {
        title: "ShopNextDoor",
        category: "Hyperlocal E-commerce Marketplace Platform",
        description: "Built full-stack marketplace with role-based dashboards for buyers and sellers. Implemented cart/checkout flow, OTP-based order verification, and returns management using Django REST Framework and PostgreSQL. Deployed production infrastructure on AWS with EC2 instances, RDS database, and S3 media storage. Implemented CI/CD pipelines using GitHub Actions and Kubernetes with automated health checks and rollback capabilities. Implemented secure authentication with JWT tokens. Designed RESTful APIs for product listings, order management, and customer support modules.",
        tags: ["Django REST", "React Native", "AWS", "PostgreSQL", "Kubernetes", "GitHub Actions"],
        icon: <FaShoppingCart />,
        color: "from-blue-500 to-cyan-500"
    },
    {
        title: "StudyBuddy",
        category: "Collaborative Learning Platform",
        description: "Developed real-time collaboration platform for students enabling creating and joining study groups with subject-based filtering. Includes membership approval workflows and capacity management. Built using Django 5.2 and modular app architecture. Implemented real-time messaging system with threaded discussions, user attribution, and live updates. Features group communications and activity feeds on interactive dashboards. Built secure authentication and authorization with role-based access control including CSRF protection, password hashing, custom validation logic, and profile management features.",
        tags: ["Django", "SQLite", "WebSockets", "Materialize CSS", "Real-time"],
        icon: <FaRobot />,
        color: "from-green-500 to-emerald-500"
    }
];

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

                <p className="text-purple-400 text-sm font-semibold mb-4 uppercase tracking-wider">
                    {project.category}
                </p>

                <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
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
