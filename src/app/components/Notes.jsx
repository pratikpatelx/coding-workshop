import React from 'react';

const Notes = ({ designNotes, setDesignNotes }) => {
  return (
    <div className="my-4">
      <label htmlFor="designNotes" className="block text-sm font-medium text-gray-700">Design Notes:</label>
      <textarea
        id="designNotes"
        value={designNotes}
        onChange={(e) => setDesignNotes(e.target.value)}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        placeholder="Enter any design notes here..."
      />
    </div>
  );
};

export default Notes;