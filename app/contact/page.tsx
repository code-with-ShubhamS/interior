'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaHouse, FaPhone, FaEnvelope } from 'react-icons/fa6';
import { useState } from 'react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Message sent successfully!');
    setTimeout(() => {
      setStatus('');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1920&q=80')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/90" />

        <div className="relative z-10 container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <div className="flex items-center justify-center space-x-2 text-sm">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span>→</span>
              <span className="text-primary">Contact Us</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-gap bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <motion.div {...fadeInUp} className="lg:col-span-4 space-y-6">
              <div className="flex space-x-4 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <FaHouse className="text-3xl text-primary flex-shrink-0 mt-1" />
                <div>
                  <h5 className="font-semibold text-lg mb-2">Binghamton, New York</h5>
                  <p className="text-gray-600 text-sm">4343 Hinkle Deegan Lake Road</p>
                </div>
              </div>

              <div className="flex space-x-4 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <FaPhone className="text-3xl text-primary flex-shrink-0 mt-1" />
                <div>
                  <h5 className="font-semibold text-lg mb-2">00 (958) 9865 562</h5>
                  <p className="text-gray-600 text-sm">Mon to Fri 9am to 6 pm</p>
                </div>
              </div>

              <div className="flex space-x-4 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <FaEnvelope className="text-3xl text-primary flex-shrink-0 mt-1" />
                <div>
                  <h5 className="font-semibold text-lg mb-2">support@interior.com</h5>
                  <p className="text-gray-600 text-sm">Send us your query anytime!</p>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="lg:col-span-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                        className="w-full px-4 py-3 bg-gray-100 border border-gray-200 focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter email address"
                        required
                        className="w-full px-4 py-3 bg-gray-100 border border-gray-200 focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Enter your subject"
                      required
                      className="w-full px-4 py-3 bg-gray-100 border border-gray-200 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-100 border border-gray-200 focus:outline-none focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  {status && (
                    <div className="text-green-600 font-medium">{status}</div>
                  )}

                  <div className="text-right">
                    <button
                      type="submit"
                      className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>

          <motion.div {...fadeInUp} className="mt-12">
            <div className="w-full h-96 bg-gray-300 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9476519598093!2d-73.98823688459395!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
