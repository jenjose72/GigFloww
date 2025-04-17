import React from 'react'
import {Star, Calendar, BarChart4, MessageSquare } from 'lucide-react';

export const Features = () => {
  return (
    <div id="features" className="py-12 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center mb-10">
        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Everything You Need To Succeed
        </p>
      </div>

      <div className="mt-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="inline-flex items-center justify-center p-2 bg-indigo-100 rounded-md text-indigo-600">
              <Star className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Feature 1</h3>
            <p className="mt-2 text-base text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nisi purus, facilisis sed fringilla.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="inline-flex items-center justify-center p-2 bg-indigo-100 rounded-md text-indigo-600">
              <Calendar className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Feature 2</h3>
            <p className="mt-2 text-base text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nisi purus, facilisis sed fringilla.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="inline-flex items-center justify-center p-2 bg-indigo-100 rounded-md text-indigo-600">
              <BarChart4 className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Feature 3</h3>
            <p className="mt-2 text-base text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nisi purus, facilisis sed fringilla.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="inline-flex items-center justify-center p-2 bg-indigo-100 rounded-md text-indigo-600">
              <MessageSquare className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Feature 4</h3>
            <p className="mt-2 text-base text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nisi purus, facilisis sed fringilla.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}
