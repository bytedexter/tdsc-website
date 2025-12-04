import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for form submission would go here
    alert("Thank you. We will review your inquiry and respond shortly.");
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">Contact Us</h2>
          <p className="text-slate-600">Initiate a conversation about your data infrastructure.</p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-slate-50 p-10 rounded-lg border border-slate-100">
             <h3 className="text-2xl font-serif font-bold text-slate-900 mb-8">Corporate Headquarters</h3>
             
             <div className="space-y-8">
                <div className="flex items-start">
                   <MapPin className="text-slate-700 mt-1 mr-4" size={24} />
                   <div>
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-1">Address</h4>
                      <p className="text-slate-600 leading-relaxed">
                        TDSC Towers, Tech Park,<br />
                        Sector 5, Electronic City,<br />
                        Bangalore, KA 560100
                      </p>
                   </div>
                </div>

                <div className="flex items-start">
                   <Mail className="text-slate-700 mt-1 mr-4" size={24} />
                   <div>
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-1">Email</h4>
                      <p className="text-slate-600">contact@tdsc.com</p>
                      <p className="text-slate-600">support@tdsc.com</p>
                   </div>
                </div>

                <div className="flex items-start">
                   <Phone className="text-slate-700 mt-1 mr-4" size={24} />
                   <div>
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-1">Phone</h4>
                      <p className="text-slate-600">+91 80 1234 5678</p>
                   </div>
                </div>
             </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full rounded-md border-slate-300 bg-slate-50 border p-3 focus:ring-slate-500 focus:border-slate-500 shadow-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Corporate Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full rounded-md border-slate-300 bg-slate-50 border p-3 focus:ring-slate-500 focus:border-slate-500 shadow-sm"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="block w-full rounded-md border-slate-300 bg-slate-50 border p-3 focus:ring-slate-500 focus:border-slate-500 shadow-sm"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full rounded-md border-slate-300 bg-slate-50 border p-3 focus:ring-slate-500 focus:border-slate-500 shadow-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};