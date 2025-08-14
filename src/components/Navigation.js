import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Navigation = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("about");

    const sections = ["about", "projects", "skills", "contact"];

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        setMobileMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100; // Offset for better detection

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Check initial position

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const getButtonClasses = (item) => {
        const baseClasses = "transition-all duration-300 font-medium relative";
        const isActive = activeSection === item.toLowerCase();

        if (isActive) {
            return `${baseClasses} text-cyan-400 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-cyan-400 after:to-blue-600 after:rounded-full`;
        } else {
            return `${baseClasses} text-gray-300 hover:text-cyan-400`;
        }
    };

    const getMobileButtonClasses = (item) => {
        const baseClasses = "block w-full text-left py-3 px-4 transition-all duration-300 rounded-lg";
        const isActive = activeSection === item.toLowerCase();

        if (isActive) {
            return `${baseClasses} text-cyan-400 bg-cyan-500/10 border-l-4 border-cyan-400`;
        } else {
            return `${baseClasses} text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50`;
        }
    };

    return (
        <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-800 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent cursor-pointer" onClick={() => scrollToSection("about")}>
                        Portfolio
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {["About", "Skills", "Projects", "Contact"].map((item) => (
                            <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className={getButtonClasses(item)}>
                                {item}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden p-2 rounded-lg hover:bg-gray-800/50 transition-colors duration-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X size={24} className="text-gray-300" /> : <Menu size={24} className="text-gray-300" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden pb-4 space-y-1">
                        {["About", "Projects", "Skills", "Contact"].map((item) => (
                            <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className={getMobileButtonClasses(item)}>
                                {item}
                                {activeSection === item.toLowerCase() && <span className="ml-2 inline-block w-2 h-2 bg-cyan-400 rounded-full"></span>}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;
