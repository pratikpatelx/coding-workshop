import React, { useState, useEffect } from "react";

const Printing = ({
  printType,
  setPrintType,
  printCustomerName,
  setPrintCustomerName,
  enableCustomText,
  setEnableCustomText,
  customText,
  setCustomText,
}) => {
  const [customTextError, setCustomTextError] = useState("");

  useEffect(() => {
    // If the custom text checkbox is unchecked, clear errors
    if (!enableCustomText) {
      setCustomTextError("");
    }
  }, [enableCustomText]);

  const handleCustomTextCheckboxChange = (e) => {
    // Enable or disable custom text input based on the checkbox
    const isChecked = e.target.checked;
    setEnableCustomText(isChecked);
    if (!isChecked) {
      setCustomText(""); // Clear custom text if the checkbox is unchecked
    }
  };

  const handleCustomTextChange = (e) => {
    const value = e.target.value;
    setCustomText(value); // Update the custom text in the parent component's state
    if (!value.trim() && enableCustomText) {
      setCustomTextError("Custom text cannot be empty.");
    } else {
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
          Print Type:
        </label>
        <select
          id="printType"
          value={printType}
          onChange={(e) => setPrintType(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
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
            onChange={(e) => setPrintCustomerName(e.target.checked)}
            className="mr-2"
          />
          Print Customer Name
        </label>
      </div>

      <div className="mb-4">
        <label htmlFor="enableCustomText" className="flex items-center">
          <input
            id="enableCustomText"
            type="checkbox"
            checked={enableCustomText}
            onChange={handleCustomTextCheckboxChange}
            className="mr-2"
          />
          Print Custom Text
        </label>
        {enableCustomText && (
          <div>
            <label
              htmlFor="customText"
              className="block text-sm font-medium text-gray-700"
            >
              Custom Text:
            </label>
            <input
              type="text"
              id="customText"
              onChange={handleCustomTextChange}
              placeholder="Enter Custom Text Here"
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
    </div>
  );
};

export default Printing;