import React from 'react';

const JobInfo = ({ jobName, setJobName, customerName, setCustomerName, customers }) => {
  return (
    <div>
      <div className="mb-4">
        <label htmlFor="jobName" className="block text-sm font-medium text-gray-700">Job Name</label>
        <input
          id="jobName"
          type="text"
          value={jobName}
          onChange={(e) => setJobName(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="customerName" className="block text-sm font-medium text-gray-700">Customer Name</label>
        <select
          id="customerName"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          {customers.map((name, index) => (
            <option key={index} value={name}>{name}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default JobInfo;
