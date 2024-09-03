// src/app/shoes.tsx
'use client';

import Link from 'next/link';

const shoesData = [
  { id: 1, name: 'Nike Air Max', price: '$120', imageUrl: '/shoe1.jpg' },
  { id: 2, name: 'Adidas Ultraboost', price: '$150', imageUrl: '/shoe2.jpg' },
  { id: 3, name: 'Puma RS-X', price: '$110', imageUrl: '/shoe3.jpg' },
  { id: 4, name: 'Converse Chuck Taylor', price: '$80', imageUrl: '/shoe4.jpg' },
  { id: 5, name: 'New Balance 574', price: '$100', imageUrl: '/shoe5.jpg' },
  { id: 6, name: 'Reebok Classic', price: '$90', imageUrl: '/shoe6.jpg' },
//   { id: 7, name: 'Vans Old Skool', price: '$70', imageUrl: '/shoe7.jpg' },
//   { id: 8, name: 'ASICS Gel-Kayano', price: '$140', imageUrl: '/shoe2.jpg' },
//   { id: 9, name: 'Under Armour HOVR', price: '$130', imageUrl: '/shoe1.jpg' },
  
];

const ShoesPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0C0F14] text-white">
      <h1 className="text-4xl font-bold mb-6">Select Your Shoe</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {shoesData.map((shoe) => (
          <div key={shoe.id} className="bg-gray-800 p-4 rounded-lg shadow-lg">
            {/* Lazy loading the image */}
            <img
              src={shoe.imageUrl}
              alt={shoe.name}
              loading="lazy"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">{shoe.name}</h2>
            <p className="text-lg mb-4">{shoe.price}</p>
            <Link
              href={`/transfer?id=${shoe.id}`}
              className="bg-purple-600 px-6 py-3 rounded-full text-white font-semibold hover:bg-purple-800 transition duration-300"
            >
              Buy Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoesPage;
