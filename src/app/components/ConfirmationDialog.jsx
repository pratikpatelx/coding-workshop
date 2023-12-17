import React from 'react';

const ConfirmationDialog = ({ isOpen, onCancel, onConfirm }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay absolute inset-0 bg-gray-500 opacity-75"></div>

      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        {/* Content of the confirmation dialog */}
        <div className="modal-content py-4 text-left px-6">
          <p className="text-xl font-semibold">Are you sure you want to submit?</p>
          <div className="mt-4 flex justify-end space-x-4">
            <button
              onClick={onCancel}
              className="text-gray-600 hover:text-gray-800 font-semibold"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;