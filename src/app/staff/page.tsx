'use client';
import Link from 'next/link';
import { Calendar, Clock, FileText, Settings, Home, LogOut } from 'lucide-react';

export default function StaffPortal() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center space-x-2 text-purple-600 hover:text-purple-700">
                <Home className="w-5 h-5" />
                <span className="font-semibold">Back to Home</span>
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">Staff Portal</h1>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-purple-600 transition">
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white mb-8">
          <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
          <p className="text-purple-100">Manage your shifts, availability, and timesheets</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-700">Today's Shifts</h3>
              <Calendar className="w-5 h-5 text-purple-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900">0</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-700">This Week</h3>
              <Clock className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900">0</p>
            <p className="text-sm text-gray-500">shifts scheduled</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-700">Pending</h3>
              <FileText className="w-5 h-5 text-yellow-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900">0</p>
            <p className="text-sm text-gray-500">timesheets</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-700">Documents</h3>
              <FileText className="w-5 h-5 text-green-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900">0</p>
            <p className="text-sm text-gray-500">need attention</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/staff/shifts" className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl hover:shadow-md transition border-2 border-purple-200 hover:border-purple-300">
              <Calendar className="w-8 h-8 text-purple-600 mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">View Shifts</h3>
              <p className="text-sm text-gray-600">See your upcoming shifts and schedule</p>
            </Link>
            <Link href="/staff/availability" className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:shadow-md transition border-2 border-blue-200 hover:border-blue-300">
              <Clock className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Set Availability</h3>
              <p className="text-sm text-gray-600">Update your available days and times</p>
            </Link>
            <Link href="/staff/timesheets" className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl hover:shadow-md transition border-2 border-green-200 hover:border-green-300">
              <FileText className="w-8 h-8 text-green-600 mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Submit Timesheet</h3>
              <p className="text-sm text-gray-600">Log your hours and submit for approval</p>
            </Link>
          </div>
        </div>

        {/* Upcoming Shifts Section */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Upcoming Shifts</h2>
          <div className="text-center py-12">
            <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 mb-4">No upcoming shifts scheduled</p>
            <Link href="/staff/shifts" className="inline-block px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
              View All Shifts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
