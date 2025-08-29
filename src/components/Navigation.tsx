'use client';

import { useState } from 'react';
import Burger from './Burger';
import Sidebar from './Sidebar';

/**
 * Navigation Component 
 * Menggabungkan Burger menu button dan Sidebar menu
 */
export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Burger menu button - fixed di kanan atas */}
      <div className="fixed top-6 right-6 z-50">
        <Burger 
          opened={menuOpen} 
          onClick={setMenuOpen}
          className="bg-gradient-to-br from-gray-900 via-black to-gray-800 backdrop-blur-xl rounded-full p-3 border-2 border-yellow-400 border-opacity-40 shadow-lg hover:shadow-yellow-400/20 transition-all duration-300"
        />
      </div>

      {/* Sidebar menu */}
      <Sidebar 
        isOpen={menuOpen} 
        onClose={() => setMenuOpen(false)} 
      />
    </>
  );
}