'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <main>
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-secondary-green to-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">
            Contact Us
          </h1>
          <p className="text-neutral-100 text-lg mt-4">
            We&apos;d love to hear from you. Get in touch with our team today.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-neutral-900 mb-8">
                Get in Touch
              </h2>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">✉</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-neutral-900 mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:thenexa.ja@gmail.com"
                      className="text-primary hover:text-primary-dark transition"
                    >
                      thenexa.ja@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🌐</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-neutral-900 mb-1">
                      Website
                    </h3>
                    <p className="text-neutral-600">
                      www.nexaorigami.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📱</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-neutral-900 mb-1">
                      Follow Us
                    </h3>
                    <p className="text-neutral-600">
                      @nexaorigami on all platforms
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-neutral-900 mb-8">
                Send us a Message
              </h2>

              {isSubmitted ? (
                <div className="bg-secondary-green/10 border-2 border-secondary-green rounded-2xl p-8 text-center">
                  <div className="text-4xl mb-4">✓</div>
                  <h3 className="font-heading text-2xl font-bold text-secondary-green mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-neutral-600">
                    Thank you for reaching out. We&apos;ll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-neutral-700 font-semibold mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full border-2 border-neutral-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral-700 font-semibold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full border-2 border-neutral-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral-700 font-semibold mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full border-2 border-neutral-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition resize-none"
                      placeholder="Your message here..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 rounded-full font-semibold hover:shadow-xl transition"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
