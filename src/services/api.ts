// Hardcoded values for the frontend demo
// All API calls are replaced with mock data

// Service for interacting with Age Verification functionality
export const apiService = {
  // Check if user is verified (has NFT)
  verifyAge: async (walletAddress: string) => {
    try {
      // Simply return successful verification
      return { 
        success: true, 
        isVerified: true,
        message: "Age successfully verified" 
      };
    } catch (error) {
      console.error('Error verifying age:', error);
      throw error;
    }
  },
  
  // Get demo wallet for testing
  getDemoWallet: async () => {
    try {
      // Return a hardcoded wallet address
      return {
        demoNote: "This is a demo wallet for testing",
        walletAddress: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
        contracts: {
          AGE_VERIFICATION_NFT: "0xd542B1ab9DD7065CC66ded19CE3dA42d41d8B15C",
          PROVER: "0x1670276ab1398f62848cf8d63c00061130ffb93f", 
          VERIFIER: "0xadc19d3b918f76259f631353614a81f390173b16"
        }
      };
    } catch (error) {
      console.error('Error getting demo wallet:', error);
      throw error;
    }
  },
  
  // Get NFC proof for private verification
  getNfcProof: async () => {
    try {
      // Return hardcoded proof data
      return {
        privacyNote: "This proof is designed to be transmitted via NFC without revealing the user's wallet address",
        verificationProof: {
          proofData: {
            seal: {
              verifierSelector: "0x12345678",
              seal: Array(8).fill("0x0000000000000000000000000000000000000000000000000000000000000000"),
              mode: 0
            },
            length: "1",
            callAssumptions: {
              proverContractAddress: "0x1670276ab1398f62848cf8d63c00061130ffb93f",
              functionSelector: "0x12345678",
              settleChainId: "0x0000000000000000000000000000000000000000000000000000000000000001",
              settleBlockNumber: "0x0000000000000000000000000000000000000000000000000000000000000001",
              settleBlockHash: "0x0000000000000000000000000000000000000000000000000000000000000001"
            }
          },
          isVerified: true,
          timestamp: new Date().toISOString()
        }
      };
    } catch (error) {
      console.error('Error getting NFC proof:', error);
      throw error;
    }
  },
  
  // Mock function to mint NFT
  mintAgeVerificationNFT: async (walletAddress: string) => {
    try {
      // Generate a random transaction hash
      const txHash = "0x" + Array.from({length: 64}, () => 
        Math.floor(Math.random() * 16).toString(16)
      ).join('');
      
      // Simulate minting by returning success
      return { 
        success: true, 
        message: "NFT minted successfully", 
        txHash: txHash,
        walletAddress: walletAddress,
        tokenId: Math.floor(Math.random() * 10000),
        contractAddress: "0xd542B1ab9DD7065CC66ded19CE3dA42d41d8B15C"
      };
    } catch (error) {
      console.error('Error minting NFT:', error);
      throw error;
    }
  }
}; 