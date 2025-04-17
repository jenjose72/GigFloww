import React from 'react'
import { useState } from 'react';

const Navigation = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-indigo-600 text-2xl font-bold">GigFloww</span>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <a href="#features" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600">Features</a>
          <a href="#about" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600">About</a>
          <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600">Pricing</a>
          <button className="ml-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
            Sign In
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isNavOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>
    </div>

    {/* Mobile navigation */}
    {isNavOpen && (
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600">Features</a>
          <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600">About</a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600">Pricing</a>
          <button className="mt-2 w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
            Sign In
          </button>
        </div>
      </div>
    )}
  </nav>
  )
}

export default Navigation