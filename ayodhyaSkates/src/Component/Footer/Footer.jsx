export default function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="container mx-auto px-6">
          {/* Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Quick Links Section */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#home"
                    className="block text-base text-gray-300 hover:text-blue-500 transition-all duration-300 border-b border-transparent hover:border-blue-500 pb-1"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="block text-base text-gray-300 hover:text-blue-500 transition-all duration-300 border-b border-transparent hover:border-blue-500 pb-1"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="block text-base text-gray-300 hover:text-blue-500 transition-all duration-300 border-b border-transparent hover:border-blue-500 pb-1"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="block text-base text-gray-300 hover:text-blue-500 transition-all duration-300 border-b border-transparent hover:border-blue-500 pb-1"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Contact Section */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Get in Touch</h4>
              <ul className="space-y-2">
                <li>
                  <span className="font-semibold">Email:</span>{' '}
                  <a
                    href="mailto:info@ayodhyaskates.com"
                    className="hover:text-blue-500 transition duration-300"
                  >
                    ayodhyaskates.info@gmail.com
                  </a>
                </li>
                <li>
                  <span className="font-semibold">Phone:</span>{' '}
                  <a
                    href="tel:+919696575777"
                    className="hover:text-blue-500 transition duration-300"
                  >
                    +91 9696575777
                  </a>
                </li>
                <li>
                  <span className="font-semibold">Location:</span> Ayodhya, Uttar
                  Pradesh, India
                </li>
              </ul>
            </div>
  
            {/* Social Media Section */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-blue-700 p-3 rounded-full text-white hover:bg-blue-600 transition duration-300"
                >
                  <i className="fab fa-facebook-f"></i> {/* Use appropriate icons */}
                </a>
                <a
                  href="#"
                  className="bg-blue-400 p-3 rounded-full text-white hover:bg-blue-300 transition duration-300"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="bg-pink-500 p-3 rounded-full text-white hover:bg-pink-400 transition duration-300"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="bg-red-600 p-3 rounded-full text-white hover:bg-red-500 transition duration-300"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
  
          {/* Footer Bottom */}
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
            <p>&copy; 2025 AyodhyaSkates. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  