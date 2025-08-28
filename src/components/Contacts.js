import React, { useState, useEffect } from "react";
import { Check, Github, Linkedin, Mail, Send, X, Award, TrendingUp, Sparkles, Phone, MapPin } from "lucide-react";

const Contact = () => {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [visibleItems, setVisibleItems] = useState(new Set());
    const [hoveredSocial, setHoveredSocial] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        // Basic validation
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            return;
        }

        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset form after success message
        setTimeout(() => {
            setShowForm(false);
            setIsSubmitted(false);
            setFormData({ name: "", email: "", subject: "", message: "" });
        }, 2000);
    };

    const closeForm = () => {
        setShowForm(false);
        setIsSubmitted(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    const isFormValid = formData.name && formData.email && formData.subject && formData.message;

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target.classList.contains('contact-header')) {
                            setTimeout(() => setVisibleItems(prev => new Set([...prev, 'header'])), 100);
                        }
                        if (entry.target.classList.contains('contact-content')) {
                            setTimeout(() => setVisibleItems(prev => new Set([...prev, 'content'])), 300);
                        }
                        if (entry.target.classList.contains('contact-socials')) {
                            setTimeout(() => setVisibleItems(prev => new Set([...prev, 'socials'])), 500);
                        }
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll('.contact-header, .contact-content, .contact-socials');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const socialLinks = [
        { 
            icon: Github, 
            name: "GitHub", 
            href: "https://github.com/Rakshanda-Pande",
            color: "from-gray-500 to-gray-700",
            hoverColor: "from-gray-400 to-gray-600"
        },
        { 
            icon: Linkedin, 
            name: "LinkedIn", 
            href: "https://www.linkedin.com/in/rakshanda-pande-2b836616a/",
            color: "from-blue-500 to-blue-700",
            hoverColor: "from-blue-400 to-blue-600"
        },
        { 
            icon: Mail, 
            name: "Email", 
            href: "https://mail.google.com/mail/?view=cm&to=rakshandapande2107@gmail.com",
            color: "from-red-500 to-red-700",
            hoverColor: "from-red-400 to-red-600"
        },
    ];

    return (
        <section id="contact" className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
            {/* Enhanced Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(56,189,248,0.1),transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.08),transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(59,130,246,0.06),transparent_50%)]"></div>
                
                {/* Floating Particles - responsive */}
                <div className="absolute top-20 left-4 sm:left-10 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400/60 rounded-full animate-pulse"></div>
                <div className="absolute top-32 right-8 sm:right-20 w-1 h-1 bg-blue-400/60 rounded-full animate-ping"></div>
                <div className="absolute bottom-40 left-1/4 w-1 sm:w-1.5 sm:h-1.5 h-1 bg-purple-400/60 rounded-full animate-pulse delay-300"></div>
                <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-cyan-300/60 rounded-full animate-ping delay-700"></div>
            </div>

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Enhanced Header - Mobile Responsive */}
                <div className={`contact-header mb-8 sm:mb-10 lg:mb-12 text-center transition-all duration-1000 ${visibleItems.has('header') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="flex flex-col sm:flex-row items-center justify-center mb-4 gap-2 sm:gap-0">
                        <Award className="text-cyan-400 sm:mr-3 animate-pulse" size={24} />
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl p-2 sm:p-4 font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-text text-center">
                            Let's Work Together
                        </h2>
                        <TrendingUp className="text-purple-400 sm:ml-3 animate-pulse" size={24} />
                    </div>
                    <div className="w-24 sm:w-32 lg:w-40 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mx-auto rounded-full animate-pulse"></div>
                    <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up px-2" style={{ animationDelay: '0.5s' }}>
                        Ready to turn your vision into reality? Let's create something extraordinary together.
                    </p>
                </div>

                {/* Enhanced Main Card - Mobile Responsive */}
                <div className={`contact-content relative transform transition-all duration-1000 ${visibleItems.has('content') ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'}`}>
                    {/* Glowing Border Effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400/30 via-blue-500/30 to-purple-600/30 rounded-2xl sm:rounded-3xl opacity-75 blur-sm animate-pulse"></div>
                    
                    <div className="relative bg-slate-800/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 xl:p-12 border border-slate-700/50">
                        {/* Enhanced Content */}
                        <div className="mb-6 sm:mb-8 text-center">
                            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-cyan-400/10 border border-cyan-400/20 rounded-full mb-4 sm:mb-6 backdrop-blur-sm">
                                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                                <span className="text-cyan-400 text-xs sm:text-sm font-medium">Get In Touch</span>
                            </div>
                            
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-white">Ready to bring your ideas to life?</h3>
                            <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto px-2">
                                I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together to create something amazing!
                            </p>
                        </div>

                        {/* Contact Info Cards - Responsive Grid */}
                        <div className="grid gap-4 sm:gap-6 mb-8 sm:mb-10">
                            <div className="bg-slate-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 group">
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <div className="p-2 sm:p-3 bg-cyan-500/20 rounded-full group-hover:bg-cyan-500/30 transition-colors duration-300 flex-shrink-0">
                                        <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                                    </div>
                                    <div className="text-left min-w-0 flex-1">
                                        <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">Email</h4>
                                        <p className="text-gray-400 text-xs sm:text-sm break-all sm:break-normal">rakshandapande2107@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="bg-slate-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 group">
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <div className="p-2 sm:p-3 bg-blue-500/20 rounded-full group-hover:bg-blue-500/30 transition-colors duration-300 flex-shrink-0">
                                        <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">Location</h4>
                                        <p className="text-gray-400 text-xs sm:text-sm">Nagpur</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Enhanced Social Links - Mobile Optimized */}
                        <div className={`contact-socials transition-all duration-1000 delay-300 ${visibleItems.has('socials') ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                            <h4 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6 text-center">Connect With Me</h4>
                            <div className="flex justify-center gap-4 sm:gap-6">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`group relative p-3 sm:p-4 bg-gradient-to-r ${hoveredSocial === index ? social.hoverColor : social.color} rounded-xl sm:rounded-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-2xl touch-manipulation`}
                                        onMouseEnter={() => setHoveredSocial(index)}
                                        onMouseLeave={() => setHoveredSocial(null)}
                                        title={social.name}
                                        style={{
                                            animationDelay: `${index * 150}ms`
                                        }}
                                    >
                                        <social.icon 
                                            size={24} 
                                            className="sm:w-7 sm:h-7 text-white group-hover:rotate-12 transition-transform duration-300" 
                                        />
                                        
                                        {/* Tooltip - Hidden on mobile */}
                                        <div className="hidden sm:block absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                                            {social.name}
                                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-slate-800"></div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className="mt-8 sm:mt-10 text-center">
                            <div className="inline-flex items-center gap-2 text-gray-400 mb-4">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                <span className="text-xs sm:text-sm">Available for freelance projects</span>
                            </div>
                            
                            {/* Uncomment if you want to add the contact form button
                            <button 
                                onClick={() => setShowForm(true)} 
                                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 touch-manipulation"
                            >
                                <Send className="inline-block w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                                Start a Project
                            </button>
                            */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Enhanced Contact Form Modal - Mobile Optimized */}
            {showForm && (
                <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
                    <div className="bg-slate-800 rounded-2xl sm:rounded-3xl border border-slate-700 w-full max-w-md max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100 animate-modal-in shadow-2xl">
                        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-700 sticky top-0 bg-slate-800 rounded-t-2xl sm:rounded-t-3xl z-10">
                            <h3 className="text-lg sm:text-xl font-bold text-white">Get In Touch</h3>
                            <button 
                                onClick={closeForm} 
                                className="p-2 hover:bg-slate-700 rounded-full transition-colors duration-200 touch-manipulation"
                            >
                                <X size={18} className="sm:w-5 sm:h-5 text-gray-400" />
                            </button>
                        </div>

                        {!isSubmitted ? (
                            <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                                <div className="animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        placeholder="Your Name" 
                                        value={formData.name} 
                                        onChange={handleInputChange} 
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-700 border border-slate-600 rounded-lg sm:rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all text-white placeholder-gray-400 text-sm sm:text-base" 
                                    />
                                </div>

                                <div className="animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        placeholder="Your Email" 
                                        value={formData.email} 
                                        onChange={handleInputChange} 
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-700 border border-slate-600 rounded-lg sm:rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all text-white placeholder-gray-400 text-sm sm:text-base" 
                                    />
                                </div>

                                <div className="animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
                                    <input 
                                        type="text" 
                                        name="subject" 
                                        placeholder="Subject" 
                                        value={formData.subject} 
                                        onChange={handleInputChange} 
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-700 border border-slate-600 rounded-lg sm:rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all text-white placeholder-gray-400 text-sm sm:text-base" 
                                    />
                                </div>

                                <div className="animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
                                    <textarea 
                                        name="message" 
                                        placeholder="Your Message" 
                                        value={formData.message} 
                                        onChange={handleInputChange} 
                                        rows={4} 
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-700 border border-slate-600 rounded-lg sm:rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none text-white placeholder-gray-400 text-sm sm:text-base" 
                                    />
                                </div>

                                <button 
                                    onClick={handleSubmit} 
                                    disabled={isSubmitting || !isFormValid} 
                                    className={`w-full py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 animate-slide-in-up text-sm sm:text-base touch-manipulation ${
                                        isFormValid && !isSubmitting 
                                            ? "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white hover:scale-105" 
                                            : "bg-slate-600 text-gray-400 cursor-not-allowed"
                                    }`}
                                    style={{ animationDelay: '0.5s' }}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send size={16} className="sm:w-5 sm:h-5" />
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        ) : (
                            <div className="p-4 sm:p-6 text-center animate-fade-in">
                                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 animate-bounce">
                                    <Check size={20} className="sm:w-6 sm:h-6 text-white" />
                                </div>
                                <h4 className="text-lg sm:text-xl font-bold text-white mb-2">Message Sent!</h4>
                                <p className="text-gray-400 text-sm sm:text-base">Thanks for reaching out. I'll get back to you soon!</p>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Custom Styles for Animations */}
            <style jsx>{`
                @keyframes gradient-text {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @keyframes modal-in {
                    from { opacity: 0; transform: scale(0.9) translateY(-20px); }
                    to { opacity: 1; transform: scale(1) translateY(0); }
                }
                
                @keyframes slide-in-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                .animate-gradient-text {
                    background-size: 200% 200%;
                    animation: gradient-text 3s ease-in-out infinite;
                }
                
                .animate-fade-in-up {
                    animation: fade-in-up 1s ease-out forwards;
                }
                
                .animate-fade-in {
                    animation: fade-in 0.3s ease-out forwards;
                }
                
                .animate-modal-in {
                    animation: modal-in 0.3s ease-out forwards;
                }
                
                .animate-slide-in-up {
                    animation: slide-in-up 0.6s ease-out forwards;
                    opacity: 0;
                }

                /* Mobile-specific improvements */
                @media (max-width: 480px) {
                    .break-all {
                        word-break: break-all;
                    }
                }

                /* Touch optimization */
                .touch-manipulation {
                    touch-action: manipulation;
                }
            `}</style>
        </section>
    );
};

export default Contact;
