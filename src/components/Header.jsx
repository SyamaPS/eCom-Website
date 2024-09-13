// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => (
//   <header className="p-4 bg-gray-800 text-white flex justify-between">
//     <h1 className="text-2xl font-bold">eCommerce</h1>
//     <nav>
//       <Link to="/" className="mr-4">Home</Link>
//       <Link to="/shop" className="mr-4">Shop</Link>
//       <Link to="/cart">Cart</Link>
//     </nav>
//   </header>
// );

// export default Header;
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="p-4 bg-white shadow-md flex justify-between items-center">
    {/* Company Logo and Name */}
    <div className="flex items-center">
      {/* Company Icon */}
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-800 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zM5 4v16h14V4H5z"/>
      </svg>
      <h1 className="text-2xl font-bold text-gray-800">eCommerce</h1>
    </div>

    {/* Navigation Menu */}
    <nav className="hidden md:flex space-x-6">
      <Link to="/" className="font-bold text-gray-800 hover:text-gray-600">Home</Link>
      <Link to="/shop" className="font-bold text-gray-800 hover:text-gray-600">Shop</Link>
      <Link to="/about" className="font-bold text-gray-800 hover:text-gray-600">About</Link>
      <Link to="/contact" className="font-bold text-gray-800 hover:text-gray-600">Contact</Link>
    </nav>

    {/* Icons */}
    <div className="flex items-center space-x-4">
      <Link to="/profile" aria-label="Profile" className="text-gray-800 hover:text-gray-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.403-2.103C18.552 14.618 17.41 14 16 14H6c-1.41 0-2.552.618-2.597 1.897L2 17h5m10 0v4M7 7a3 3 0 11-6 0 3 3 0 016 0zm0 0a3 3 0 016 0 3 3 0 01-6 0z"/>
        </svg>
      </Link>
      <Link to="/search" aria-label="Search" className="text-gray-800 hover:text-gray-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a7 7 0 100 14 7 7 0 000-14zm1 7h-2v-2h2v2zm0 4h-2v-2h2v2zm0-8h-2V7h2v2z"/>
        </svg>
      </Link>
      <Link to="/favorites" aria-label="Favorites" className="text-gray-800 hover:text-gray-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </Link>
      <Link to="/cart" aria-label="Cart" className="text-gray-800 hover:text-gray-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l1.5 9.5a2 2 0 001.9 1.5h9.7a2 2 0 001.9-1.5L19 3h2m-8 11a2 2 0 100-4 2 2 0 000 4zm6-2a2 2 0 11-4 0 2 2 0 014 0zm-6-2a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
      </Link>
    </div>
  </header>
);

export default Header;

