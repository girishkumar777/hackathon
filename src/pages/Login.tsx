import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import CustomCursor from '@/components/CustomCursor';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Ensure custom cursor is enabled on login page
    document.body.classList.add('cursor-none');
    
    return () => {
      document.body.classList.remove('cursor-none');
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      console.log('Login attempt:', { email, password });
      setIsLoading(false);
    }, 2000);
  };

  return (
    <>
      <CustomCursor />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#0a0a2e] to-slate-800 flex items-center justify-center px-4 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#00d4ff] rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#4ecdc4] rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#ff6b6b] rounded-full filter blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="w-full max-w-md space-y-8 relative z-10">
          {/* Back to Home Link */}
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center text-slate-300 hover:text-[#00d4ff] transition-all duration-300 transform hover:scale-105 group"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:translate-x-[-2px] transition-transform duration-300" />
              Back to Home
            </Link>
          </div>

          {/* Login Form Container */}
          <div className="bg-slate-800/50 backdrop-blur-xl border border-[#00d4ff]/20 rounded-2xl p-8 shadow-2xl shadow-[#00d4ff]/10 transform transition-all duration-500 hover:shadow-[#00d4ff]/20">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-[#00d4ff] via-[#4ecdc4] to-[#00d4ff] bg-clip-text text-transparent mb-2">
                Welcome Back
              </h1>
              <p className="text-slate-400">Sign in to continue your journey</p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-300 block">
                  Email Address
                </label>
                <div className="relative group">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#00d4ff] transition-colors duration-300" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 h-12 bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-[#00d4ff] focus:ring-[#00d4ff] focus:ring-2 transition-all duration-300 rounded-lg"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-slate-300 block">
                  Password
                </label>
                <div className="relative group">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#00d4ff] transition-colors duration-300" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-12 h-12 bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-[#00d4ff] focus:ring-[#00d4ff] focus:ring-2 transition-all duration-300 rounded-lg"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-[#00d4ff] transition-colors duration-300"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-slate-600 bg-slate-700 text-[#00d4ff] focus:ring-[#00d4ff] focus:ring-2"
                  />
                  <span className="text-sm text-slate-300">Remember me</span>
                </label>
                <Link 
                  to="#" 
                  className="text-sm text-[#00d4ff] hover:text-[#4ecdc4] transition-colors duration-300 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-gradient-to-r from-[#00d4ff] to-[#4ecdc4] hover:from-[#4ecdc4] hover:to-[#00d4ff] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-[#00d4ff]/25 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Signing In...</span>
                  </div>
                ) : (
                  'Sign In'
                )}
              </Button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-slate-800/50 text-slate-400">Or continue with</span>
              </div>
            </div>

            {/* Social Login Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center px-4 py-3 border border-slate-600 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105">
                <span className="text-slate-300 text-sm font-medium">Google</span>
              </button>
              <button className="flex items-center justify-center px-4 py-3 border border-slate-600 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105">
                <span className="text-slate-300 text-sm font-medium">GitHub</span>
              </button>
            </div>

            {/* Sign Up Link */}
            <div className="mt-6 text-center">
              <p className="text-slate-400">
                Don't have an account?{' '}
                <Link 
                  to="#" 
                  className="text-[#00d4ff] hover:text-[#4ecdc4] transition-colors duration-300 font-medium hover:underline"
                >
                  Sign up here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
