export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
        <p className="text-xl text-gray-600 mb-12">
          Get in touch with our friendly team. We are here to answer your questions and discuss your care needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Phone</h3>
                  <p className="text-gray-600">01202 948 898</p>
                  <p className="text-gray-600">07985 591 098</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <p className="text-gray-600">info@homelyhealth.uk</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Office Address</h3>
                  <p className="text-gray-600">
                    Suite 6a, Wessex House<br />
                    St. Leonards Road, Charminster<br />
                    Bournemouth, BH8 9UH
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-purple-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Office Hours</h3>
              <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p className="text-gray-600">24/7 On-Call Support Available</p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us A Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray
# CONTINUATION - Contact Page (finish it)
@'
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
        <p className="text-xl text-gray-600 mb-12">Get in touch with our friendly team.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">📞</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Phone</h3>
                  <p className="text-gray-600">01202 948 898</p>
                  <p className="text-gray-600">07985 591 098</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">✉️</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <p className="text-gray-600">info@homelyhealth.uk</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">📍</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Office Address</h3>
                  <p className="text-gray-600">
                    Suite 6a, Wessex House<br />
                    St. Leonards Road, Charminster<br />
                    Bournemouth, BH8 9UH
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-purple-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Form Coming Soon</h2>
            <p className="text-gray-600">Please call or email us directly for now.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
