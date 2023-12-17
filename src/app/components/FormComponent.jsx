"use client";
import React, { useState } from 'react';
import JobInfo from './JobInfo';
import Material from './Material';
import Printing from './Printing';
import Notes from './Notes';

const FormComponent = ({activeTab}) => {
  // State for each part of the form
  const [jobName, setJobName] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [printType, setPrintType] = useState('');
  const [printCustomerName, setPrintCustomerName] = useState(false);
  const [customText, setCustomText] = useState('');
  const [enableCustomText, setEnableCustomText] = useState(false);
  const [designNotes, setDesignNotes] = useState('');

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      jobInfo: { jobName, customerName },
      selectedMaterials,
      printingOptions: {
        printType,
        printCustomerName,
        customText: enableCustomText ? customText : '',
      },
      designNotes
    };

    try {
      const response = await fetch('/api/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        // Additional actions on successful submission (e.g., clear form, show success message)
      } else {
        console.error('Error submitting form');
        // Handle error response
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle exception
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Submit Form
      </button>
    </form>
  );
};

export default FormComponent;