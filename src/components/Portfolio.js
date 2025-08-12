import React, { useState, useEffect } from "react";
import { Mail, Github, Linkedin, ExternalLink, Menu, X, Code, Briefcase, GraduationCap, ChevronDown, Star } from "lucide-react";

const Portfolio = () => {
    const [isVisible, setIsVisible] = useState({});
    const [skillProgress, setSkillProgress] = useState({});
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll("[id]").forEach((el) => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (isVisible.skills) {
            const skills = ["react", "javascript", "python", "nodejs", "design"];
            const values = [95, 90, 85, 80, 75];

            skills.forEach((skill, index) => {
                setTimeout(() => {
                    setSkillProgress((prev) => ({ ...prev, [skill]: values[index] }));
                }, index * 200);
            });
        }
    }, [isVisible.skills]);

    const projects = [
        {
            title: "E-Commerce Platform",
            description: "Full-stack React application with Node.js backend, featuring user authentication, payment integration, and admin dashboard.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
            tech: ["React", "Node.js", "MongoDB", "Stripe"],
            github: "#",
            demo: "#",
        },
        {
            title: "AI Task Manager",
            description: "Smart productivity app using machine learning to prioritize tasks and suggest optimal scheduling based on user behavior.",
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
            tech: ["Python", "TensorFlow", "React", "FastAPI"],
            github: "#",
            demo: "#",
        },
        {
            title: "Real-time Chat App",
            description: "Modern chat application with real-time messaging, file sharing, and video calling capabilities using WebRTC.",
            image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=400&h=250&fit=crop",
            tech: ["React", "Socket.io", "WebRTC", "Express"],
            github: "#",
            demo: "#",
        },
    ];

    const skills = [
        { name: "React", level: skillProgress.react || 0, color: "from-blue-400 to-blue-600" },
        { name: "JavaScript", level: skillProgress.javascript || 0, color: "from-yellow-400 to-yellow-600" },
        { name: "Python", level: skillProgress.python || 0, color: "from-green-400 to-green-600" },
        { name: "Node.js", level: skillProgress.nodejs || 0, color: "from-emerald-400 to-emerald-600" },
        { name: "UI/UX Design", level: skillProgress.design || 0, color: "from-purple-400 to-purple-600" },
    ];

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        setMobileMenuOpen(false);
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Portfolio</div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-8">
                            {["About", "Projects", "Skills", "Contact"].map((item) => (
                                <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                                    {item}
                                </button>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {mobileMenuOpen && (
                        <div className="md:hidden pb-4">
                            {["About", "Projects", "Skills", "Contact"].map((item) => (
                                <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="block w-full text-left py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                                    {item}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </nav>

            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-xl text-gray-400 font-medium">Hello, I'm</h2>
                                <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Rakshanda Pande</h1>
                                <h3 className="text-2xl lg:text-3xl text-gray-300 font-semibold">Full Stack Developer & UI/UX Designer</h3>
                            </div>

                            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">Passionate about creating exceptional digital experiences through clean code and thoughtful design. I specialize in React, Node.js, and modern web technologies.</p>

                            <div className="flex flex-wrap gap-4">
                                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">View My Work</button>
                                <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-3 rounded-full font-semibold transition-all duration-300">Download CV</button>
                            </div>

                            <div className="flex space-x-6">
                                {[
                                    { icon: Github, href: "#" },
                                    { icon: Linkedin, href: "#" },
                                    { icon: Mail, href: "#" },
                                ].map(({ icon: Icon, href }, index) => (
                                    <a key={index} href={href} className="p-3 bg-gray-800 hover:bg-cyan-500 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25">
                                        <Icon size={24} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-center lg:justify-end">
                            <div className="relative">
                                <div className="w-80 h-80 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full p-2">
                                    <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center">
                                        <div className="text-8xl">👨‍💻</div>
                                    </div>
                                </div>
                                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full blur opacity-20 animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <ChevronDown size={32} className="text-cyan-400" />
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 bg-gray-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">About Me</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
                            <div className="flex items-center mb-6">
                                <div className="p-3 bg-cyan-500/20 rounded-lg mr-4">
                                    <Briefcase size={32} className="text-cyan-400" />
                                </div>
                                <h3 className="text-2xl font-bold">Experience</h3>
                            </div>
                            <p className="text-gray-300 mb-6 leading-relaxed">5+ years of experience in full-stack development, working with startups and established companies to build scalable web applications.</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">Senior Developer</span>
                                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">Team Lead</span>
                            </div>
                        </div>

                        <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
                            <div className="flex items-center mb-6">
                                <div className="p-3 bg-blue-500/20 rounded-lg mr-4">
                                    <GraduationCap size={32} className="text-blue-400" />
                                </div>
                                <h3 className="text-2xl font-bold">Education</h3>
                            </div>
                            <p className="text-gray-300 mb-6 leading-relaxed">Master's in Computer Science from Stanford University. Continuous learner, always exploring new technologies and methodologies.</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">M.S. Computer Science</span>
                                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">AWS Certified</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Skills & Expertise</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {skills.map((skill, index) => (
                            <div key={skill.name} className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                                    <div className="flex items-center space-x-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={16} className={`${i < Math.floor(skill.level / 20) ? "text-yellow-400 fill-current" : "text-gray-600"}`} />
                                        ))}
                                        <span className="ml-2 text-gray-400">{skill.level}%</span>
                                    </div>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                                    <div className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out rounded-full`} style={{ width: `${skill.level}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 bg-gray-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Featured Projects</h2>
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

                                    <div className="flex space-x-4">
                                        <a href={project.github} className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                                            <Github size={20} />
                                            <span>Code</span>
                                        </a>
                                        <a href={project.demo} className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                                            <ExternalLink size={20} />
                                            <span>Demo</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Let's Work Together</h2>

                    <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                        <h3 className="text-2xl font-bold mb-4">Ready to bring your ideas to life?</h3>
                        <p className="text-gray-400 mb-8 text-lg leading-relaxed">I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together!</p>

                        <div className="flex justify-center space-x-6 mb-8">
                            {[
                                { icon: Mail, href: "mailto:alex@example.com", label: "Email" },
                                { icon: Linkedin, href: "#", label: "LinkedIn" },
                                { icon: Github, href: "#", label: "GitHub" },
                            ].map(({ icon: Icon, href, label }, index) => (
                                <a key={index} href={href} className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25" title={label}>
                                    <Icon size={24} />
                                </a>
                            ))}
                        </div>

                        <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">Get In Touch</button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 bg-gray-800/80 border-t border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-gray-400">© 2025 Rakshanda Pande. Built with React & Tailwind CSS</p>
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;
