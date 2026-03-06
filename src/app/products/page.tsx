'use client';

import { useState } from 'react';
import Image from 'next/image';
import { products } from '@/data/products';

interface OrderData {
  name: string;
  email: string;
  quantity: number;
  productId: number;
}

export default function Products() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<(typeof products)[0] | null>(null);
  const [orderData, setOrderData] = useState<OrderData>({
    name: '',
    email: '',
    quantity: 1,
    productId: 0,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleOrderClick = (product: (typeof products)[0]) => {
    setSelectedProduct(product);
    setOrderData({ name: '', email: '', quantity: 1, productId: product.id });
    setIsModalOpen(true);
    setIsSubmitted(false);
    setResponseMessage('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setOrderData((prev) => ({
      ...prev,
      [name]: name === 'quantity' ? parseInt(value) || 1 : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: orderData.name,
          email: orderData.email,
          productName: selectedProduct?.name,
          productPrice: selectedProduct?.price,
          quantity: orderData.quantity,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setIsSubmitted(true);
        setResponseMessage(data.message);
        setTimeout(() => {
          setIsModalOpen(false);
          setIsSubmitted(false);
          setResponseMessage('');
        }, 3000);
      } else {
        setResponseMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setResponseMessage('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsSubmitted(false);
    setResponseMessage('');
  };

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
                    className="object-cover group-hover:scale-105 transition"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-neutral-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-neutral-600 text-sm mb-4">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-primary font-bold text-lg">
                      ${product.price}
                    </p>
                  </div>
                  <p className={`text-sm mb-4 ${product.stock > 0 ? 'text-secondary-green' : 'text-red-500'}`}>
                    {product.stock > 0 ? `In Stock: ${product.stock}` : 'Out of Stock'}
                  </p>
                  <button
                    onClick={() => handleOrderClick(product)}
                    disabled={product.stock === 0}
                    className="w-full bg-primary text-white py-2 rounded-full font-semibold hover:shadow-xl transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {product.stock > 0 ? 'Order' : 'Sold Out'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
            {isSubmitted ? (
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">✓</span>
                </div>
                <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-2">
                  Order Received!
                </h2>
                <p className="text-neutral-600">
                  {responseMessage}
                </p>
              </div>
            ) : (
              <>
                <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-2">
                  Order {selectedProduct?.name}
                </h2>
                <p className="text-neutral-600 mb-6">
                  ${selectedProduct?.price}
                </p>

                {responseMessage && !isSubmitted && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                    {responseMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block text-neutral-700 font-semibold mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={orderData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-neutral-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-neutral-700 font-semibold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={orderData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-neutral-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-neutral-700 font-semibold mb-2">
                      Quantity
                    </label>
                    <input
                      type="number"
                      name="quantity"
                      value={orderData.quantity}
                      onChange={handleInputChange}
                      min="1"
                      max={selectedProduct?.stock || 1}
                      required
                      className="w-full border border-neutral-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
                    />
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="flex-1 border-2 border-neutral-300 text-neutral-700 py-2 rounded-full font-semibold hover:bg-neutral-50 transition"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-primary text-white py-2 rounded-full font-semibold hover:shadow-xl transition disabled:opacity-50"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Order'}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
