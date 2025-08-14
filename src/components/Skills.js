import React, { useState, useEffect } from "react";
import { Award, Star, TrendingUp } from "lucide-react";

const Skills = () => {
    const [skillProgress, setSkillProgress] = useState({});
    const [isVisible, setIsVisible] = useState(false);
    const [visibleItems, setVisibleItems] = useState(new Set());

    const skills = [
        { name: "React/Redux", level: 95, color: "from-blue-400 to-blue-600" },
        { name: "JavaScript", level: 90, color: "from-yellow-400 to-yellow-600" },
        { name: "TypeScript", level: 85, color: "from-green-400 to-green-600" },
        { name: "Node.js", level: 80, color: "from-emerald-400 to-emerald-600" },
        { name: "MongoDB", level: 80, color: "from-purple-400 to-purple-600" },
        { name: "PostgreSQL", level: 80, color: "from-cyan-400 to-cyan-600" },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        setTimeout(() => setVisibleItems(prev => new Set([...prev, 'header'])), 100);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const skillsSection = document.getElementById("skills");
        if (skillsSection) {
            observer.observe(skillsSection);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (isVisible) {
            skills.forEach((skill, index) => {
                setTimeout(() => {
                    setSkillProgress((prev) => ({
                        ...prev,
                        [skill.name.toLowerCase()]: skill.level,
                    }));
                }, index * 200);
            });
        }
    }, [isVisible]);

    return (
        <section id="skills" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`text-center mb-16 transition-all duration-1000 ${visibleItems.has('header') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="flex items-center justify-center mb-4">
                        <Award className="text-cyan-400 mr-3 animate-pulse" size={32} />
                        <h2 className="text-4xl lg:text-5xl p-5 font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-text">
                            Skills & Expertise
                        </h2>
                        <TrendingUp className="text-purple-400 ml-3 animate-pulse" size={32} />
                    </div>
                    <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mx-auto rounded-full animate-pulse"></div>
                    <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                        Proficient in modern technologies with hands-on experience in full-stack development
                    </p>
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
                                <div className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out rounded-full`} style={{ width: `${skillProgress[skill.name.toLowerCase()] || 0}%` }}></div>
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

export default Skills;