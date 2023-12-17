import React, { useState, useEffect } from "react";

const Printing = ({
  printType,
  setPrintType,
  printCustomerName,
  setPrintCustomerName,
  customText,
  setCustomText,
}) => {
  const [customTextError, setCustomTextError] = useState("");

  useEffect(() => {
    // Validation logic: If "Print Customer Name" is checked, ensure "Custom Text" is not empty.
    if (printCustomerName && !customText.trim()) {
      setCustomTextError("Custom text cannot be empty.");
    } else {
      setCustomTextError("");
    }
  }, [printCustomerName, customText]);

  const handleCustomTextChange = (e) => {
    setCustomText(e.target.value);
    // Clear the error as the user types, if "Print Customer Name" is checked.
    if (printCustomerName && e.target.value.trim()) {
      setCustomTextError("");
    }
  };
  return (
    <div>
      <div className="mb-4">
        <label
          htmlFor="printType"
          className="block text-sm font-medium text-gray-700"
        >
          Print Type
        </label>
        <select
          id="printType"
          value={printType}
          onChange={(e) => setPrintType(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="printCustomerName" className="flex items-center">
          <input
            id="printCustomerName"
            type="checkbox"
            checked={printCustomerName}
            onChange={() => {
              setPrintCustomerName(!printCustomerName);
              // If unchecking, clear any error related to custom text.
              if (printCustomerName) {
                setCustomTextError("");
              }
            }}
            className="mr-2"
          />
          Print Customer Name
        </label>
      </div>

      {printCustomerName && (
        <div className="mb-4">
          <label
            htmlFor="customText"
            className="block text-sm font-medium text-gray-700"
          >
            Custom Text
          </label>
          <input
            type="text"
            id="customText"
            value={customText}
            onChange={handleCustomTextChange}
            className={`mt-1 block w-full rounded-md border ${
              customTextError ? "border-red-500" : "border-gray-300"
            } shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
          />
          {customTextError && (
            <p className="text-red-500 text-xs mt-2">{customTextError}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Printing;