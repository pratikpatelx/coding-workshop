import React, { useState, useEffect } from 'react';

const JobInfo = ({ jobName, setJobName, customerName, setCustomerName }) => {
  const [customerNames, setCustomerNames] = useState([]);

  useEffect(() => {
    const fetchCustomerNames = async () => {
      try {
        const response = await fetch('/api/data'); // Ensure the correct API route
        if (response.ok) {
          const data = await response.json();
          const formData = data.formData;
          
          // Extract customer names from formData
          const extractedCustomerNames = formData.map((formDataItem) => formDataItem.customerName);

          // Set customer names in the component state
          setCustomerNames(extractedCustomerNames);
        } else {
          // Handle HTTP errors
          console.error('Failed to fetch form data');
        }
      } catch (error) {
        // Handle network errors
        console.error('Error fetching form data:', error);
      }
    };

    fetchCustomerNames();
  }, []);  

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Job Name:</label>
        <input 
          type="text" 
          value={jobName} 
          onChange={(e) => setJobName(e.target.value)} 
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Customer Name:</label>
        <select 
          value={customerName} 
          onChange={(e) => setCustomerName(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="">Select a customer</option>
          {customerNames.map((customerName) => (
            <option key={customerName} value={customerName}>
              {customerName}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default JobInfo;