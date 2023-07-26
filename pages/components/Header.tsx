import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import the next/image component

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center bg-gray-200 p-4 h-20">
      <div>
        <Link href="/">
          {/* Replace 'final_logo.png' with the actual path to your logo image */}
          <Image src="/final_logo.png" alt="logo" width={150} height={40} />
        </Link>
      </div>
      <div>
        {/* Remove the <a> element, only keep the button */}
        <Link href="/content">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Chatbot</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
