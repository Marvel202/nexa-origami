import Image from 'next/image';
import { products } from '@/data/products';

export default function Products() {
  return (
    <main>
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-secondary-blue to-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">
            Our Products
          </h1>
          <p className="text-neutral-100 text-lg mt-4">
            Explore our collection of beautifully crafted origami products
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-neutral-200 rounded-2xl shadow-sm hover:shadow-xl transition overflow-hidden group"
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain group-hover:scale-105 transition"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-neutral-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-neutral-600 text-sm mb-4">
                    {product.description}
                  </p>
                  <p className="text-primary font-bold text-lg">
                    ${product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
