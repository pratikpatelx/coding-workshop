import React from 'react';

const Notes = ({ designNotes, setDesignNotes }) => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Design Notes:</label>
        <textarea 
          value={designNotes} 
          onChange={(e) => setDesignNotes(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter your design notes here"
          rows="4"
        ></textarea>
      </div>
    </div>
  );
};

export default Notes;