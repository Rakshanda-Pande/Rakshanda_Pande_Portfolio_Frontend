import React, { useState, useEffect } from "react";
import { ChevronDown, Github, Linkedin, Mail, Download, Sparkles } from "lucide-react";

const Hero = () => {
    const titles = ["Full Stack Developer", "React Specialist", "Problem Solver", "Tech Enthusiast"];
    const [currentTitle, setCurrentTitle] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        setIsLoaded(true);

        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const handleDownloadCV = () => {
        window.open("/Rakshanda CV 2025.pdf", "_blank");
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTitle((prev) => (prev + 1) % titles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-8 sm:py-12">
            {/* Enhanced Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-cyan-500/15 rounded-full blur-3xl animate-float" style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/15 rounded-full blur-3xl animate-float-delayed" style={{ transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)` }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 sm:w-80 sm:h-80 bg-purple-500/10 rounded-full blur-3xl animate-float-slow" style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}></div>

                {/* Floating particles */}
                <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-float-particle"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`,
                                animationDuration: `${3 + Math.random() * 4}s`,
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                        backgroundSize: "50px 50px",
                    }}
                ></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                    <div className={`space-y-6 sm:space-y-8 text-center lg:text-left transition-all duration-1000 ${isLoaded ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}`}>
                        <div className="space-y-3 sm:space-y-4">
                            <div className="flex items-center justify-center lg:justify-start gap-2 mb-3 sm:mb-4">
                                <Sparkles className="text-cyan-400 animate-pulse" size={18} />
                                <h2 className="text-lg sm:text-xl text-gray-400 font-medium animate-fade-in">Hello, I'm</h2>
                            </div>

                            {/* Responsive name with proper breakpoints */}
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-text leading-tight">
                                Rakshanda Pande
                            </h1>

                            <h3 className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-semibold">Full Stack Developer</h3>
                        </div>

                        <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-fade-in-up">
                            Passionate about creating exceptional digital experiences through clean code and thoughtful design. I specialize in React, Node.js, and modern web technologies.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                            <button 
                                onClick={handleDownloadCV} 
                                className="group border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-6 sm:px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 relative overflow-hidden w-full sm:w-auto"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                <span className="relative flex items-center justify-center gap-2">
                                    <Download size={18} className="group-hover:animate-bounce" />
                                    View My CV
                                </span>
                            </button>
                        </div>

                        <div className="flex justify-center lg:justify-start space-x-4 sm:space-x-6 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                            {[
                                { icon: Github, name: "GitHub", href: "https://github.com/Rakshanda-Pande", color: "hover:bg-gray-700" },
                                { icon: Linkedin, name: "LinkedIn", href: "https://www.linkedin.com/in/rakshanda-pande-2b836616a/", color: "hover:bg-blue-600" },
                                { icon: Mail, name: "Email", href: "https://mail.google.com/mail/?view=cm&to=rakshandapande2107@gmail.com", color: "hover:bg-red-500" },
                            ].map(({ icon: Icon, href, name, color }, index) => (
                                <a 
                                    key={index} 
                                    href={href} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className={`group p-2 sm:p-3 bg-gray-800/50 backdrop-blur-sm ${color} rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25 border border-gray-700/50 hover:border-cyan-400/50`} 
                                    title={name}
                                >
                                    <Icon size={20} className="sm:w-6 sm:h-6 group-hover:animate-pulse" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className={`flex justify-center mt-8 lg:mt-0 lg:justify-end transition-all duration-1000 delay-300 ${isLoaded ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`}>
                        <div className="relative">
                            <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full p-2">
                                <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center">
                                    <div className="text-6xl sm:text-7xl lg:text-8xl">👨‍💻</div>
                                    {/* Uncomment when image is available */}
                                    {/* <img className="h-[100%] w-[100%] rounded-full object-cover" src="RP_Photo.jpg" alt="Rakshanda Pande" /> */}
                                </div>
                            </div>

                            {/* Static glow effect */}
                            <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full blur opacity-20"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Enhanced scroll indicator */}
            <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
                <div className="text-xs sm:text-sm text-gray-500 animate-fade-in">Scroll to explore</div>
                <div onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} className="cursor-pointer animate-bounce-custom">
                    <ChevronDown size={28} className="sm:w-8 sm:h-8 text-cyan-400 animate-pulse" />
                </div>
            </div>

            {/* Custom CSS styles */}
            <style jsx>{`
                @keyframes gradient-text {
                    0%,
                    100% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                }

                @keyframes float {
                    0%,
                    100% {
                        transform: translateY(0px) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-20px) rotate(5deg);
                    }
                }

                @keyframes float-delayed {
                    0%,
                    100% {
                        transform: translateY(0px) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-30px) rotate(-5deg);
                    }
                }

                @keyframes float-slow {
                    0%,
                    100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-15px);
                    }
                }

                @keyframes float-particle {
                    0%,
                    100% {
                        transform: translateY(0px) translateX(0px);
                        opacity: 0;
                    }
                    50% {
                        transform: translateY(-100px) translateX(20px);
                        opacity: 1;
                    }
                }

                @keyframes rotate-slow {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }

                @keyframes bounce-subtle {
                    0%,
                    100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }

                @keyframes bounce-custom {
                    0%,
                    100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-15px);
                    }
                }

                @keyframes fade-in {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-gradient-text {
                    background-size: 200% 200%;
                    animation: gradient-text 3s ease-in-out infinite;
                }

                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }

                .animate-float-delayed {
                    animation: float-delayed 8s ease-in-out infinite;
                }

                .animate-float-slow {
                    animation: float-slow 10s ease-in-out infinite;
                }

                .animate-float-particle {
                    animation: float-particle 6s ease-in-out infinite;
                }

                .animate-rotate-slow {
                    animation: rotate-slow 20s linear infinite;
                }

                .animate-bounce-subtle {
                    animation: bounce-subtle 2s ease-in-out infinite;
                }

                .animate-bounce-custom {
                    animation: bounce-custom 2s ease-in-out infinite;
                }

                .animate-fade-in {
                    animation: fade-in 1s ease-out;
                }

                .animate-fade-in-up {
                    animation: fade-in-up 1s ease-out;
                }

                /* Ensure text doesn't break poorly on small screens */
                @media (max-width: 480px) {
                    .break-words {
                        word-break: break-word;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;