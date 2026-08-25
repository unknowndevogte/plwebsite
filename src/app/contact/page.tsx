'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-8">Contact Us</h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Have a question or want to work together? We'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <span className="text-2xl">📍</span>
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-600">123 Business Street<br />New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-2xl">📧</span>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">contact@plwebsite.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-2xl">📞</span>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            {submitted ? (
              <div className="text-center py-12">
                <span className="text-6xl mb-4 block">✅</span>
                <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                <p className="text-gray-600">
                  We've received your message and will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
