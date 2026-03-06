import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Column */}
          <div>
            <h3 className="font-heading text-xl font-bold text-primary mb-2">
              Nexa Origami
            </h3>
            <p className="text-neutral-400">
              Origami products for young, vibrant people who love nostalgia
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-heading font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <Link href="/" className="hover:text-primary transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary transition">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-heading font-bold mb-4">Contact</h4>
            <a
              href="mailto:thenexa.ja@gmail.com"
              className="text-neutral-400 hover:text-primary transition"
            >
              thenexa.ja@gmail.com
            </a>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8">
          <p className="text-neutral-400 text-center">
            © 2024 Nexa Origami. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
