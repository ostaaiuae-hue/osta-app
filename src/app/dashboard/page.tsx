'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Container, Card } from '@/components';

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (!user) {
          window.location.href = '/auth/login';
          return;
        }

        setUser(user);
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setIsLoading(false);
      }
    };

    getUser();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = '/';
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 flex items-center justify-center">
        <div className="text-white text-lg sm:text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-navy-950/95 backdrop-blur border-b border-navy-800">
        <Container>
          <div className="py-4 flex justify-between items-center">
            <h1 className="text-xl sm:text-2xl font-bold text-brand-blue">Osta Dashboard</h1>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white hover:bg-navy-800 rounded-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Desktop logout button */}
            <button
              onClick={handleLogout}
              className="hidden md:block px-4 sm:px-6 py-2 bg-danger text-white rounded-lg hover:bg-red-600 transition-colors font-semibold text-sm sm:text-base"
            >
              Logout
            </button>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4">
              <button
                onClick={handleLogout}
                className="w-full px-4 py-2 bg-danger text-white rounded-lg hover:bg-red-600 transition-colors font-semibold text-sm"
              >
                Logout
              </button>
            </div>
          )}
        </Container>
      </div>

      {/* Main Content */}
      <Container className="py-6 sm:py-8">
        <div className="space-y-4 sm:space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Welcome, <span className="text-brand-blue">{user?.email?.split('@')[0]}</span>!
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mt-2">
              This is your dashboard. More features coming soon.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            <Card className="bg-navy-800 border border-navy-700">
              <h3 className="text-sm sm:text-base font-semibold text-brand-blue">Services</h3>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-3">0</p>
              <p className="text-xs sm:text-sm text-gray-400 mt-2">Active services</p>
            </Card>

            <Card className="bg-navy-800 border border-navy-700">
              <h3 className="text-sm sm:text-base font-semibold text-brand-blue">Bookings</h3>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-3">0</p>
              <p className="text-xs sm:text-sm text-gray-400 mt-2">Total bookings</p>
            </Card>

            <Card className="bg-navy-800 border border-navy-700">
              <h3 className="text-sm sm:text-base font-semibold text-brand-blue">Revenue</h3>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-3">$0</p>
              <p className="text-xs sm:text-sm text-gray-400 mt-2">This month</p>
            </Card>
          </div>

          {/* Welcome Card */}
          <Card className="bg-gradient-to-br from-brand-blue/10 to-brand-light/5 border border-brand-blue/20">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Get Started</h3>
            <p className="text-gray-300 text-sm sm:text-base mb-4">
              Complete your profile and create your first service to begin accepting bookings.
            </p>
            <button className="px-4 sm:px-6 py-2 bg-brand-blue text-white rounded-lg hover:bg-brand-light transition-colors font-semibold text-sm sm:text-base">
              Get Started
            </button>
          </Card>
        </div>
      </Container>
    </div>
  );
}
