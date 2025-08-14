import { Check, Github, Linkedin, Mail, Send, X } from "lucide-react";
import { useState } from "react";

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

    return (
        <section id="contact" className="py-20 relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Let's Work Together</h2>

                <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                    <h3 className="text-2xl font-bold mb-4">Ready to bring your ideas to life?</h3>
                    <p className="text-gray-400 mb-8 text-lg leading-relaxed">I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together!</p>

                    <div className="flex justify-center space-x-6 mb-8">
                        {[
                             { icon: Github, name: "gitHub", href: "https://github.com/Rakshanda-Pande" },
                            { icon: Linkedin, name: "linkedIn", href: "https://www.linkedin.com/in/rakshanda-pande-2b836616a/" },
                            { icon: Mail, name: "mail", href: "https://mail.google.com/mail/?view=cm&to=rakshandapande2107@gmail.com" },
                        ].map(({ icon: Icon, href, label }, index) => (
                            <a key={index} href={href} target="_blank" className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25" title={label}>
                                <Icon size={24} />
                            </a>
                        ))}
                    </div>

                    {/* <button onClick={() => setShowForm(true)} className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                        Get In Touch
                    </button> */}
                </div>
            </div>

            {/* Contact Form Modal */}
            {showForm && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-gray-800 rounded-2xl border border-gray-700 w-full max-w-md transform transition-all duration-300 scale-100">
                        <div className="flex items-center justify-between p-6 border-b border-gray-700">
                            <h3 className="text-xl font-bold text-white">Get In Touch</h3>
                            <button onClick={closeForm} className="p-2 hover:bg-gray-700 rounded-full transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        {!isSubmitted ? (
                            <div className="p-6 space-y-4">
                                <div>
                                    <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all text-white placeholder-gray-400" />
                                </div>

                                <div>
                                    <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all text-white placeholder-gray-400" />
                                </div>

                                <div>
                                    <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all text-white placeholder-gray-400" />
                                </div>

                                <div>
                                    <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleInputChange} rows={4} className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none text-white placeholder-gray-400" />
                                </div>

                                <button onClick={handleSubmit} disabled={isSubmitting || !isFormValid} className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${isFormValid && !isSubmitting ? "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white" : "bg-gray-600 text-gray-400 cursor-not-allowed"}`}>
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send size={18} />
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        ) : (
                            <div className="p-6 text-center">
                                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Check size={24} className="text-white" />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                                <p className="text-gray-400">Thanks for reaching out. I'll get back to you soon!</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};

export default Contact;
