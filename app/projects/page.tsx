'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function Projects() {
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
      title: 'Modern Living Space',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&q=80',
      large: false,
    },
    {
      title: 'Contemporary Design',
      image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80',
      large: true,
    },
    {
      title: 'Minimalist Interior',
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80',
      large: true,
    },
    {
      title: 'Cozy Bedroom',
      image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=400&q=80',
      large: false,
    },
    {
      title: 'Elegant Dining Room',
      image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=400&q=80',
      large: false,
    },
    {
      title: 'Luxurious Living Room',
      image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=800&q=80',
      large: true,
    },
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
            <div className="flex items-center justify-center space-x-2 text-sm">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span>→</span>
              <span className="text-primary">Projects</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-gap bg-gray-50">
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
                transition={{ delay: index * 0.1 }}
                className={`relative group overflow-hidden rounded-lg ${
                  project.large ? 'md:row-span-2' : ''
                }`}
              >
                <div className={`relative ${project.large ? 'h-[600px]' : 'h-80'}`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-8">
                    <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                      <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 uppercase text-sm font-medium transition-colors">
                        More Details
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
