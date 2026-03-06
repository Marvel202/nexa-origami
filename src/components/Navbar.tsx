'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              <Image
                src="/logo.jpeg"
                alt="Nexa Origami"
                fill
                className="object-cover rounded"
              />
            </div>
            <span className="font-heading text-xl font-bold text-primary">
              Nexa Origami
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            <Link
              href="/"
              className="text-neutral-600 hover:text-primary transition"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-neutral-600 hover:text-primary transition"
            >
              About
            </Link>
            <Link
              href="/products"
              className="text-neutral-600 hover:text-primary transition"
            >
              Products
            </Link>
            <Link
              href="/contact"
              className="text-neutral-600 hover:text-primary transition"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Hamburger Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1"
          >
            <div
              className={`w-6 h-0.5 bg-neutral-900 transition-all ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <div
              className={`w-6 h-0.5 bg-neutral-900 transition-all ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <div
              className={`w-6 h-0.5 bg-neutral-900 transition-all ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-4">
            <Link
              href="/"
              className="text-neutral-600 hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-neutral-600 hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/products"
              className="text-neutral-600 hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/contact"
              className="text-neutral-600 hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
