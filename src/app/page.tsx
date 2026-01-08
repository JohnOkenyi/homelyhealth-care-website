import Link from 'next/link';
import { Users, Shield, Heart, Clock, Award, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="w-8 h-8 text-purple-600" fill="currentColor" />
              <span className="text-2xl font-bold text-gray-900">Homely Health Care</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-purple-600 transition">Services</a>
              <a href="#about" className="text-gray-700 hover:text-purple-600 transition">About</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 transition">Contact</a>
            </div>
            <div className="flex gap-3">
              <Link href="/staff" className="flex items-center gap-2 px-4 py-2 text-purple-600 border-2 border-purple-600 rounded-lg hover:bg-purple-50 transition">
                <Users className="w-4 h-4" />
                Staff Login
              </Link>
              <Link href="/admin" className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                <Shield className="w-4 h-4" />
                Admin Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-100 opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold">
              CQC Inspected & Rated Good
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Exceptional Home Care You Can <span className="text-purple-600">Trust</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Professional home care services across the UK, delivered with warmth, dedication, and compassion
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="#contact" className="px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200">
                Get Started Today
              </a>
              <a href="#services" className="px-8 py-4 bg-white text-purple-600 rounded-lg border-2 border-purple-600 hover:bg-purple-50 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200">
                Our Services
              </a>
            </div>
            <div className="mt-12 flex justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Qualified Carers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Personalized Care</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Healthcare Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive care solutions tailored to meet the unique needs of every individual
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 border-2 border-gray-200 rounded-2xl hover:border-purple-300 hover:shadow-xl transition duration-300 bg-gradient-to-br from-white to-purple-50">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Home Care</h3>
              <p className="text-gray-600 mb-4">Comprehensive support to help you maintain independence at home</p>
              <a href="#" className="text-purple-600 font-semibold hover:text-purple-700 inline-flex items-center">
                Learn More →
              </a>
            </div>
            <div className="p-8 border-2 border-gray-200 rounded-2xl hover:border-purple-300 hover:shadow-xl transition duration-300 bg-gradient-to-br from-white to-blue-50">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Live-in Care</h3>
              <p className="text-gray-600 mb-4">Around-the-clock care and companionship in your own home</p>
              <a href="#" className="text-purple-600 font-semibold hover:text-purple-700 inline-flex items-center">
                Learn More →
              </a>
            </div>
            <div className="p-8 border-2 border-gray-200 rounded-2xl hover:border-purple-300 hover:shadow-xl transition duration-300 bg-gradient-to-br from-white to-green-50">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Supported Living</h3>
              <p className="text-gray-600 mb-4">Enabling individuals to live independently with tailored support</p>
              <a href="#" className="text-purple-600 font-semibold hover:text-purple-700 inline-flex items-center">
                Learn More →
              </a>
            </div>
            <div className="p-8 border-2 border-gray-200 rounded-2xl hover:border-purple-300 hover:shadow-xl transition duration-300 bg-gradient-to-br from-white to-yellow-50">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Specialized Care</h3>
              <p className="text-gray-600 mb-4">Expert care for dementia, complex needs, and specialized conditions</p>
              <a href="#" className="text-purple-600 font-semibold hover:text-purple-700 inline-flex items-center">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Why Choose Homely Health Care?</h2>
            <p className="text-xl mb-8 opacity-90">
              At the heart of Homely Health Care is a dedicated, experienced, and professional team of Carers and Support Workers who make us who we are.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-4xl font-bold mb-2">100+</div>
                <div className="opacity-90">Qualified Carers</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="opacity-90">Happy Clients</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="opacity-90">Available Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-purple-50 to-blue-50 p-12 rounded-3xl shadow-xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-700 mb-8">
              Contact us today for a free consultation and discover how we can help you or your loved ones
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:01202948898" className="px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition shadow-lg">
                Call: 01202 948 898
              </a>
              <a href="mailto:info@homelyhealth.uk" className="px-8 py-4 bg-white text-purple-600 border-2 border-purple-600 rounded-lg hover:bg-purple-50 transition shadow-lg">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="w-6 h-6 text-purple-400" fill="currentColor" />
                <span className="text-xl font-bold">Homely Health Care</span>
              </div>
              <p className="text-gray-400 text-sm">
                Professional home care services delivered with compassion and excellence.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#services" className="hover:text-purple-400 transition">Services</a></li>
                <li><a href="#about" className="hover:text-purple-400 transition">About Us</a></li>
                <li><Link href="/staff" className="hover:text-purple-400 transition">Staff Portal</Link></li>
                <li><Link href="/admin" className="hover:text-purple-400 transition">Admin Portal</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Suite 6a, Wessex House</li>
                <li>Bournemouth, BH8 8QS</li>
                <li>Phone: 01202 948 898</li>
                <li>Email: info@homelyhealth.uk</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">CQC Rating</h3>
              <p className="text-sm text-gray-400 mb-2">Inspected & Rated Good</p>
              <div className="inline-block px-3 py-1 bg-green-600 text-white text-xs rounded-full">CQC Registered</div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Homely Health Care. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
