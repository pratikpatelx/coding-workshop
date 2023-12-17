import React, { useState, useEffect } from 'react';

const Material = ({ selectedMaterials, setSelectedMaterials }) => {
  const [materials, setMaterials] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMaterials = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/materials');
        if (!response.ok) throw new Error('Failed to fetch materials');
        const data = await response.json();
        setMaterials(data.materials);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMaterials();
  }, []);

  const handleCheckboxChange = (materialId) => {
    setSelectedMaterials((prevSelectedMaterials) => {
      if (prevSelectedMaterials.includes(materialId)) {
        return prevSelectedMaterials.filter((id) => id !== materialId);
      } else {
        return [...prevSelectedMaterials, materialId];
      }
    });
  };

  if (isLoading) return <p>Loading materials...</p>;
  if (error) return <p>Error loading materials: {error}</p>;

  return (
    <div className="mt-4">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Material ID</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Material Name</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Select</th>
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