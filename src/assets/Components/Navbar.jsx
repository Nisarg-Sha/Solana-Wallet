import React from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';

const Navbar = () => {
    return (
        <div className="px-5 w-full flex items-center justify-between border-solid text-black py-4">
                <h1 className="font-bold text-3xl cursor-pointer hover:text-gray-400">Wallet</h1>
                <WalletMultiButton />
        </div>
    );
};

export default Navbar;
