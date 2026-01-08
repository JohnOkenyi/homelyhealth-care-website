'use client';
import Link from 'next/link';
import { LayoutDashboard, Calendar, Users, UserCog, FileText, Home, LogOut, Settings, TrendingUp } from 'lucide-react';

export default function AdminPortal() {
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
              <h1 className="text-2xl font-bold text-gray-900">Admin Portal</h1>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-600 hover:text-purple-600 transition">
                <Settings className="w-5 h-5" />
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-purple-600 transition">
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white mb-8">
          <h2 className="text-3xl font-bold mb-2">Admin Dashboard</h2>
          <p className="text-purple-100">Manage your organization, staff, clients, and operations</p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-5 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-700">Total Staff</h3>
              <UserCog className="w-5 h-5 text-purple-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900">0</p>
            <p className="text-sm text-green-600 mt-2">6 active</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-700">Total Clients</h3>
              <Users className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900">0</p>
            <p className="text-sm text-gray-500 mt-2">active clients</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-700">Open Shifts</h3>
              <Calendar className="w-5 h-5 text-yellow-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900">2</p>
            <p className="text-sm text-gray-500 mt-2">need assignment</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-700">Pending Timesheets</h3>
              <FileText className="w-5 h-5 text-orange-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900">0</p>
            <p className="text-sm text-gray-500 mt-2">awaiting approval</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-700">Documents</h3>
              <FileText className="w-5 h-5 text-red-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900">2</p>
            <p className="text-sm text-gray-500 mt-2">expiring/expired</p>
          </div>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Link href="/admin/rota" className="bg-white rounded-xl p-6 shadow-sm border-2 border-gray-200 hover:border-purple-300 hover:shadow-md transition">
            <Calendar className="w-10 h-10 text-purple-600 mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Rota Management</h3>
            <p className="text-sm text-gray-600 mb-4">Manage shifts and assignments</p>
            <div className="flex items-center text-purple-600 text-sm font-semibold">
              View →
            </div>
          </Link>
          <Link href="/admin/staff" className="bg-white rounded-xl p-6 shadow-sm border-2 border-gray-200 hover:border-blue-300 hover:shadow-md transition">
            <UserCog className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Staff Management</h3>
            <p className="text-sm text-gray-600 mb-4">Add, edit, and manage staff</p>
            <div className="flex items-center text-blue-600 text-sm font-semibold">
              Manage →
            </div>
          </Link>
          <Link href="/admin/clients" className="bg-white rounded-xl p-6 shadow-sm border-2 border-gray-200 hover:border-green-300 hover:shadow-md transition">
            <Users className="w-10 h-10 text-green-600 mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Client Management</h3>
            <p className="text-sm text-gray-600 mb-4">Manage client profiles and care</p>
            <div className="flex items-center text-green-600 text-sm font-semibold">
              Manage →
            </div>
          </Link>
          <Link href="/admin/timesheets" className="bg-white rounded-xl p-6 shadow-sm border-2 border-gray-200 hover:border-orange-300 hover:shadow-md transition">
            <FileText className="w-10 h-10 text-orange-600 mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Timesheets</h3>
            <p className="text-sm text-gray-600 mb-4">Review and approve timesheets</p>
            <div className="flex items-center text-orange-600 text-sm font-semibold">
              Review →
            </div>
          </Link>
        </div>

        {/* Recent Activity & Alerts */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-purple-600" />
              Recent Activity
            </h2>
            <div className="space-y-4">
              <div className="text-center py-8 text-gray-500">
                <p>No recent activity to display</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Alerts</h2>
            <div className="space-y-3">
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold text-gray-900">2 Unassigned Shifts</p>
                    <p className="text-sm text-gray-600">This week's rota has open positions</p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold text-gray-900">2 Documents Expiring</p>
                    <p className="text-sm text-gray-600">Staff certifications need renewal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
