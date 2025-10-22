'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaUser, FaCertificate, FaPhone, FaRocket, FaDiamond, FaComment, FaStar } from 'react-icons/fa6';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  viewport: { once: true },
};

export default function Home() {
  const services = [
    {
      title: 'Interior Design',
      description:
        'Transform your space with our expert interior design services that combine functionality with aesthetic appeal.',
    },
    {
      title: 'Architecture Design',
      description:
        'From concept to completion, our architectural designs are tailored to meet your specific needs and vision.',
    },
    {
      title: 'Concept Design',
      description:
        'Innovative concept designs that bring your ideas to life with creativity and precision.',
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

  const projects = [
    {
      title: 'Lavender Ambient Interior',
      image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80',
      large: true,
    },
    {
      title: 'Ambient Interior',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80',
      large: false,
    },
    {
      title: 'Modern Interior',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&q=80',
      large: false,
    },
    {
      title: 'Contemporary Design',
      image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80',
      large: true,
    },
  ];

  const testimonials = [
    {
      name: 'Mark Alviro Wiens',
      text: 'Exceptional service and attention to detail. They transformed our space beyond our expectations!',
      rating: 4,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
    },
    {
      name: 'Lina Harrington',
      text: 'Professional team with creative ideas. Highly recommended for anyone looking for quality interior design.',
      rating: 3,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    },
  ];

  const blogs = [
    {
      title: 'Low Cost Advertising',
      excerpt: 'Discover innovative ways to advertise your design business on a budget.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80',
      tags: ['Business', 'Marketing'],
      date: 'January 31, 2024',
    },
    {
      title: 'Creative Outdoor Ads',
      excerpt: 'Explore unique outdoor advertising strategies that capture attention.',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&q=80',
      tags: ['Design', 'Creativity'],
      date: 'February 15, 2024',
    },
    {
      title: 'Utilizing Free Resources',
      excerpt: 'Learn how to leverage free tools and resources for your design projects.',
      image: 'https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?w=400&q=80',
      tags: ['Tips', 'Resources'],
      date: 'March 10, 2024',
    },
  ];

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900/80" />

        <div className="relative z-10 container-custom text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Precise concept design <br />
              for stylish living
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-200">
              Transform your space into a masterpiece with our expert interior design services.
              We blend creativity with functionality to create stunning environments.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary hover:bg-primary/90 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="section-gap bg-white">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What we offer to our clients</h2>
            <p className="text-gray-600">Comprehensive design solutions tailored to your needs</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center p-8 border border-gray-200 rounded-lg hover:bg-dark hover:border-dark transition-all duration-300 group"
              >
                <h4 className="text-xl font-semibold mb-4 group-hover:text-primary">{service.title}</h4>
                <p className="text-gray-600 group-hover:text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="pb-20 bg-gray-50">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Recent Works may impress you</h2>
            <p className="text-gray-600">Explore our portfolio of stunning interior designs</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                className={`relative group overflow-hidden rounded-lg ${project.large ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className="relative h-80">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-8">
                    <div className="text-center text-white">
                      <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                      <Link
                        href="/projects"
                        className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-2 uppercase text-sm font-medium transition-colors"
                      >
                        More Details
                      </Link>
                    </div>
                  </div>
                </div>
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

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-lg hover:bg-dark hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <feature.icon className="text-3xl text-gray-800 group-hover:text-primary transition-colors" />
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
          </motion.div>
        </div>
      </section>

      <section className="section-gap bg-white">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonial from our Clients</h2>
            <p className="text-gray-600">What our clients say about us</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-600 mb-4">{testimonial.text}</p>
                    <h4 className="font-semibold mb-2">{testimonial.name}</h4>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={i < testimonial.rating ? 'text-primary' : 'text-gray-300'}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gap bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container-custom text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Looking for a <br />
              quality and affordable interior design?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
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

      <section className="section-gap bg-gray-50">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest From Our Blog</h2>
            <p className="text-gray-600">Tips, trends, and inspiration for your space</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image src={blog.image} alt={blog.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex space-x-2 mb-4">
                    {blog.tags.map((tag, i) => (
                      <span key={i} className="text-xs border border-gray-300 px-3 py-1 hover:bg-primary hover:text-white hover:border-primary transition-colors cursor-pointer">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-xl font-semibold mb-3 hover:text-primary transition-colors cursor-pointer">
                    {blog.title}
                  </h4>
                  <p className="text-gray-600 mb-4 text-sm">{blog.excerpt}</p>
                  <p className="text-sm text-gray-500">{blog.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
