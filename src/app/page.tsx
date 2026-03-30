import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/data/products';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Decorative Blur Circles */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-60 pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary-green/10 rounded-full blur-3xl opacity-60 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div>
              <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-neutral-900">
                Fold Your World with Colour & Creativity
              </h1>
              <p className="text-lg text-neutral-600 mb-8">
                Discover our collection of origami products designed for young, vibrant people who love nostalgia. Each piece crafted with care and creativity.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/products"
                  className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition"
                >
                  Shop Now
                </Link>
                <Link
                  href="/about"
                  className="border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:shadow-xl transition"
                >
                  Our Story
                </Link>
              </div>
            </div>

            {/* YouTube Embed */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/GGlYl_HvjdQ?si=DdHcXwlk61og1hMz"
                title="Nexa Origami Promo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold text-neutral-900 mb-4">
              Featured Products
            </h2>
            <p className="text-neutral-600 text-lg">
              Explore our latest origami creations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product) => (
              <Link
                key={product.id}
                href="/products"
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition overflow-hidden group"
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-heading font-bold text-neutral-900 mb-1">
                    {product.name}
                  </h3>
                  <p className="text-primary font-semibold">
                    ${product.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* Charity Partnership Section */}
      <section className="relative py-24 overflow-hidden bg-white">
        {/* Background texture layers */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] bg-red-500/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[2px] bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section label */}
          <div className="flex items-center justify-center gap-3 mb-14">
            <span className="h-px w-12 bg-primary/30" />
            <span className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-primary/70">
              Giving Back
            </span>
            <span className="h-px w-12 bg-primary/30" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl">
            {/* Clock image panel */}
            <div className="relative min-h-[480px] bg-neutral-100 group overflow-hidden">
              <Image
                src="/Clock-new.jpeg"
                alt="Origami Heart Clock"
                fill
                className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700"
              />

              {/* Product badge */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg z-10">
                <p className="font-heading text-sm font-bold text-neutral-900">Origami Heart Clock</p>
                <p className="font-body text-xs text-primary font-semibold mt-0.5">$150.00</p>
              </div>
            </div>

            {/* Charity info panel */}
            <div className="relative flex flex-col justify-center px-10 py-14 bg-neutral-950">
              {/* Decorative fold lines */}
              <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-white/5 rounded-bl-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-white/5 rounded-tr-3xl pointer-events-none" />

              {/* STC Logo */}
              <div className="mb-8">
                <div className="inline-flex items-center bg-white rounded-2xl px-6 py-4 shadow-lg">
                  <Image
                    src="/save-the-children-logo.png"
                    alt="Save the Children"
                    width={260}
                    height={68}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* 25% callout */}
              <div className="flex items-baseline gap-2 mb-5">
                <span className="font-heading text-7xl font-extrabold text-red-500 leading-none tracking-tight">
                  25%
                </span>
                <span className="font-heading text-2xl font-bold text-white leading-tight">
                  of profits<br />donated
                </span>
              </div>

              <p className="font-body text-neutral-300 text-base leading-relaxed mb-8 max-w-sm">
                Our partnership with <span className="text-white font-semibold">Save the Children</span> means every Origami Clock sold directly supports children in need. 25% of profits from the Origami Heart Clock go straight to the organisation.
              </p>

              {/* Divider */}
              <div className="w-12 h-0.5 bg-red-500 mb-8" />

              <Link
                href="/products"
                className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-heading font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-red-900/40 w-fit"
              >
                Shop the Clock
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
