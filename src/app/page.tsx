export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="relative bg-gradient-to-br from-purple-50 to-blue-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Compassionate Care at Home
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Professional home care services across the UK, delivered with warmth and dedication
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="/contact" className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition">
                Get Started
              </a>
              <a href="/services" className="bg-white text-purple-600 px-8 py-3 rounded-lg border-2 border-purple-600 hover:bg-purple-50 transition">
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">Personal Care</h3>
              <p className="text-gray-600">Assistance with daily living activities</p>
            </div>
            <div className="p-6 border rounded-lg hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">Companionship</h3>
              <p className="text-gray-600">Social support and friendly visits</p>
            </div>
            <div className="p-6 border rounded-lg hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">Specialized Care</h3>
              <p className="text-gray-600">Dementia and complex needs support</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-purple-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Contact us today for a free consultation</p>
          <a href="/contact" className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition inline-block">
            Contact Us
          </a>
        </div>
      </section>
    </main>
  )
}