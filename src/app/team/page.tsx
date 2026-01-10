export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Meet Our Team</h1>
        <p className="text-xl text-gray-600 mb-12">
          Our dedicated team of care professionals is committed to providing exceptional person-centred care across Bournemouth and Dorset.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4">
              <span className="text-white text-2xl font-bold">L</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Leadership Team</h3>
            <p className="text-gray-600 mb-4">
              Experienced care managers dedicated to quality, compliance, and excellence in care delivery.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• CQC-rated Good leadership</li>
              <li>• 20+ years combined experience</li>
              <li>• Clinical Specialist Nurse on staff</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4">
              <span className="text-white text-2xl font-bold">C</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Care Coordinators</h3>
            <p className="text-gray-600 mb-4">
              Ensuring seamless care delivery and communication between staff, clients, and families.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• 24/7 on-call support</li>
              <li>• Personalized care planning</li>
              <li>• Regular reviews & updates</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4">
              <span className="text-white text-2xl font-bold">30+</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Care Workers</h3>
            <p className="text-gray-600 mb-4">
              Over 30 fully trained, DBS-checked care professionals delivering compassionate support.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Fully DBS-checked</li>
              <li>• Ongoing training programs</li>
              <li>• Dedicated & experienced</li>
            </ul>
          </div>
        </div>

        <div className="bg-purple-600 text-white p-12 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Award-Winning Team</h2>
          <p className="text-xl mb-8 opacity-90">
            We are always looking for passionate care professionals to join our growing team.
          </p>
          <a 
            href="/careers" 
            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition"
          >
            View Career Opportunities
          </a>
        </div>
      </div>
    </div>
  )
}
