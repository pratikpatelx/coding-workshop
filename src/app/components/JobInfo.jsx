import React from 'react';

const JobInfo = ({ jobName, setJobName, customerName, setCustomerName }) => {
  const customers = [
    { id: '1', name: 'Customer A' },
    { id: '2', name: 'Customer B' },
    { id: '3', name: 'Customer C' },
  ];

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
          {customers.map((customer) => (
            <option key={customer.id} value={customer.name}>
              {customer.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default JobInfo;