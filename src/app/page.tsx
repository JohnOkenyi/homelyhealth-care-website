'use client';
import Link from 'next/link';
import { Heart, Shield, Clock, Users, CheckCircle, Award, Phone, Mail, MapPin, ChevronRight, Star, TrendingUp, Home, Activity, HeartPulse, UserCheck, FileText, Calendar } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <Heart className="text-white" size={28} fill="white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">Homely Health Care</h1>
                <p className="text-xs text-purple-600 font-semibold tracking-wide">Person-Centred Home Care</p>
              </div>
            </Link>

            {/* Navigation Links - Desktop */}
            <div className="hidden lg:flex items-center gap-8">
              <a href="#services" className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200">Services</a>
              <a href="#about" className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200">About Us</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200">Contact</a>
              <div className="h-8 w-px bg-gray-200"></div>
              <Link href="/staff" className="flex items-center gap-2 text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200">
                <Users size={18} />
                <span>Staff Login</span>
              </Link>
              <Link href="/admin" className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Admin Portal
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 -z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.1),transparent_50%)] -z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)] -z-10"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-5xl mx-auto">
            {/* CQC Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-lg mb-8 border border-purple-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center">
                <Shield className="text-white" size={20} />
              </div>
              <span className="text-sm font-bold text-gray-900">CQC Inspected & Rated Good</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-[1.1] tracking-tight">
              Exceptional home care <br className="hidden sm:block" />
              you can <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 animate-gradient">trust</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 mb-4 leading-relaxed font-light">
              in Bournemouth & Dorset
            </p>

            <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              Helping you or your loved ones live safely and independently at home with compassionate, professional care tailored to your unique needs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <a href="#contact" className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-full font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 transform hover:scale-105">
                Get Started Today
                <ChevronRight className="group-hover:translate-x-1 transition-transform duration-300" size={22} />
              </a>
              <a href="tel:01202948898" className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 rounded-full font-bold text-lg transition-all duration-300 shadow-xl border-2 border-gray-200 hover:border-purple-300 flex items-center justify-center gap-3">
                <Phone size={22} className="text-purple-600" />
                <span>01202 948 898</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {[
                { icon: CheckCircle, text: '24/7 Support' },
                { icon: UserCheck, text: '100+ Qualified Carers' },
                { icon: Heart, text: 'Personalized Care Plans' },
                { icon: Award, text: 'CQC Rated Good' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md border border-gray-100 hover:shadow-lg hover:border-purple-200 transition-all duration-300">
                  <item.icon className="text-purple-600" size={20} />
                  <span className="text-sm font-semibold text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 to-purple-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: Users, number: '100+', label: 'Qualified Carers', sublabel: 'DBS checked & trained' },
              { icon: Heart, number: '500+', label: 'Happy Clients', sublabel: 'Across Bournemouth & Dorset' },
              { icon: Clock, number: '24/7', label: 'Available Support', sublabel: 'Always here when you need us' },
            ].map((stat, idx) => (
              <div key={idx} className="group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors duration-300">
                  <stat.icon className="text-white" size={32} />
                </div>
                <div className="text-5xl font-extrabold text-white mb-2">{stat.number}</div>
                <div className="text-xl font-bold text-white mb-1">{stat.label}</div>
                <div className="text-sm text-purple-100">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">Our Healthcare Services</h2>
            <p className="text-xl text-gray-600">Comprehensive care solutions tailored to meet the unique needs of every individual</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Home, title: 'Home Care', desc: 'Comprehensive support to help maintain independence at home with personalized assistance', color: 'from-blue-500 to-blue-600' },
              { icon: HeartPulse, title: 'Live-in Care', desc: 'Around-the-clock care and companionship in the comfort of your own home', color: 'from-purple-500 to-purple-600' },
              { icon: Activity, title: 'Supported Living', desc: 'Enabling individuals to live independently with tailored support and assistance', color: 'from-pink-500 to-pink-600' },
              { icon: Heart, title: 'Specialized Care', desc: 'Expert care for dementia, complex needs, and specialized medical conditions', color: 'from-indigo-500 to-indigo-600' },
            ].map((service, idx) => (
              <div key={idx} className="group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-purple-200 transition-all duration-500 hover:-translate-y-2">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <service.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.desc}</p>
                <a href="#contact" className="inline-flex items-center gap-2 text-purple-600 font-semibold group-hover:gap-3 transition-all duration-300">
                  <span>Learn More</span>
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">Why Choose Homely Health Care?</h2>
            <p className="text-xl text-gray-600">At the heart of Homely Health Care is a dedicated, experienced and professional team of Carers and Support Workers who make us who we are.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: UserCheck, title: 'Qualified Professionals', desc: 'All our carers are DBS checked, fully trained, and experienced in providing exceptional care' },
              { icon: Heart, title: 'Person-Centred Approach', desc: 'We tailor our care plans to your unique needs, preferences, and lifestyle' },
              { icon: Shield, title: 'CQC Rated Good', desc: 'Independently regulated and inspected to ensure the highest standards of care' },
              { icon: Clock, title: '24/7 Availability', desc: 'Round-the-clock support available whenever you need us, day or night' },
              { icon: Award, title: 'Award-Winning Care', desc: 'Recognized for excellence in providing compassionate, professional home care' },
              { icon: TrendingUp, title: 'Continuous Improvement', desc: 'Regular training and development to ensure the best possible care outcomes' },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="text-purple-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-purple-100 mb-10">Contact us today for a free consultation and discover how we can help you or your loved ones</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:01202948898" className="px-10 py-5 bg-white hover:bg-gray-50 text-purple-700 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl flex items-center justify-center gap-3 group">
              <Phone size={24} />
              <span>Call: 01202 948 898</span>
            </a>
            <a href="mailto:info@homelyhealth.uk" className="px-10 py-5 bg-purple-500 hover:bg-purple-600 text-white rounded-full font-bold text-lg transition-all duration-300 shadow-2xl flex items-center justify-center gap-3 group">
              <Mail size={24} />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center">
                  <Heart className="text-white" size={24} fill="white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Homely Health Care</h3>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">Professional home care services delivered with compassion and excellence.</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#services" className="text-gray-400 hover:text-purple-400 transition-colors">Services</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors">About Us</a></li>
                <li><Link href="/staff" className="text-gray-400 hover:text-purple-400 transition-colors">Staff Portal</Link></li>
                <li><Link href="/admin" className="text-gray-400 hover:text-purple-400 transition-colors">Admin Portal</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-6">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="text-purple-400 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-400">Suite 6a, Wessex House<br/>Bournemouth, BH8 8QS</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="text-purple-400 flex-shrink-0" size={20} />
                  <a href="tel:01202948898" className="text-gray-400 hover:text-purple-400 transition-colors">01202 948 898</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="text-purple-400 flex-shrink-0" size={20} />
                  <a href="mailto:info@homelyhealth.uk" className="text-gray-400 hover:text-purple-400 transition-colors">info@homelyhealth.uk</a>
                </li>
              </ul>
            </div>

            {/* CQC Rating */}
            <div>
              <h4 className="text-lg font-bold mb-6">CQC Rating</h4>
              <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="text-purple-400" size={24} />
                  <span className="font-bold">Inspected & Rated Good</span>
                </div>
                <p className="text-sm text-gray-400">CQC Registered</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">© 2024 Homely Health Care. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}