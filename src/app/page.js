"use client";
import React, { useState } from 'react';
import JobInfo from '../app/components/JobInfo';
import Material from '../app/components/Material';
import Printing from '../app/components/Printing';
import Notes from '../app/components/Notes';

export default function Home() {
  const [activeTab, setActiveTab] = useState('jobInfo');
  const [jobName, setJobName] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [printType, setPrintType] = useState('');
  const [printCustomerName, setPrintCustomerName] = useState(false);
  const [customText, setCustomText] = useState('');
  const [enableCustomText, setEnableCustomText] = useState(false);
  const [designNotes, setDesignNotes] = useState('');

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

        <div className="mt-4">
          {/* Tab Content */}
          {activeTab === 'jobInfo' && (
            <JobInfo 
              jobName={jobName} 
              setJobName={setJobName} 
              customerName={customerName} 
              setCustomerName={setCustomerName} 
            />
          )}
          {activeTab === 'material' && (
            <Material 
              selectedMaterials={selectedMaterials} 
              setSelectedMaterials={setSelectedMaterials} 
            />
          )}
          {activeTab === 'printing' && (
            <Printing 
              printType={printType} 
              setPrintType={setPrintType} 
              printCustomerName={printCustomerName} 
              setPrintCustomerName={setPrintCustomerName} 
              customText={customText} 
              setCustomText={setCustomText} 
              enableCustomText={enableCustomText} 
              setEnableCustomText={setEnableCustomText} 
            />
          )}
          {activeTab === 'notes' && (
            <Notes 
              designNotes={designNotes} 
              setDesignNotes={setDesignNotes} 
            />
          )}
        </div>
      </div>
    </div>
  );
}