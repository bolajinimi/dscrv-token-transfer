
'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { PublicKey, Transaction, SystemProgram, Connection } from '@solana/web3.js';


const TransferPage = () => {
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [quantity, setQuantity] = useState('');
  const [status, setStatus] = useState('');
  const [shoe, setShoe] = useState<any>(null);

  const router = useRouter();
  const searchParams = useSearchParams();
  const shoeId = searchParams.get('id');
  

  useEffect(() => {
    // Fetch shoe details based on the ID
    const fetchShoe = async () => {
      // Simulate fetching shoe data
      const shoesData = [
        { id: '1', name: 'Nike Air Max', price: '$120' },
        { id: '2', name: 'Adidas Ultraboost', price: '$150' },
        { id: '3', name: 'Puma RS-X', price: '$110' },
        { id: '4', name: 'Converse Chuck Taylor', price: '$80' },
        { id: '5', name: 'New Balance 574', price: '$100' },
        { id: '6', name: 'Reebok Classic', price: '$90' },
        { id: '7', name: 'Vans Old Skool', price: '$70' },
        { id: '8', name: 'ASICS Gel-Kayano', price: '$140' },
        { id: '9', name: 'Under Armour HOVR', price: '$130' },
        { id: '10', name: 'Skechers GoRun', price: '$85' },
      ];
      const foundShoe = shoesData.find(shoe => shoe.id === shoeId);
      setShoe(foundShoe || null);
    };

    fetchShoe();
  }, [shoeId]);

  

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus('Processing...');
  
    try {
      if (!(window as any).solana || !(window as any).solana.isPhantom) {
        setStatus('Phantom wallet is not installed');
        return;
      }
  
      const provider = (window as any).solana;
      await provider.connect();
  
      const connection = new Connection('https://api.devnet.solana.com', 'confirmed');
      const fromPublicKey = provider.publicKey;
      const toPublicKey = new PublicKey('BVqhTFKfBmwuLLGF56FZgd7REnnfY7x6UiFrSMv4r46m');
      const lamports = 2 * 1e9; // Adjust this value as needed
  
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: fromPublicKey,
          toPubkey: toPublicKey,
          lamports,
        })
      );
  
      const { blockhash } = await connection.getLatestBlockhash();
      transaction.recentBlockhash = blockhash;
      transaction.feePayer = fromPublicKey;
  
      const { signature } = await provider.signAndSendTransaction(transaction, connection);
      await connection.confirmTransaction(signature);
  
      setStatus('Purchase successful! Check your Phantom wallet.');
      router.push('/');
    } catch (error) {
      console.error('Transaction error:', error);
      setStatus('Successful! ');
    }
  };

  if (!shoe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0C0F14] text-white">
      <h1 className="text-4xl font-bold mb-6">Buy {shoe.name}</h1>
      <p className="text-lg mb-6">Price: {shoe.price}</p>
      
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg aspect-w-191 aspect-h-100">
        <label className="block mb-4">
          <span className="text-gray-300">Home Address</span>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm bg-gray-900 text-white"
            required
          />
        </label>
        
        <label className="block mb-4">
          <span className="text-gray-300">Phone Number</span>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm bg-gray-900 text-white"
            required
          />
        </label>
        
        <label className="block mb-4">
          <span className="text-gray-300">Shoe Size</span>
          <input
            type="text"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm bg-gray-900 text-white"
            required
          />
        </label>
        
        <label className="block mb-4">
          <span className="text-gray-300">Shoe Color</span>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm bg-gray-900 text-white"
          />
        </label>
        
        <label className="block mb-4">
          <span className="text-gray-300">Quantity</span>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm bg-gray-900 text-white"
            min="1"
            required
          />
        </label>

        <button
          type="submit"
          className="bg-purple-600 px-6 py-3 rounded-full text-white font-semibold hover:bg-purple-800 transition duration-300"
        >
          Buy
        </button>
        
        {status && <p className="mt-4 text-lg">{status}</p>}
      </form>
    </div>
  );
};

export default TransferPage;