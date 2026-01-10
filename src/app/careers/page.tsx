export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Join Our Team</h1>
        <p className="text-xl text-gray-600 mb-12">
          Build a rewarding career in care with Homely Health Care. We offer competitive pay, flexible hours, and comprehensive training.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-purple-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Work With Us?</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Competitive pay rates with regular reviews</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Flexible working hours to suit your lifestyle</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Comprehensive induction and ongoing training</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Supportive management team</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Career progression opportunities</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Mileage reimbursement</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Current Openings</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-purple-600 pl-4">
                <h4 className="font-bold text-lg">Care Workers</h4>
                <p className="text-gray-600">Full-time & Part-time positions</p>
              </div>
              <div className="border-l-4 border-purple-600 pl-4">
                <h4 className="font-bold text-lg">Senior Care Workers</h4>
                <p className="text-gray-600">Experience required</p>
              </div>
              <div className="border-l-4 border-purple-600 pl-4">
                <h4 className="font-bold text-lg">Live-in Carers</h4>
                <p className="text-gray-600">Various locations</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-purple-600 p-12 rounded-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Apply?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Send your CV to <a href="mailto:info@homelyhealth.uk" className="text-purple-600 hover:underline">info@homelyhealth.uk</a>
          </p>
          <div className="flex gap-4 justify-center">
            <a href="tel:01202948898" className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700">
              Call: 01202 948 898
            </a>
            <a href="tel:07985591098" className="bg-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-700">
              Call: 07985 591 098
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
