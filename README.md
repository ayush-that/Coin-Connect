## React + Vite + TS + shadcn/ui + CoinBase Wallet SDK Template

![The easiest way to connect a React app with Coinbase Wallet (1)](https://github.com/user-attachments/assets/e7d235ad-2ddf-4e0c-9435-5ac2de3f346b)

## Getting Started

### Open Using Daytona

Follow the installation [Guide](https://www.daytona.io/docs/installation/installation/) and install Daytona. Then create the workspace:

   ```bash
   daytona create https://github.com/ayush-that/CoinConnect/
   npm run dev # Start the app
   ```


### Local Installation

1. Make sure you have Node.js 20 or later. Then clone the repository:

```bash
git clone https://github.com/ayush-that/coinconnect.git
cd coinconnect
```

2. Install dependencies and run the development server. If you are using devcontainer, you can skip this step. The app will be go live at `http://localhost:5173`:

```bash
npm install
npm run dev

# Building for Production
npm run build
npm run preview
```

## Tech Stack

<div align="center">
	<table>
		<tr>
			<td><code><img width="48" src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png" alt="Tailwind CSS" title="Tailwind CSS"/></code></td>
			<td><code><img width="48" src="https://github.com/user-attachments/assets/e4bd419a-2a4a-459a-ba9a-d3324e693c4d" alt="ShadCn UI" title="ShadCn UI"/></code></td>
			<td><code><img width="48" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="JavaScript" title="JavaScript"/></code></td>
			<td><code><img width="48" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React"/></code></td>
			<td><code><img width="48" src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png" alt="TypeScript" title="TypeScript"/></code></td>
			<td><code><img width="48" src="https://github-production-user-asset-6210df.s3.amazonaws.com/62091613/261395532-b40892ef-efb8-4b0e-a6b5-d1cfc2f3fc35.png" alt="Vite" title="Vite"/></code></td>
		</tr>
	</table>
</div>

## Features

- [x] CoinBase Wallet integration
- [x] Modern UI with shadcn/ui components
- [x] Built with Vite for fast development
- [x] Type-safe with TypeScript

https://github.com/user-attachments/assets/a1a1cbc2-5209-413e-a4cf-7b664079a695

## Project Structure

```
src/
├── components/
│   ├── NetworkSelector.tsx
│   ├── WalletConnectButton.tsx
│   └── ...
├── lib/
│   ├── hooks/
│   │   ├── useCoinbaseWallet.ts
│   │   └── ...
│   └── utils/
│       └── ...
```

## License

MIT License - see LICENSE file for details
