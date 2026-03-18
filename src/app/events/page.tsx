import Image from "next/image";

const KT_DESC = "Our Kai Tak pop-up was a massive hit. Visitors swept through the full collection and the energy was electric. Families discovered handmade craft together, curious shoppers lingered, and smiles were everywhere. Strong sales, warm conversations, and that unmistakable origami magic."  
const OC_DESC = "We brought colour and creativity to Olympian City for a two-day curated showcase. Shoppers were drawn in by the vibrant display and stayed for the stories behind each piece. The Origami Boat and Plane were crowd favourites."
const events = [
  { id: 1, title: "Pop-Up Shop at Kai Tak Mall", date: "7 – 8 March 2026", location: "Kai Tak Mall, Kowloon", description: KT_DESC, images: ["/events/KT_7032026-1.jpg", "/events/KT_7032026-2.jpg"] },
  { id: 2, title: "Pop-Up Shop at Olympian City", date: "15 March 2026", location: "Olympian City, West Kowloon", description: OC_DESC, images: ["/events/OC_15032026.jpg"] },
];

export default function Events() {
  return (
    <main>
      <section className="bg-gradient-to-r from-primary to-secondary-green py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">Events</h1>
          <p className="text-neutral-100 text-lg mt-4">Where we have been &mdash; pop-ups, markets, and good vibes</p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {events.map((event) => (
            <div key={event.id}>
              <div className="mb-8">
                <span className="inline-block bg-primary/10 text-primary font-semibold text-sm px-4 py-1 rounded-full mb-3">{event.date}</span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900">{event.title}</h2>
                <p className="text-neutral-500 mt-1">{event.location}</p>
              </div>
              <div className={`grid gap-4 mb-8 ${event.images.length > 1 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 max-w-2xl"}`}>
                {event.images.map((src, idx) => (
                  <div key={idx} className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                    <Image src={src} alt={`${event.title} photo ${idx + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
              <p className="text-neutral-600 text-lg leading-relaxed max-w-3xl">{event.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-neutral-900 mb-4">Want to see us at your next event?</h2>
          <p className="text-neutral-600 mb-8">We are always looking for new pop-up opportunities. Get in touch and let us make it happen.</p>
          <a href="/contact" className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition">Contact Us</a>
        </div>
      </section>
    </main>
  );
}
