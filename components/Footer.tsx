import { FaFacebook, FaTwitter, FaDribbble, FaBehance, FaHeart } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="section-gap bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <h6 className="text-lg font-semibold mb-6">About Us</h6>
            <p className="text-gray-600 mb-6">
              We are a leading interior design company dedicated to creating beautiful, functional spaces
              that reflect your unique style and personality.
            </p>
            <p className="text-sm text-gray-500">
              Copyright © {new Date().getFullYear()} All rights reserved | Made with{' '}
              <FaHeart className="inline text-primary" /> by Interior Design
            </p>
          </div>

          <div className="lg:col-span-5">
            <h6 className="text-lg font-semibold mb-6">Newsletter</h6>
            <p className="text-gray-600 mb-4">Stay updated with our latest</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-4 py-3 bg-gray-100 border border-gray-200 focus:outline-none focus:border-primary transition-colors"
              />
              <button
                type="submit"
                className="px-6 bg-primary text-white hover:bg-primary/90 transition-colors"
              >
                →
              </button>
            </form>
          </div>

          <div className="lg:col-span-2">
            <h6 className="text-lg font-semibold mb-6">Follow Us</h6>
            <p className="text-gray-600 mb-4">Let us be social</p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors text-xl"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors text-xl"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors text-xl"
              >
                <FaDribbble />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors text-xl"
              >
                <FaBehance />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
