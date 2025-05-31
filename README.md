# ZKTap Frontend

This is a React frontend for the ZKTap Age Verification system, allowing users to connect their wallets, verify their age, and mint an Age Verification NFT.

## Features

- Wallet Connection (MetaMask and other Ethereum wallets)
- Age Verification (simulated, will integrate with Revolut KYC)
- NFT Minting for verified users
- Privacy-preserving verification

## Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. The app will be available at http://localhost:5173

## Backend Integration

The frontend is designed to work with the ZKTap backend API server. Make sure the backend server is running at http://localhost:3000 or update the API_URL in `src/config.ts` to point to your backend.

## Development

- `src/components/` - React components
- `src/services/` - API services for backend communication
- `src/config.ts` - Configuration for API endpoints and contracts

## Production Build

To create a production build:

```
npm run build
```

The build will be in the `dist` directory and can be served with any static file server.

## Technology Stack

- React
- TypeScript
- ethers.js for Ethereum interactions
- Vite for build tooling
