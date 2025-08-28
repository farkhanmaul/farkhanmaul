'use client';

/**
 * Logo Component - Simple F logo with unique font
 * Positioned in top-left corner
 */
export default function Logo() {
  return (
    <div className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50">
      <div className="relative group">
        <div className="absolute inset-0 bg-yellow-300 blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-full"></div>
        <div className="relative bg-black bg-opacity-40 backdrop-blur-md border border-gray-700 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:border-gray-500 transition-all duration-300">
          <span 
            className="text-white text-xl sm:text-2xl font-bold tracking-wider"
            style={{
              fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
              fontStyle: 'italic'
            }}
          >
            F
          </span>
        </div>
      </div>
    </div>
  );
}