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
    </main>
  );
}
