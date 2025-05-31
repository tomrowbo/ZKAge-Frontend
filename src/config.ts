// API and Contract Configuration
export const API_URL = "http://localhost:3000"; // Backend API URL

// Hardcoded contract addresses (same as backend)
export const CONTRACTS = {
  AGE_VERIFICATION_NFT: "0xd542B1ab9DD7065CC66ded19CE3dA42d41d8B15C",
  PROVER: "0x1670276ab1398f62848cf8d63c00061130ffb93f",
  VERIFIER: "0xadc19d3b918f76259f631353614a81f390173b16"
};

// API Endpoints
export const ENDPOINTS = {
  VERIFY_AGE: `${API_URL}/verify-age`,
  DEMO_WALLET: `${API_URL}/demo-wallet`,
  NFC_PROOF: `${API_URL}/nfc-proof`
}; 