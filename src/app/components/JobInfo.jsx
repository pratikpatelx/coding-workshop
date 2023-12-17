import React, { useState } from "react";

const JobInfo = ({
  jobName,
  setJobName,
  customerName,
  setCustomerName,
  customers,
}) => {
  const [error, setError] = useState("");

  const handleJobNameChange = (e) => {
    const value = e.target.value;
    setJobName(value);
    // Set an error message if job name is empty
    setError(value ? "" : "Job name cannot be empty"); 
  };

  return (
    <div>
      <div className="mb-4">
        <label
          htmlFor="jobName"
          className="block text-sm font-medium text-gray-700"
        >
          Job Name:
        </label>
        <input
          id="jobName"
          type="text"
          onChange={handleJobNameChange}
          className={`mt-1 block w-full rounded-md border ${
            error ? "border-red-500" : "border-gray-300"
          } shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
        />
        {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
      </div>
      <div className="mb-4">
        <label
          htmlFor="customerName"
          className="block text-sm font-medium text-gray-700"
        >
          Customer Name:
        </label>
        <select
          id="customerName"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          {customers.map((name, index) => (
            <option key={index} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default JobInfo;