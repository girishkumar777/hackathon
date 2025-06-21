
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface CertificateVerificationProps {
  isVisible: boolean;
}

const CertificateVerification = ({ isVisible }: CertificateVerificationProps) => {
  const [internId, setInternId] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<'success' | 'error' | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const { toast } = useToast();

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);
    setVerificationResult(null);
    
    // Simulate verification process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock verification logic
    const isValid = internId.toLowerCase().startsWith('si') && internId.length >= 6;
    
    if (isValid) {
      setVerificationResult('success');
      toast({
        title: "Certificate Verified!",
        description: "This certificate is authentic and valid.",
      });
    } else {
      setVerificationResult('error');
      toast({
        title: "Verification Failed",
        description: "Certificate not found. Please check your Intern ID.",
        variant: "destructive"
      });
    }
    
    setIsVerifying(false);
  };

  return (
    <div className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 ${
      isVisible ? 'animate-fade-in' : 'opacity-0'
    }`} style={{ animationDelay: '0.5s' }}>
      <h3 className="text-2xl font-bold text-white mb-6">Certificate Verification</h3>
      
      <div className="space-y-6">
        {/* Security Badges */}
        <div className="flex justify-center space-x-4 mb-6">
          <div className="flex items-center space-x-2 bg-green-600/20 border border-green-500/50 rounded-lg px-3 py-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 text-sm font-medium">Secure</span>
          </div>
          <div className="flex items-center space-x-2 bg-blue-600/20 border border-blue-500/50 rounded-lg px-3 py-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-blue-400 text-sm font-medium">Verified</span>
          </div>
          <div className="flex items-center space-x-2 bg-purple-600/20 border border-purple-500/50 rounded-lg px-3 py-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <span className="text-purple-400 text-sm font-medium">Authentic</span>
          </div>
        </div>

        <form onSubmit={handleVerify} className="space-y-4">
          {/* Intern ID Input */}
          <div className="relative">
            <input
              type="text"
              value={internId}
              onChange={(e) => setInternId(e.target.value)}
              required
              className={`w-full bg-transparent border-2 rounded-lg px-4 pt-6 pb-2 text-white placeholder-transparent focus:outline-none transition-all peer ${
                verificationResult === 'success' 
                  ? 'border-green-400 focus:border-green-400' 
                  : verificationResult === 'error'
                  ? 'border-red-400 focus:border-red-400'
                  : 'border-slate-600 focus:border-blue-400'
              }`}
              placeholder="Enter Intern ID"
            />
            <label className={`absolute left-4 top-2 text-xs transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs ${
              verificationResult === 'success' 
                ? 'text-green-400 peer-focus:text-green-400' 
                : verificationResult === 'error'
                ? 'text-red-400 peer-focus:text-red-400'
                : 'text-slate-400 peer-placeholder-shown:text-slate-500 peer-focus:text-blue-400'
            }`}>
              Enter Intern ID (e.g., SI123456)
            </label>
            
            {/* Validation Icons */}
            {verificationResult === 'success' && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center animate-scale-in">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            )}
            
            {verificationResult === 'error' && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <div className="w-6 h-6 bg-red-400 rounded-full flex items-center justify-center animate-scale-in">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            )}
          </div>

          {/* Verify Button */}
          <Button
            type="submit"
            disabled={isVerifying || !internId.trim()}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isVerifying ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Verifying...
              </div>
            ) : (
              'Verify Certificate'
            )}
          </Button>
        </form>

        {/* Sample Certificate Preview */}
        <div className="mt-6">
          <button
            type="button"
            onMouseEnter={() => setShowPreview(true)}
            onMouseLeave={() => setShowPreview(false)}
            className="text-blue-400 hover:text-blue-300 text-sm underline transition-colors"
          >
            View Sample Certificate
          </button>
          
          {showPreview && (
            <div className="mt-4 p-4 bg-slate-700/50 border border-slate-600 rounded-lg transform transition-all duration-300 animate-scale-in">
              <div className="text-center">
                <div className="w-full h-32 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-slate-300 text-sm">Certificate Preview</span>
                </div>
                <p className="text-xs text-slate-400">Sample: Data Analytics Certification</p>
                <p className="text-xs text-slate-400">Issued: December 2024</p>
              </div>
            </div>
          )}
        </div>

        {/* Verification Result */}
        {verificationResult && (
          <div className={`p-4 rounded-lg border animate-fade-in ${
            verificationResult === 'success' 
              ? 'bg-green-600/20 border-green-500/50 text-green-400' 
              : 'bg-red-600/20 border-red-500/50 text-red-400'
          }`}>
            {verificationResult === 'success' ? (
              <div>
                <h4 className="font-semibold mb-2">Certificate Verified ✓</h4>
                <p className="text-sm">Certificate ID: {internId}</p>
                <p className="text-sm">Course: Data Analytics Program</p>
                <p className="text-sm">Issue Date: December 15, 2024</p>
              </div>
            ) : (
              <div>
                <h4 className="font-semibold mb-2">Verification Failed ✗</h4>
                <p className="text-sm">Please check your Intern ID and try again.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificateVerification;
