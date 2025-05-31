import { useState } from 'react';
import { apiService } from '../services/api';
import { ethers } from 'ethers';

interface AgeVerificationProps {
  walletAddress: string;
  provider: ethers.providers.Web3Provider;
}

const AgeVerification = ({ walletAddress, provider }: AgeVerificationProps) => {
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);
  const [nftMinted, setNftMinted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [txHash, setTxHash] = useState<string | null>(null);

  // Function to verify age (simulated for now)
  const verifyAge = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Call our mock API service
      const result = await apiService.verifyAge(walletAddress);
      
      if (result.success) {
        setVerified(true);
        
        // If already verified, check if we need to mint an NFT
        if (!nftMinted) {
          await mintNFT();
        }
      } else {
        setError("Age verification failed");
      }
    } catch (err: any) {
      setError(err.message || "Age verification failed");
      console.error("Age verification error:", err);
    } finally {
      setLoading(false);
    }
  };
  
  // Function to mint NFT after verification
  const mintNFT = async () => {
    try {
      // Call our mock minting service
      const result = await apiService.mintAgeVerificationNFT(walletAddress);
      
      if (result.success) {
        setNftMinted(true);
        setTxHash(result.txHash);
      } else {
        setError("Failed to mint NFT");
      }
    } catch (err: any) {
      setError(err.message || "Failed to mint NFT");
      console.error("Mint NFT error:", err);
    }
  };
  
  return (
    <div className="card overflow-hidden">
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 p-4">
        <h2 className="text-xl font-bold text-white">Age Verification</h2>
      </div>
      
      <div className="p-6">
        {!verified ? (
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Privacy-Preserving Verification</h3>
              <p className="text-gray-700">Click the button below to verify you are 18+</p>
              <p className="text-sm text-gray-500 mt-1 italic">
                (This will simulate Revolut KYC verification)
              </p>
            </div>
            
            <div className="mt-6 flex justify-center">
              <button 
                onClick={verifyAge} 
                disabled={loading}
                className="btn btn-secondary flex items-center"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Verifying...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Verify I am 18+
                  </>
                )}
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-green-800 font-medium">Age Verification Complete</p>
                  <p className="text-green-700 text-sm">Your age has been verified successfully</p>
                </div>
              </div>
            </div>
            
            {nftMinted ? (
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 animate-fade-in">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 7H7v6h6V7z" />
                      <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-blue-800 font-medium">Age Verification NFT Minted</p>
                    {txHash && (
                      <p className="text-blue-700 text-sm mt-1">
                        Transaction: <a 
                          href={`https://etherscan.io/tx/${txHash}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 underline hover:text-blue-800"
                        >
                          {txHash.slice(0, 8)}...{txHash.slice(-6)}
                        </a>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-4 text-center">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
                <p className="mt-2 text-gray-600">Minting NFT...</p>
              </div>
            )}
          </div>
        )}
        
        {error && (
          <div className="mt-4 bg-red-50 border-l-4 border-red-400 p-4 rounded">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 00-1.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-red-800 text-sm">{error}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AgeVerification; 