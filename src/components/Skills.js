import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const Skills = () => {
  const [skillProgress, setSkillProgress] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    { name: "React", level: 95, color: "from-blue-400 to-blue-600" },
    { name: "JavaScript", level: 90, color: "from-yellow-400 to-yellow-600" },
    { name: "Python", level: 85, color: "from-green-400 to-green-600" },
    { name: "Node.js", level: 80, color: "from-emerald-400 to-emerald-600" },
    { name: "UI/UX Design", level: 75, color: "from-purple-400 to-purple-600" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      skills.forEach((skill, index) => {
        setTimeout(() => {
          setSkillProgress(prev => ({ 
            ...prev, 
            [skill.name.toLowerCase()]: skill.level 
          }));
        }, index * 200);
      });
    }
  }, [isVisible]);

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={skill.name} className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">{skill.name}</h3>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`${
                        i < Math.floor(skill.level / 20) ? 'text-yellow-400 fill-current' : 'text-gray-600'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-gray-400">{skill.level}%</span>
                </div>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out rounded-full`}
                  style={{ width: `${skillProgress[skill.name.toLowerCase()] || 0}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;