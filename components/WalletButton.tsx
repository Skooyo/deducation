"use client";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import { PetraWallet } from "petra-plugin-wallet-adapter";
import AptosWallet from "@/components/AptosWallet";

export default function Home() {
    const wallets = [new PetraWallet()]
  return (
  <>
    <AptosWalletAdapterProvider plugins={wallets} autoConnect={true}>
        <AptosWallet />
    </AptosWalletAdapterProvider>
  </>
  );
}