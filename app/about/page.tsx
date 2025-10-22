'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaUser, FaCertificate, FaPhone, FaRocket, FaDiamond, FaComment, FaStar, FaPlay } from 'react-icons/fa6';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function About() {
  const features = [
    { icon: FaUser, title: 'Expert Technicians', description: 'Our team consists of highly skilled professionals with years of experience.' },
    { icon: FaCertificate, title: 'Professional Service', description: 'We deliver top-notch professional services that exceed expectations.' },
    { icon: FaPhone, title: 'Great Support', description: '24/7 customer support to help you with any questions or concerns.' },
    { icon: FaRocket, title: 'Technical Skills', description: 'Cutting-edge technical expertise to bring your vision to reality.' },
    { icon: FaDiamond, title: 'Highly Recommended', description: 'Trusted by hundreds of satisfied clients across the region.' },
    { icon: FaComment, title: 'Positive Reviews', description: 'Consistently rated 5 stars for our exceptional work quality.' },
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <div className="flex items-center justify-center space-x-2 text-sm">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span>→</span>
              <span className="text-primary">About Us</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-gap bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h6 className="text-primary text-sm uppercase tracking-wider mb-4">
                Brand new approach to interior design
              </h6>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                We've made a life <br />
                that will change you
              </h2>
              <p className="text-lg font-medium mb-4">
                We are here to listen and deliver excellence
              </p>
              <p className="text-gray-600 mb-8">
                With over a decade of experience in the interior design industry, we have mastered the art
                of creating spaces that perfectly blend aesthetics with functionality. Our team of dedicated
                professionals works tirelessly to bring your vision to life.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-3 font-medium transition-colors"
              >
                Get Started Now
              </Link>
            </motion.div>

            <motion.div
              {...fadeInUp}
              className="relative h-96 bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg overflow-hidden group"
            >
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                alt="About us"
                fill
                className="object-cover opacity-60 group-hover:opacity-80 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-primary/90 hover:bg-primary rounded-full flex items-center justify-center text-white text-2xl transition-all transform hover:scale-110">
                  <FaPlay className="ml-1" />
                </button>
              </div>
            </motion.div>
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
                transition={{ delay: index * 0.2 }}
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
    </>
  );
}
