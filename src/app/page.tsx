import Link from 'next/link';
import { Heart, Shield, Clock, Users } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Compassionate care you can trust
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Person-centred home care across Bournemouth, Dorset & Hampshire
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/services" className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition">
                View Our Services
              </Link>
              <Link href="/contact" className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Home Care', desc: 'Flexible care from 1 hour to 24/7 support' },
              { title: 'Live-in Care', desc: 'Round-the-clock care in your own home' },
              { title: 'Supported Living', desc: 'Independent living with specialist support' },
              { title: 'Residential Support', desc: 'Staffing solutions for care homes' },
            ].map((service) => (
              <div key={service.title} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <Heart className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <Link href="/services" className="text-primary-600 font-semibold hover:underline">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Homely Health Care</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <Shield className="w-16 h-16 text-primary-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">CQC Rated Good</h3>
              <p className="text-gray-600">Regulated, inspected, and approved for quality care delivery</p>
            </div>
            <div className="text-center">
              <Users className="w-16 h-16 text-primary-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Trained Staff</h3>
              <p className="text-gray-600">Highly qualified carers and specialist nurses</p>
            </div>
            <div className="text-center">
              <Clock className="w-16 h-16 text-primary-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">24/7 Support</h3>
              <p className="text-gray-600">On-call support whenever you need us</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-xl mb-8">Contact us today for a free consultation</p>
          <div className="flex gap-4 justify-center flex-col sm:flex-row">
            <a href="tel:01202948898" className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold">
              Call 01202 948 898
            </a>
            <Link href="/contact" className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10">
              Request a Call Back
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
