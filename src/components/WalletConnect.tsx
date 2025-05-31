import { useState, useEffect } from 'react';
import { ethers } from 'ethers';

interface WalletConnectProps {
  onConnect: (address: string, provider: ethers.providers.Web3Provider) => void;
}

const WalletConnect = ({ onConnect }: WalletConnectProps) => {
  const [connecting, setConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Check if wallet is already connected on component mount
  useEffect(() => {
    const checkConnection = async () => {
      if (window.ethereum) {
        try {
          // Get accounts without prompting user
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const accounts = await provider.listAccounts();
          
          if (accounts.length > 0) {
            onConnect(accounts[0], provider);
          }
        } catch (err) {
          console.error("Failed to check existing connection:", err);
        }
      }
    };
    
    checkConnection();
  }, [onConnect]);
  
  // Connect wallet function
  const connectWallet = async () => {
    setConnecting(true);
    setError(null);
    
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        
        if (accounts.length > 0) {
          onConnect(accounts[0], provider);
        } else {
          setError("No accounts found");
        }
      } else {
        setError("MetaMask or compatible wallet not found");
      }
    } catch (err: any) {
      setError(err.message || "Failed to connect wallet");
      console.error("Connect wallet error:", err);
    } finally {
      setConnecting(false);
    }
  };
  
  return (
    <div className="flex flex-col items-center">
      <button 
        onClick={connectWallet} 
        disabled={connecting}
        className={`btn btn-primary w-64 flex items-center justify-center ${connecting ? 'opacity-70' : ''}`}
      >
        {connecting ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Connecting...
          </>
        ) : (
          <>
            Connect Wallet
          </>
        )}
      </button>
      
      {error && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md w-full">
          <p className="text-red-600 text-sm">{error}</p>
        </div>
      )}
      
    </div>
  );
};

export default WalletConnect; 