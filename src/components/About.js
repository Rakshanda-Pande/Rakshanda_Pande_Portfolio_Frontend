import React, { useState, useEffect, useRef } from "react";
import { Briefcase, GraduationCap, Code, Database, Award, MapPin, Calendar, Star, TrendingUp, Users, Clock } from "lucide-react";

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [visibleItems, setVisibleItems] = useState(new Set());
    const sectionRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Stagger the animation of items
                    setTimeout(() => setVisibleItems(prev => new Set([...prev, 'header'])), 100);
                    setTimeout(() => setVisibleItems(prev => new Set([...prev, 'experience'])), 300);
                    setTimeout(() => setVisibleItems(prev => new Set([...prev, 'education'])), 500);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // const stats = [
    //     { icon: Clock, value: "3+", label: "Years Experience", color: "from-cyan-400 to-blue-500" },
    //     { icon: Code, value: "50+", label: "Projects Built", color: "from-purple-400 to-pink-500" },
    //     { icon: TrendingUp, value: "95%", label: "Success Rate", color: "from-green-400 to-emerald-500" },
    //     { icon: Users, value: "15+", label: "Happy Clients", color: "from-orange-400 to-red-500" }
    // ];

    return (
        <section id="about" className="py-20 bg-gray-800/50 relative overflow-hidden" ref={sectionRef}>
            {/* Enhanced Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-transparent to-purple-900/10"></div>
            <div className="absolute top-20 right-20 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float-delayed"></div>
            <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-blue-500/3 rounded-full blur-2xl animate-pulse"></div>
            
            {/* Animated grid background */}
            <div className="absolute inset-0 opacity-5">
                <div className="w-full h-full" style={{
                    backgroundImage: 'linear-gradient(90deg, #333 1px, transparent 1px), linear-gradient(0deg, #333 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }}></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header with enhanced animations */}
                <div className={`text-center mb-16 transition-all duration-1000 ${visibleItems.has('header') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-text">
                        About Me
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full animate-pulse"></div>
                    <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                        Passionate developer with expertise in full-stack development and database management
                    </p>
                </div>

                {/* Stats Section */}
                {/* <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 transition-all duration-1000 delay-200 ${visibleItems.has('header') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    {stats.map((stat, index) => (
                        <div 
                            key={index}
                            className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-lg group"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className={`w-10 h-10 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                                <stat.icon size={20} className="text-white" />
                            </div>
                            <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                                {stat.value}
                            </div>
                            <div className="text-gray-400 text-sm">{stat.label}</div>
                        </div>
                    ))}
                </div> */}

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Enhanced Experience Section */}
                    <div className={`bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all duration-700 hover:shadow-xl hover:shadow-cyan-500/10 group ${visibleItems.has('experience') ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
                        <div className="flex items-center mb-8">
                            <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl mr-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                                <Briefcase size={32} className="text-cyan-400 group-hover:animate-pulse" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-1 group-hover:text-cyan-400 transition-colors duration-300">Professional Experience</h3>
                                <p className="text-gray-400 text-sm">Building innovative solutions</p>
                            </div>
                        </div>

                        <div className="space-y-8 relative">
                            {/* Enhanced Timeline line with animation */}
                            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500 opacity-30">
                                <div className="absolute top-0 w-0.5 h-full bg-gradient-to-b from-purple-400 to-cyan-400 animate-timeline-grow"></div>
                            </div>
                            
                            {/* Full-Stack Development with enhanced animations */}
                            <div className="relative group/item hover:scale-[1.02] transition-all duration-300">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl flex items-center justify-center border-2 border-purple-500/30 relative z-10 group-hover/item:scale-110 group-hover/item:border-purple-400 transition-all duration-300">
                                        <Code size={20} className="text-purple-400 group-hover/item:animate-bounce" />
                                        <div className="absolute inset-0 bg-purple-400/20 rounded-xl blur-md opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <div className="ml-6 flex-1">
                                        <div className="flex items-center justify-between mb-3">
                                            <h4 className="text-xl font-bold text-purple-400 group-hover/item:text-purple-300 transition-colors duration-300">Full-Stack Developer</h4>
                                            <div className="flex items-center text-purple-300 bg-purple-500/10 px-3 py-1 rounded-full hover:bg-purple-500/20 transition-colors duration-300">
                                                <Calendar size={14} className="mr-1" />
                                                <span className="text-sm font-medium">2023 - Present</span>
                                            </div>
                                        </div>
                                        <p className="text-gray-300 leading-relaxed mb-4 group-hover/item:text-gray-200 transition-colors duration-300">
                                            Leading full-stack development initiatives using modern MERN stack technologies. 
                                            Architecting scalable applications with focus on performance and user experience.
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'TypeScript'].map((tech, index) => (
                                                <span 
                                                    key={tech}
                                                    className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium border border-blue-500/30 hover:bg-blue-500/30 hover:scale-105 transition-all duration-300 cursor-default"
                                                    style={{ animationDelay: `${index * 0.1}s` }}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Database Experience with enhanced animations */}
                            <div className="relative group/item hover:scale-[1.02] transition-all duration-300">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-xl flex items-center justify-center border-2 border-cyan-500/30 relative z-10 group-hover/item:scale-110 group-hover/item:border-cyan-400 transition-all duration-300">
                                        <Database size={20} className="text-cyan-400 group-hover/item:animate-pulse" />
                                        <div className="absolute inset-0 bg-cyan-400/20 rounded-xl blur-md opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <div className="ml-6 flex-1">
                                        <div className="flex items-center justify-between mb-3">
                                            <h4 className="text-xl font-bold text-cyan-400 group-hover/item:text-cyan-300 transition-colors duration-300">Database Developer</h4>
                                            <div className="flex items-center text-cyan-300 bg-cyan-500/10 px-3 py-1 rounded-full hover:bg-cyan-500/20 transition-colors duration-300">
                                                <Calendar size={14} className="mr-1" />
                                                <span className="text-sm font-medium">2021 - 2023</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center mb-3">
                                            <Star size={16} className="text-yellow-400 mr-2 animate-pulse" />
                                            <span className="text-white font-semibold text-sm">2.9 Years of Database Expertise</span>
                                        </div>
                                        <p className="text-gray-300 leading-relaxed mb-4 group-hover/item:text-gray-200 transition-colors duration-300">
                                            Specialized in enterprise database solutions, creating robust PL/SQL packages and optimizing 
                                            complex data operations across Oracle environments.
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {['SQL', 'PL/SQL', 'Oracle', 'PostgreSQL'].map((tech, index) => (
                                                <span 
                                                    key={tech}
                                                    className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs font-medium border border-orange-500/30 hover:bg-orange-500/30 hover:scale-105 transition-all duration-300 cursor-default"
                                                    style={{ animationDelay: `${index * 0.1}s` }}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-gray-700/50">
                            {[
                                { icon: Award, text: "Senior Developer", color: "from-cyan-500/20 to-cyan-600/20 text-cyan-400 border-cyan-500/30" },
                                { text: "Team Lead", color: "from-purple-500/20 to-purple-600/20 text-purple-400 border-purple-500/30" },
                                { text: "Full-Stack", color: "from-blue-500/20 to-blue-600/20 text-blue-400 border-blue-500/30" }
                            ].map((badge, index) => (
                                <span 
                                    key={index}
                                    className={`px-4 py-2 bg-gradient-to-r ${badge.color} rounded-full text-sm font-medium border flex items-center hover:scale-105 transition-all duration-300 cursor-default`}
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    {badge.icon && <badge.icon size={16} className="mr-2" />}
                                    {badge.text}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Enhanced Education Section */}
                    <div className={`bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-400/50 transition-all duration-700 hover:shadow-xl hover:shadow-blue-500/10 group ${visibleItems.has('education') ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
                        <div className="flex items-center mb-8">
                            <div className="p-4 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl mr-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                                <GraduationCap size={32} className="text-blue-400 group-hover:animate-pulse" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-1 group-hover:text-blue-400 transition-colors duration-300">Education</h3>
                                <p className="text-gray-400 text-sm">Academic foundation</p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            {/* Master's Degree with enhanced animations */}
                            <div className="relative group/edu">
                                <div className="bg-gradient-to-br from-blue-500/5 to-purple-600/5 rounded-xl p-6 border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center">
                                            <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mr-3 animate-pulse"></div>
                                            <h4 className="text-lg font-bold text-blue-400 group-hover/edu:text-blue-300 transition-colors duration-300">Master's Degree</h4>
                                        </div>
                                        <div className="flex items-center text-blue-300 bg-blue-500/10 px-3 py-1 rounded-full hover:bg-blue-500/20 transition-colors duration-300">
                                            <Calendar size={14} className="mr-1" />
                                            <span className="text-sm font-medium">2020 - 2022</span>
                                        </div>
                                    </div>
                                    <h5 className="font-semibold text-white mb-2 group-hover/edu:text-gray-100 transition-colors duration-300">Master's in Computer Management</h5>
                                    <div className="flex items-center text-gray-300 mb-3">
                                        <MapPin size={16} className="mr-2 text-blue-400 animate-pulse" />
                                        <span className="text-sm">Rashtrasant Tukadoji Maharaj (RTMNU), Nagpur</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium border border-blue-500/30 hover:scale-105 transition-all duration-300">M.C.M</span>
                                    </div>
                                </div>
                            </div>

                            {/* Bachelor's Degree with enhanced animations */}
                            <div className="relative group/edu">
                                <div className="bg-gradient-to-br from-green-500/5 to-blue-600/5 rounded-xl p-6 border border-green-500/10 hover:border-green-500/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center">
                                            <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mr-3 animate-pulse"></div>
                                            <h4 className="text-lg font-bold text-green-400 group-hover/edu:text-green-300 transition-colors duration-300">Bachelor's Degree</h4>
                                        </div>
                                        <div className="flex items-center text-green-300 bg-green-500/10 px-3 py-1 rounded-full hover:bg-green-500/20 transition-colors duration-300">
                                            <Calendar size={14} className="mr-1" />
                                            <span className="text-sm font-medium">2017 - 2019</span>
                                        </div>
                                    </div>
                                    <h5 className="font-semibold text-white mb-2 group-hover/edu:text-gray-100 transition-colors duration-300">Bachelor's of Science in Information Technology</h5>
                                    <div className="flex items-center text-gray-300 mb-3">
                                        <MapPin size={16} className="mr-2 text-green-400 animate-pulse" />
                                        <span className="text-sm">Rashtrasant Tukadoji Maharaj (RTMNU), Nagpur</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium border border-green-500/30 hover:scale-105 transition-all duration-300">B.Sc (IT)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Enhanced Summary Stats */}
                        <div className="mt-8 pt-6 border-t border-gray-700/50">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center p-4 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-lg border border-blue-500/20 hover:scale-105 hover:border-blue-400/40 transition-all duration-300 group/stat">
                                    <div className="text-2xl font-bold text-blue-400 group-hover/stat:text-blue-300 transition-colors duration-300">5+</div>
                                    <div className="text-gray-300 text-sm">Years Learning</div>
                                </div>
                                <div className="text-center p-4 bg-gradient-to-br from-purple-500/10 to-pink-600/10 rounded-lg border border-purple-500/20 hover:scale-105 hover:border-purple-400/40 transition-all duration-300 group/stat">
                                    <div className="text-2xl font-bold text-purple-400 group-hover/stat:text-purple-300 transition-colors duration-300">2</div>
                                    <div className="text-gray-300 text-sm">Degrees</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom styles */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                }
                
                @keyframes float-delayed {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-30px) rotate(-5deg); }
                }
                
                @keyframes gradient-text {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                
                @keyframes timeline-grow {
                    from { height: 0%; }
                    to { height: 100%; }
                }
                
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                
                .animate-float-delayed {
                    animation: float-delayed 8s ease-in-out infinite;
                }
                
                .animate-gradient-text {
                    background-size: 200% 200%;
                    animation: gradient-text 3s ease-in-out infinite;
                }
                
                .animate-timeline-grow {
                    animation: timeline-grow 2s ease-out forwards;
                }
                
                .animate-fade-in-up {
                    animation: fade-in-up 1s ease-out forwards;
                }
            `}</style>
        </section>
    );
};

export default About;