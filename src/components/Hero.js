import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        // Trigger animation on mount
        const timer = setTimeout(() => setAnimate(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const handleDownloadCV = () => {
        window.open("/Rakshanda CV 2025.pdf", "_blank");
    };

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>

            {/* Main Content */}
            <div
                className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-1000 
                ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-xl text-gray-400 font-medium">Hello, I'm</h2>
                            <h3 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                                Rakshanda Pande
                            </h3>
                            <h3 className="text-2xl lg:text-3xl text-gray-300 font-semibold">
                                Full Stack Developer
                            </h3>
                        </div>

                        <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
                            Passionate about creating exceptional digital experiences through clean
                            code and thoughtful design. I specialize in React, Node.js, and modern web technologies.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={handleDownloadCV}
                                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-3 rounded-full font-semibold transition-all duration-300"
                            >
                                View My CV
                            </button>
                        </div>

                        <div className="flex space-x-6">
                            {[
                                { icon: Github, href: "https://github.com/Rakshanda-Pande" },
                                { icon: Linkedin, href: "https://www.linkedin.com/in/rakshanda-pande-2b836616a/" },
                                { icon: Mail, href: "mailto:rakshandapande2107@gmail.com" },
                            ].map(({ icon: Icon, href }, index) => (
                                <a
                                    key={index}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-gray-800 hover:bg-cyan-500 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25"
                                >
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
                                    {/* <img className="h-[100%] w-[100%] rounded-full" src="RP_Photo.jpg" /> */}
                                </div>
                            </div>
                            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full blur opacity-20 animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Down Icon */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-custom">
                <ChevronDown size={32} className="text-cyan-400" />
            </div>
        </section>
    );
};

export default Hero;
