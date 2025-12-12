import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Container from './Container';
import { colors } from '../constants/colors';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 md:py-24" style={{ background: `linear-gradient(180deg, white, ${colors.light})` }}>
      <Container>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold" style={{ backgroundColor: `${colors.primary}20`, color: colors.primary }}>
                Get in Touch
              </span>
              <h2 className="text-3xl md:text-4xl font-bold" style={{ color: colors.dark }}>
                Let's talk about your project
              </h2>
              <p className="text-lg text-gray-600">
                Have questions? We're here to help. Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${colors.primary}20` }}>
                  <Mail size={24} style={{ color: colors.primary }} />
                </div>
                <div>
                  <h4 className="font-bold text-dark text-lg">Email</h4>
                  <p className="text-gray-600">contact@officesite.com</p>
                  <p className="text-gray-600">support@officesite.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${colors.primary}20` }}>
                  <Phone size={24} style={{ color: colors.primary }} />
                </div>
                <div>
                  <h4 className="font-bold text-dark text-lg">Phone</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-gray-600">+1 (555) 987-6543</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${colors.primary}20` }}>
                  <MapPin size={24} style={{ color: colors.primary }} />
                </div>
                <div>
                  <h4 className="font-bold text-dark text-lg">Office</h4>
                  <p className="text-gray-600">123 Business Street</p>
                  <p className="text-gray-600">Suite 100, San Francisco, CA 94107</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl shadow-xl p-8" style={{ backgroundColor: 'white', borderColor: '#e5e7eb', borderWidth: '1px' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: '#374151' }}>
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-lg transition-colors"
                  style={{
                    borderColor: '#d1d5db',
                    '--tw-ring-color': colors.primary,
                  }}
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: '#374151' }}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-lg transition-colors"
                  style={{
                    borderColor: '#d1d5db',
                    '--tw-ring-color': colors.primary,
                  }}
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: '#374151' }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border rounded-lg transition-colors"
                  style={{
                    borderColor: '#d1d5db',
                    '--tw-ring-color': colors.primary,
                  }}
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center text-white font-semibold py-3 px-6 rounded-lg transition-all"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.dark})`,
                }}
              >
                Send Message
                <Send className="ml-2" size={20} />
              </button>
            </form>

            <div className="mt-8 pt-8" style={{ borderTopColor: '#e5e7eb', borderTopWidth: '1px' }}>
              <p className="text-center" style={{ color: '#4b5563' }}>
                We typically respond within 24 hours
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;