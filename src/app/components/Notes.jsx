import React from 'react';

const Notes = ({ notes, setNotes }) => {
  return (
    <div>
      <div className="mb-4">
        <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
          Design Notes
        </label>
        <textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows="4"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        ></textarea>
      </div>
    </div>
  );
};

export default Notes;