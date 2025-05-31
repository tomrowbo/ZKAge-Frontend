import axios from 'axios';
import { ENDPOINTS } from '../config';

// Service for interacting with the Age Verification API
export const apiService = {
  // Check if user is verified (has NFT)
  verifyAge: async (walletAddress: string) => {
    try {
      // For now, we're mocking the verification by just returning true
      // In a real implementation, this would call the backend
      return { success: true, isVerified: true };
      
      // TODO: Replace with actual API call when backend is ready
      // const response = await axios.post(ENDPOINTS.VERIFY_AGE, { address: walletAddress });
      // return response.data;
    } catch (error) {
      console.error('Error verifying age:', error);
      throw error;
    }
  },
  
  // Get demo wallet for testing
  getDemoWallet: async () => {
    try {
      const response = await axios.get(ENDPOINTS.DEMO_WALLET);
      return response.data;
    } catch (error) {
      console.error('Error getting demo wallet:', error);
      throw error;
    }
  },
  
  // Get NFC proof for private verification
  getNfcProof: async () => {
    try {
      const response = await axios.get(ENDPOINTS.NFC_PROOF);
      return response.data;
    } catch (error) {
      console.error('Error getting NFC proof:', error);
      throw error;
    }
  },
  
  // Mock function to mint NFT
  // In a real implementation, this would interact with the contract
  mintAgeVerificationNFT: async (walletAddress: string) => {
    try {
      // Simulate minting by returning success
      return { 
        success: true, 
        message: "NFT minted successfully", 
        txHash: "0x" + Math.random().toString(16).substr(2, 64) 
      };
    } catch (error) {
      console.error('Error minting NFT:', error);
      throw error;
    }
  }
}; 