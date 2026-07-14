'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { AuthButton, Container, Card } from '@/components';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSignUp = async () => {
    setError(null);
    setIsLoading(true);

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      });

      if (error) throw error;

      setSuccess(true);
      setEmail('');
      setPassword('');
      setFullName('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 flex items-center justify-center px-4">
      <Container>
        <div className="max-w-md w-full">
          <Card className="bg-navy-800 border border-navy-700">
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-white">Create Account</h1>
                <p className="text-gray-300 mt-2">Join Osta today</p>
              </div>

              {success && (
                <div className="bg-ok/20 border border-ok text-ok p-3 rounded-lg text-sm">
                  ✓ Account created! Check your email to verify.
                </div>
              )}

              {error && (
                <div className="bg-danger/20 border border-danger text-danger p-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full px-4 py-2 bg-navy-900 border border-navy-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-blue"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-4 py-2 bg-navy-900 border border-navy-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-blue"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-4 py-2 bg-navy-900 border border-navy-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-blue"
                  />
                </div>
              </div>

              <AuthButton
                onClick={handleSignUp}
                className="w-full"
              >
                Create Account
              </AuthButton>

              <p className="text-center text-gray-400 text-sm">
                Already have an account?{' '}
                <a href="/auth/login" className="text-brand-blue hover:text-brand-light">
                  Sign in
                </a>
              </p>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
}
