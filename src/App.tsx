import React, { useState } from 'react';
import { ImageUpload } from './components/ImageUpload';
import { VerificationResult } from './components/VerificationResult';
import { verifyTransaction } from './utils/mockVerification';
import { Loader2 } from 'lucide-react';

function App() {
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<{
    isValid: boolean | null;
    confidence: number | null;
  }>({
    isValid: null,
    confidence: null,
  });

  const handleImageSelect = async (image: File) => {
    setIsVerifying(true);
    try {
      const result = await verifyTransaction(image);
      setVerificationResult(result);
    } catch (error) {
      console.error('Verification failed:', error);
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Transaction Verification
          </h1>
          <p className="mt-2 text-gray-600">
            Upload a screenshot of your transaction to verify its authenticity
          </p>
        </div>

        <div className="space-y-6">
          <ImageUpload onImageSelect={handleImageSelect} />
          
          {isVerifying && (
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Verifying transaction...</span>
            </div>
          )}

          <VerificationResult
            isValid={verificationResult.isValid}
            confidence={verificationResult.confidence}
          />
        </div>
      </div>
    </div>
  );
}

export default App;