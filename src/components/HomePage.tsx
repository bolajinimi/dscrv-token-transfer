// src/components/HomePage.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 10,
          ease: "linear",
          loop: Infinity,
        }}
        style={{ backgroundSize: "200% 200%" }}
      />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white">
        {/* NFT Image */}
        <img
          src="/coin.jpg" // Path from the public directory
          alt="NFT"
          className="w-48 h-48 mb-6 rounded-lg shadow-lg"
        />
        
        <motion.h1
          className="text-6xl font-extrabold mb-6"
          animate={{ opacity: [0, 1, 0], y: [0, -20, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
          style={{ color: '#E0E0E0' }} // Finer text color
        >
          Welcome to Token Transfer
        </motion.h1>
        
        <motion.p
          className="text-2xl mb-6 max-w-xl text-center"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 2, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ color: '#B0B0B0' }} // Finer text color
        >
          Quickly transfer tokens to another user without leaving DSCVR.
        </motion.p>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          {/* Placeholder visuals or additional NFTs */}
          <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-3xl">💰</span> {/* Placeholder emoji */}
          </div>
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-3xl">🪙</span> {/* Placeholder emoji */}
          </div>
        </div>

        {/* Enhanced Button */}
        <Link
          href="/transfer"
          className="bg-gradient-to-r from-purple-700 to-blue-700 px-8 py-4 rounded-full text-white font-bold text-lg hover:from-purple-800 hover:to-blue-800 transition duration-300 shadow-lg transform hover:scale-105"
        >
          Go to Token Transfer
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
