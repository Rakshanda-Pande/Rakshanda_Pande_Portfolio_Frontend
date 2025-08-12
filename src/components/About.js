import React from "react";
import { Briefcase, GraduationCap, Code, Database, Award, MapPin, Calendar, Star } from "lucide-react";

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-800/50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-transparent to-purple-900/10"></div>
            <div className="absolute top-20 right-20 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                        About Me
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Experience Section */}
                    <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/10 group">
                        <div className="flex items-center mb-8">
                            <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                                <Briefcase size={32} className="text-cyan-400" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-1">Professional Experience</h3>
                                <p className="text-gray-400 text-sm">Building innovative solutions</p>
                            </div>
                        </div>

                        <div className="space-y-8 relative">
                            {/* Timeline line */}
                            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500 opacity-30"></div>
                            
                            {/* Full-Stack Development */}
                            <div className="relative">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl flex items-center justify-center border-2 border-purple-500/30 relative z-10">
                                        <Code size={20} className="text-purple-400" />
                                    </div>
                                    <div className="ml-6 flex-1">
                                        <div className="flex items-center justify-between mb-3">
                                            <h4 className="text-xl font-bold text-purple-400">Full-Stack Developer</h4>
                                            <div className="flex items-center text-purple-300 bg-purple-500/10 px-3 py-1 rounded-full">
                                                <Calendar size={14} className="mr-1" />
                                                <span className="text-sm font-medium">2023 - Present</span>
                                            </div>
                                        </div>
                                        <p className="text-gray-300 leading-relaxed mb-4">
                                            Leading full-stack development initiatives using modern MERN stack technologies. 
                                            Architecting scalable applications with focus on performance and user experience.
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium border border-blue-500/30">React.js</span>
                                            <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium border border-green-500/30">Node.js</span>
                                            <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-medium border border-yellow-500/30">Express.js</span>
                                            <span className="px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-xs font-medium border border-green-600/30">MongoDB</span>
                                            <span className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-xs font-medium border border-blue-600/30">TypeScript</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Database Experience */}
                            <div className="relative">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-xl flex items-center justify-center border-2 border-cyan-500/30 relative z-10">
                                        <Database size={20} className="text-cyan-400" />
                                    </div>
                                    <div className="ml-6 flex-1">
                                        <div className="flex items-center justify-between mb-3">
                                            <h4 className="text-xl font-bold text-cyan-400">Database Developer</h4>
                                            <div className="flex items-center text-cyan-300 bg-cyan-500/10 px-3 py-1 rounded-full">
                                                <Calendar size={14} className="mr-1" />
                                                <span className="text-sm font-medium">2021 - 2023</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center mb-3">
                                            <Star size={16} className="text-yellow-400 mr-2" />
                                            <span className="text-white font-semibold text-sm">2.9 Years of Database Expertise</span>
                                        </div>
                                        <p className="text-gray-300 leading-relaxed mb-4">
                                            Specialized in enterprise database solutions, creating robust PL/SQL packages and optimizing 
                                            complex data operations across Oracle environments.
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs font-medium border border-orange-500/30">SQL</span>
                                            <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs font-medium border border-orange-500/30">PL/SQL</span>
                                            <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-xs font-medium border border-red-500/30">Oracle</span>
                                            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium border border-blue-500/30">PostgreSQL</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-gray-700/50">
                            <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 text-cyan-400 rounded-full text-sm font-medium border border-cyan-500/30 flex items-center">
                                <Award size={16} className="mr-2" />
                                Senior Developer
                            </span>
                            <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-purple-600/20 text-purple-400 rounded-full text-sm font-medium border border-purple-500/30">Team Lead</span>
                            <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30">Full-Stack</span>
                        </div>
                    </div>

                    {/* Education Section */}
                    <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-400/50 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 group">
                        <div className="flex items-center mb-8">
                            <div className="p-4 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                                <GraduationCap size={32} className="text-blue-400" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-1">Education</h3>
                                <p className="text-gray-400 text-sm">Academic foundation</p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            {/* Master's Degree */}
                            <div className="relative">
                                <div className="bg-gradient-to-br from-blue-500/5 to-purple-600/5 rounded-xl p-6 border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center">
                                            <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mr-3"></div>
                                            <h4 className="text-lg font-bold text-blue-400">Master's Degree</h4>
                                        </div>
                                        <div className="flex items-center text-blue-300 bg-blue-500/10 px-3 py-1 rounded-full">
                                            <Calendar size={14} className="mr-1" />
                                            <span className="text-sm font-medium">2020 - 2022</span>
                                        </div>
                                    </div>
                                    <h5 className="font-semibold text-white mb-2">Master's in Computer Management</h5>
                                    <div className="flex items-center text-gray-300 mb-3">
                                        <MapPin size={16} className="mr-2 text-blue-400" />
                                        <span className="text-sm">Rashtrasant Tukadoji Maharaj (RTMNU), Nagpur</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium border border-blue-500/30">M.C.M</span>
                                    </div>
                                </div>
                            </div>

                            {/* Bachelor's Degree */}
                            <div className="relative">
                                <div className="bg-gradient-to-br from-green-500/5 to-blue-600/5 rounded-xl p-6 border border-green-500/10 hover:border-green-500/30 transition-all duration-300">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center">
                                            <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mr-3"></div>
                                            <h4 className="text-lg font-bold text-green-400">Bachelor's Degree</h4>
                                        </div>
                                        <div className="flex items-center text-green-300 bg-green-500/10 px-3 py-1 rounded-full">
                                            <Calendar size={14} className="mr-1" />
                                            <span className="text-sm font-medium">2017 - 2019</span>
                                        </div>
                                    </div>
                                    <h5 className="font-semibold text-white mb-2">Bachelor's of Science in Information Technology</h5>
                                    <div className="flex items-center text-gray-300 mb-3">
                                        <MapPin size={16} className="mr-2 text-green-400" />
                                        <span className="text-sm">Rashtrasant Tukadoji Maharaj (RTMNU), Nagpur</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium border border-green-500/30">B.Sc (IT)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Summary Stats */}
                        <div className="mt-8 pt-6 border-t border-gray-700/50">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center p-4 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-lg border border-blue-500/20">
                                    <div className="text-2xl font-bold text-blue-400">5+</div>
                                    <div className="text-gray-300 text-sm">Years Learning</div>
                                </div>
                                <div className="text-center p-4 bg-gradient-to-br from-purple-500/10 to-pink-600/10 rounded-lg border border-purple-500/20">
                                    <div className="text-2xl font-bold text-purple-400">2</div>
                                    <div className="text-gray-300 text-sm">Degrees</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;