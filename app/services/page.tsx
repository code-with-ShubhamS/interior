'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaUser, FaCertificate, FaPhone, FaRocket, FaDiamond, FaComment } from 'react-icons/fa6';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function Services() {
  const services = [
    {
      title: 'Interior Design',
      description:
        'Transform your space with our expert interior design services. We create beautiful, functional spaces that reflect your personality and lifestyle.',
    },
    {
      title: 'Architecture Design',
      description:
        'From concept to completion, our architectural designs are innovative and sustainable, tailored to meet your specific needs.',
    },
    {
      title: 'Concept Design',
      description:
        'Our concept designs bring your ideas to life with creativity and precision, setting the foundation for your perfect space.',
    },
  ];

  const features = [
    { icon: FaUser, title: 'Expert Technicians', description: 'Our team consists of highly skilled professionals with years of experience.' },
    { icon: FaCertificate, title: 'Professional Service', description: 'We deliver top-notch professional services that exceed expectations.' },
    { icon: FaPhone, title: 'Great Support', description: '24/7 customer support to help you with any questions or concerns.' },
    { icon: FaRocket, title: 'Technical Skills', description: 'Cutting-edge technical expertise to bring your vision to reality.' },
    { icon: FaDiamond, title: 'Highly Recommended', description: 'Trusted by hundreds of satisfied clients across the region.' },
    { icon: FaComment, title: 'Positive Reviews', description: 'Consistently rated 5 stars for our exceptional work quality.' },
  ];

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Services</h1>
            <div className="flex items-center justify-center space-x-2 text-sm">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span>→</span>
              <span className="text-primary">Services</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-gap bg-white">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What we offer to our clients</h2>
            <p className="text-gray-600">Comprehensive design solutions tailored to your needs</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 border border-gray-200 rounded-lg hover:bg-dark hover:border-dark transition-all duration-300 group"
              >
                <h4 className="text-xl font-semibold mb-4 group-hover:text-primary">{service.title}</h4>
                <p className="text-gray-600 group-hover:text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gap bg-primary">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Some Features that Made us Unique
            </h2>
            <p className="text-white/90">Excellence in every detail</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg hover:bg-dark hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <feature.icon className="text-3xl text-gray-800 group-hover:text-primary transition-colors flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 group-hover:text-gray-300 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gap bg-white">
        <div className="container-custom text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Looking for a <br />
              quality and affordable interior design?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Get in touch with us today and let's discuss how we can transform your space into something extraordinary.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary hover:bg-primary/90 text-white font-medium px-8 py-4 uppercase text-sm transition-all duration-300 transform hover:scale-105"
            >
              Request Quote Now
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
