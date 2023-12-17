import React from 'react';

const Printing = ({ printType, setPrintType, printCustomerName, setPrintCustomerName, customText, setCustomText, enableCustomText, setEnableCustomText }) => {
  const printTypes = ['Type 1', 'Type 2', 'Type 3'];

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Print Type:</label>
        <select 
          value={printType} 
          onChange={(e) => setPrintType(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          {printTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          <input 
            type="checkbox" 
            checked={printCustomerName} 
            onChange={(e) => setPrintCustomerName(e.target.checked)} 
            className="rounded mr-2"
          />
          Print Customer Name
        </label>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          <input 
            type="checkbox" 
            checked={enableCustomText} 
            onChange={(e) => setEnableCustomText(e.target.checked)} 
            className="rounded mr-2"
          />
          Enable Custom Text
        </label>
        {enableCustomText && (
          <input 
            type="text" 
            value={customText} 
            onChange={(e) => setCustomText(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter custom text here"
          />
        )}
      </div>
    </div>
  );
};

export default Printing;