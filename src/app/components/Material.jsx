import React from 'react';

const Material = ({ selectedMaterials, setSelectedMaterials }) => {
  const materials = [
    { id: 'mat1', name: 'Material 1' },
    { id: 'mat2', name: 'Material 2' },
    { id: 'mat3', name: 'Material 3' },
  ];

  const handleCheckboxChange = (materialId) => {
    if (selectedMaterials.includes(materialId)) {
      setSelectedMaterials(selectedMaterials.filter(id => id !== materialId));
    } else {
      setSelectedMaterials([...selectedMaterials, materialId]);
    }
  };

  return (
    <div className="mt-4">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Material ID</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Material Name</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {materials.map((material) => (
            <tr key={material.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{material.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{material.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <input 
                  type="checkbox" 
                  checked={selectedMaterials.includes(material.id)}
                  onChange={() => handleCheckboxChange(material.id)}
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