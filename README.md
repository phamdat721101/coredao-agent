# AI Agent ERC-20 Demo

This project demonstrates an AI-powered agent that can deploy an ERC-20 token contract and transfer tokens by chatting with the agent via CLI or Telegram.

## Overview

The AI agent acts as a smart contract operator. You can interact with the agent through chat, and it will:

- Deploy a new ERC-20 token contract on a supported EVM-compatible blockchain (e.g., Ethereum testnet)
- Transfer tokens to specified addresses based on chat commands

This is ideal for demos, hackathons, and educational purposes.

## Quick Start

1. **Clone and install dependencies:**

```bash
git clone https://github.com/phamdat721101/ai-agent-erc20-demo
cd ai-agent-erc20-demo
npm install
```

2. **Set up environment:**

```bash
cp .env.example .env
```

3. **Configure your `.env` file:**

- EVM provider URL (e.g., Infura, Alchemy, or local node)
- Private key for the deployer wallet (testnet recommended)
- Telegram bot token (optional, for Telegram chat)

Example:

```
EVM_PROVIDER_URL=https://sepolia.infura.io/v3/your-infura-key
DEPLOYER_PRIVATE_KEY=your-private-key
TELEGRAM_BOT_TOKEN=your-telegram-bot-token
```

4. **Run the agent:**

- **CLI mode:**

```bash
npm run dev -- cli
```

- **Telegram mode:**

```bash
npm run dev -- telegram
```

## Demo Usage

- **Deploy a token:**  
  Type `deploy token <name> <symbol> <initialSupply>`  
  Example: `deploy token DemoToken DMT 1000000`

- **Transfer tokens:**  
  Type `transfer <toAddress> <amount>`  
  Example: `transfer 0x1234...abcd 1000`

The agent will respond with transaction hashes and contract addresses.

## Features

- **ERC-20 Deployment:** Deploys a standard ERC-20 contract on demand
- **Token Transfers:** Handles transfer requests via chat
- **Chat Interface:** Interact via CLI or Telegram
- **Secure:** Uses environment variables for sensitive keys

## Development

```bash
npm run build
npm run format
npm test
```

## Configuration

- Edit `.env` for blockchain and bot credentials
- Customize agent responses in `src/characters/characters.json` if desired

## Support

For issues and feature requests, please use the GitHub issue tracker.

---

**Note:** This demo is for educational and demonstration purposes only. Do not use mainnet keys or real funds.