import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import Container from './Container';
import { colors } from '../constants/colors';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    Product: ['Features', 'Pricing', 'API', 'Documentation'],
    Company: ['About', 'Blog', 'Careers', 'Press'],
    Resources: ['Help Center', 'Community', 'Contact', 'Status'],
    Legal: ['Privacy', 'Terms', 'Security', 'Cookies']
  };

  const socialLinks = [
    { icon: <Facebook size={20} />, href: '#' },
    { icon: <Twitter size={20} />, href: '#' },
    { icon: <Linkedin size={20} />, href: '#' },
    { icon: <Instagram size={20} />, href: '#' }
  ];

  return (
    <footer className="text-white pt-16 pb-8" style={{ backgroundColor: colors.dark }}>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-white rounded-lg"></div>
              <span className="text-2xl font-bold">OfficeSite</span>
            </div>
            <p className="text-gray-400 mb-8 max-w-md">
              Empowering businesses with cutting-edge solutions to drive growth, 
              efficiency, and innovation in the modern workplace.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
                  style={{
                    backgroundColor: '#1f2937',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = colors.primary;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#1f2937';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-lg mb-6">{category}</h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-center" style={{ borderTopColor: '#374151', borderTopWidth: '1px' }}>
          <div className="text-center md:text-left mb-4 md:mb-0" style={{ color: '#9ca3af' }}>
            © {new Date().getFullYear()} ClodPi Labs. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 transition-colors"
            style={{ color: '#9ca3af' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#9ca3af';
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={20} />
          </button>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;