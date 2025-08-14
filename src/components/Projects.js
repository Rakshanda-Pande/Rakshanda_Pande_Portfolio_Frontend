import { Award, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

const Projects = () => {
    const [visibleItems, setVisibleItems] = useState(new Set());

    const projects = [
        {
            title: "WhatsApp Flows",
            description: "WhatsApp Flow Builder – Developed a no-code platform with drag-and-drop tools for creating and managing WhatsApp Flows. Integrated with Meta's WhatsApp Business Cloud API to save and publish flows directly, enabling non-technical users to deploy automated customer journeys quickly.",
            image: "WhatsApp_Flows_Project_Image.webp",
            tech: ["React", "Node.js", "MongoDB", "MUI"],
            github: "#",
            demo: "#",
        },
        {
            title: "White Label solution With SSO",
            description: "A secure, white-label, multi-tenant SaaS platform with SSO that allows organizations to launch under their own domain with full brand customization, secure data isolation, and granular role-based access. Includes centralized tenant management, integrated billing, invoicing, and usage tracking, along with communication and automation services such as SMS, WhatsApp, chatbots, email, and live agent support.",
            image: "White_Label_Solution_Project_Image.webp",
            tech: ["React", "Node.js", "TypeScript", "MongoDB", "PostgreSQL", "MUI"],
            github: "#",
            demo: "#",
        },
        {
            title: "Organization Workspace",
            description: "A white-label workspace platform enabling organizations to manage employees, HR processes, salaries, reimbursements, projects, and events like birthdays - all under their own branding, logo, and domain. Features role-based permissions to ensure users access only the content relevant to their role.",
            image: "Organization_Workspace_Project_Image.jpeg",
            tech: ["React", "Node.js", "TypeScript", "MongoDB", "PostgreSQL", "MUI"],
            github: "#",
            demo: "#",
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Check if it's the header section
                        if (entry.target.classList.contains('projects-header')) {
                            setTimeout(() => setVisibleItems(prev => new Set([...prev, 'header'])), 100);
                        }
                    }
                });
            },
            { threshold: 0.1 }
        );
        
        const header = document.querySelector('.projects-header');
        if (header) {
            observer.observe(header);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="projects" className="py-20 bg-gray-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`projects-header text-center mb-16 transition-all duration-1000 ${visibleItems.has("header") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                    <div className="flex items-center justify-center mb-4">
                        <Award className="text-cyan-400 mr-3 animate-pulse" size={32} />
                        <h2 className="text-4xl lg:text-5xl font-bold p-5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-text">Featured Projects</h2>
                        <TrendingUp className="text-purple-400 ml-3 animate-pulse" size={32} />
                    </div>
                    <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mx-auto rounded-full animate-pulse"></div>
                    <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                        Showcasing innovative solutions and cutting-edge technology implementations
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-gray-800/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10">
                            <div className="relative overflow-hidden group">
                                <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech) => (
                                        <span key={tech} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm font-medium">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* <div className="flex space-x-4">
                                    <a href={project.github} className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                                        <Github size={20} />
                                        <span>Code</span>
                                    </a>
                                    <a href={project.demo} className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                                        <ExternalLink size={20} />
                                        <span>Demo</span>
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Custom Styles for Header Animation */}
            <style jsx>{`
                @keyframes gradient-text {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                .animate-gradient-text {
                    background-size: 200% 200%;
                    animation: gradient-text 3s ease-in-out infinite;
                }
                
                .animate-fade-in-up {
                    animation: fade-in-up 1s ease-out forwards;
                }
            `}</style>
        </section>
    );
};

export default Projects;