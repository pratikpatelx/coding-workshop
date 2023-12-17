import React from 'react';

const Printing = ({
  printType,
  setPrintType,
  printCustomerName,
  setPrintCustomerName,
  customText,
  setCustomText,
}) => {
  return (
    <div>
      <div className="mb-4">
        <label htmlFor="printType" className="block text-sm font-medium text-gray-700">
          Print Type
        </label>
        <select
          id="printType"
          value={printType}
          onChange={(e) => setPrintType(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          {/* Add options for print types */}
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="printCustomerName" className="flex items-center">
          <input
            id="printCustomerName"
            type="checkbox"
            checked={printCustomerName}
            onChange={() => setPrintCustomerName(!printCustomerName)}
            className="mr-2"
          />
          Print Customer Name
        </label>
      </div>
      {printCustomerName && (
        <div className="mb-4">
          <label htmlFor="customText" className="block text-sm font-medium text-gray-700">
            Custom Text
          </label>
          <input
            type="text"
            id="customText"
            value={customText}
            onChange={(e) => setCustomText(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
      )}
    </div>
  );
};

export default Printing;