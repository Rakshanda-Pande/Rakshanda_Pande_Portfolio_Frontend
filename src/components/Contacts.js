import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
          Let's Work Together
        </h2>
        
        <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
          <h3 className="text-2xl font-bold mb-4">Ready to bring your ideas to life?</h3>
          <p className="text-gray-400 mb-8 text-lg leading-relaxed">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can work together!
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            {[
              { icon: Mail, href: "mailto:alex@example.com", label: "Email" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Github, href: "#", label: "GitHub" }
            ].map(({ icon: Icon, href, label }, index) => (
              <a
                key={index}
                href={href}
                className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25"
                title={label}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>

          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;