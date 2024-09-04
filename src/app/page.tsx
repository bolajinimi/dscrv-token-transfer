// src/app/page.tsx
'use client';

import Link from 'next/link';
import Head from 'next/head'; 
import { motion } from 'framer-motion';
import dscrvLogo from '../../public/dscrv.png'; // Replace with the path to your DSCVR logo
import backgroundImage from '../../public/shoe.jpg'; // Background image

const HomePage = () => {
  return (
    <>
    <Head>
        {/* Indicates that the application is a Canvas */}
        <meta name="dscvr:canvas:version" content="vNext" />
        {/* Open Graph Image for previewing the Canvas */}
        <meta name="og:image" content="https://my-canvas.com/preview-image.png" />
      </Head>

    <div className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden aspect-w-191 aspect-h-100">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(/shoe.jpg)` }}
      />

      {/* Overlay for Better Text Visibility */}
      <div className="absolute inset-0 bg-black opacity-50" />

      {/* DSCVR Logo */}
      <img
        src={dscrvLogo.src}
        alt="DSCVR Logo"
        className="absolute top-4 right-4 w-16 h-auto sm:w-24" // Responsive size for logo
      />
      
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-8 sm:py-12">
        {/* Header */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6"
          animate={{ opacity: [0, 1, 0], y: [0, -20, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
          style={{ color: '#E0E0E0' }} // Light text color
        >
          Welcome to DSCVR Marketplace
        </motion.h1>
        
        <motion.p
          className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 max-w-xs sm:max-w-sm md:max-w-xl"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 2, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ color: '#D0D0D0' }} // Slightly darker text color for contrast
        >
          Shop the latest shoes and slippers and pay seamlessly with Solana.
        </motion.p>

        {/* Button */}
        <Link
          href="/shoe"
          className="bg-gradient-to-r from-purple-700 to-blue-700 px-4 py-2 sm:px-6 sm:py-3 rounded-full text-white font-bold text-base sm:text-lg hover:from-purple-800 hover:to-blue-800 transition duration-300 shadow-lg transform hover:scale-105"
        >
          Start Shopping
        </Link>
      </div>
    </div>
    </>
  );
};

export default HomePage;
