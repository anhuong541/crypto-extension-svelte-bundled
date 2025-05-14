# Crypto Tracker Chrome Extension

This code is being bundled by this project build
[Crypto Tracking Extensions With Svelte](https://github.com/anhuong541/crypto-tracker-svelte-extensions)

A Chrome extension for tracking cryptocurrency prices in real-time using the CoinMarketCap API.

## Installation Guide

### 1. Clone the Repository

```bash
git clone https://github.com/anhuong541/crypto-extension-svelte-bundled.git
cd crypto-extension-svelte-bundled
```

### 2. Load the Extension in Chrome

1. Open Chrome browser
2. Navigate to `chrome://extensions/`
3. Enable "Developer mode" by toggling the switch in the top-right corner
4. Click "Load unpacked"
5. Select the directory where you cloned the repository

The extension should now appear in your Chrome extensions toolbar.

## Setting Up Your CoinMarketCap API Key

### 1. Get a CoinMarketCap API Key

1. Visit [CoinMarketCap](https://coinmarketcap.com/)
2. Create an account or log in if you already have one
3. Go to your account dashboard and navigate to the API section
4. Sign up for a free API key (Basic plan is sufficient for personal use)
5. Copy your API key

### 2. Configure the Extension

1. Click on the Crypto Tracker extension icon in your Chrome toolbar
2. You will see a form asking for your CoinMarketCap API Key
3. Paste your API key into the input field
4. Click "Add Coinmarketcap API Key"

## Using the Extension

1. After adding your API key, you'll see the main extension interface
2. Enter a cryptocurrency symbol (e.g., BTC, ETH, ADA) in the input field
3. Click "Add" to start tracking that cryptocurrency
4. The current price will be displayed in USD
5. You can add multiple cryptocurrencies to track
6. To remove a cryptocurrency from your tracking list, click the "×" button next to it

## Features

- Real-time cryptocurrency price tracking
- Support for all cryptocurrencies available on CoinMarketCap
- Lightweight and easy to use
- Caches data to minimize API calls

## Troubleshooting

- If you see "Invalid symbol" error, make sure you're using the correct cryptocurrency symbol
- If no data appears, verify that your API key is correct
- You can reset the extension by clicking the "×" button in the top-right corner

## Privacy

Your API key is stored locally in Chrome's storage and is only used to make requests to the CoinMarketCap API. The extension does not collect or transmit any personal data.
