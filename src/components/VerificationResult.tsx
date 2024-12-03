import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

interface VerificationResultProps {
  isValid: boolean | null;
  confidence: number | null;
}

export function VerificationResult({ isValid, confidence }: VerificationResultProps) {
  if (isValid === null) return null;

  return (
    <div className="mt-6 p-4 rounded-lg border">
      <div className="flex items-center space-x-3">
        {isValid ? (
          <>
            <CheckCircle className="h-8 w-8 text-green-500" />
            <div>
              <h3 className="font-semibold text-green-700">Valid Transaction</h3>
              <p className="text-sm text-gray-600">
                Confidence: {(confidence || 0) * 100}%
              </p>
            </div>
          </>
        ) : (
          <>
            <XCircle className="h-8 w-8 text-red-500" />
            <div>
              <h3 className="font-semibold text-red-700">Invalid Transaction</h3>
              <p className="text-sm text-gray-600">
                Confidence: {(confidence || 0) * 100}%
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}