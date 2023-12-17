import React, { useState } from 'react';

const Material = ({ materials }) => {
  const [selectedMaterials, setSelectedMaterials] = useState([]);

  const handleMaterialCheck = (id) => {
    setSelectedMaterials((prevSelected) =>
      prevSelected.includes(id) ? prevSelected.filter(mid => mid !== id) : [...prevSelected, id]
    );
  };

  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Material ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Material Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Select</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {materials.map((material, index) => (
            <tr key={`${material.id}-${index}`}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{material.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{material.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <input
                  type="checkbox"
                  checked={selectedMaterials.includes(material.id)}
                  onChange={() => handleMaterialCheck(material.id)}
                  className="rounded"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Material;