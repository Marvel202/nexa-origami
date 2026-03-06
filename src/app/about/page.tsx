export default function About() {
  return (
    <main>
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-primary to-primary-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">
            About Nexa Origami
          </h1>
          <p className="text-neutral-100 text-lg mt-4">
            Bringing nostalgia and creativity to life through the art of origami
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div>
              <div className="w-20 h-1 bg-secondary-blue mb-6" />
              <h2 className="font-heading text-3xl font-bold text-neutral-900 mb-4">
                Our Mission
              </h2>
              <p className="text-neutral-600 text-lg">
                To inspire creativity and bring joy through beautifully crafted origami products that celebrate the art form&apos;s rich tradition while embracing modern design. We create pieces that speak to the nostalgic hearts of young, vibrant individuals who appreciate the intersection of tradition and contemporary aesthetics.
              </p>
            </div>

            {/* Vision */}
            <div>
              <div className="w-20 h-1 bg-secondary-green mb-6" />
              <h2 className="font-heading text-3xl font-bold text-neutral-900 mb-4">
                Our Vision
              </h2>
              <p className="text-neutral-600 text-lg">
                To become the leading brand in origami products worldwide, recognized for our commitment to quality, creativity, and sustainability. We envision a world where origami is celebrated as a form of personal expression and mindfulness, connecting people across cultures and generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl font-bold text-neutral-900 mb-12 text-center">
            Our Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Nostalgia Card */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="font-heading text-2xl font-bold text-neutral-900 mb-3">
                Nostalgia
              </h3>
              <p className="text-neutral-600">
                We celebrate the timeless charm of origami and create products that evoke cherished memories while appealing to modern sensibilities.
              </p>
            </div>

            {/* Innovation Card */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition">
              <div className="w-16 h-16 bg-secondary-blue/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">💡</span>
              </div>
              <h3 className="font-heading text-2xl font-bold text-neutral-900 mb-3">
                Innovation
              </h3>
              <p className="text-neutral-600">
                We constantly explore new designs, materials, and techniques to push the boundaries of what&apos;s possible in origami craftsmanship.
              </p>
            </div>

            {/* Colour Card */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition">
              <div className="w-16 h-16 bg-secondary-green/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="font-heading text-2xl font-bold text-neutral-900 mb-3">
                Colour
              </h3>
              <p className="text-neutral-600">
                We believe in the power of colour to inspire emotion and express personality. Every product is designed with vibrant, carefully chosen palettes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
