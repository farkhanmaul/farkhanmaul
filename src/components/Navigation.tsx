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
          className="bg-black bg-opacity-50 backdrop-blur-sm rounded-full p-3 border border-gray-700"
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