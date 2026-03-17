import React from 'react';
import SectionTitle from './SectionTitle';

// Contact form section.
const Contact = () => (
    <section id="contact" className="py-20 bg-[#191414]">
        <div className="container mx-auto px-4">
            <SectionTitle>Get In Touch</SectionTitle>
            <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-md">
               <form>
                    <div className="mb-6">
                        <input type="text" placeholder="Your Name" required className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-md"/>
                    </div>
                    <div className="mb-6">
                        <input type="email" placeholder="Your Email" required className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-md"/>
                    </div>
                    <div className="mb-6">
                        <textarea rows="5" placeholder="Your Message" required className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-md"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-[#1DB954] text-white font-bold py-3 px-8 rounded-full hover:bg-[#1AA34A] transition-all">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    </section>
);

export default Contact;