"use client";
import React, { useState } from 'react';
import FormComponent from './components/FormComponent';
import JobInfo from './components/JobInfo';
import Material from './components/Material';
import Notes from './components/Notes';
import Printing from './components/Printing';

export default function Home() {
  const [activeTab, setActiveTab] = useState('jobInfo');
  
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 text-white p-4 text-center">
        <h1 className="text-2xl">Instabox Project</h1>
      </header>

      <div className="container mx-auto p-4">
        <nav className="flex space-x-4 border-b-2">
          {/* Tab Buttons */}
          <button 
            className={`py-2 px-4 ${activeTab === 'jobInfo' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200'}`} 
            onClick={() => setActiveTab('jobInfo')}
          >
            Job Info
          </button>
          <button 
            className={`py-2 px-4 ${activeTab === 'material' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200'}`} 
            onClick={() => setActiveTab('material')}
          >
            Material
          </button>
          <button 
            className={`py-2 px-4 ${activeTab === 'printing' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200'}`} 
            onClick={() => setActiveTab('printing')}
          >
            Printing
          </button>
          <button 
            className={`py-2 px-4 ${activeTab === 'notes' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200'}`} 
            onClick={() => setActiveTab('notes')}
          >
            Notes
          </button>
        </nav>

        <FormComponent activeTab={activeTab} />
      </div>
    </div>
  );
}